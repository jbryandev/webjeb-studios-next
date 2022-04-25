import Layout from '../components/layout';
import Section from '../components/section';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string, array, number } from 'yup';
import styled from 'styled-components';
import BREAKPOINTS from '../constants';
import { useRouter } from 'next/router';
import Button from '../components/button';
import Script from 'next/script';

// types used for validation
type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  interestedIn: string;
  intent: string;
  leadSource: string;
  additionalInfo: string;
  challenge: number;
};

function Contact() {
  const router = useRouter();

  // decides whether to show the form or the confirmation message
  const confirmationScreenVisible =
    router.query?.success && router.query.success === 'true';
  const formVisible = !confirmationScreenVisible;

  // form validation schema
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  const validationSchema = object({
    firstName: string().required('First name is required'),
    lastName: string().required('Last name is required'),
    email: string().email().required('Email is required'),
    phone: string().matches(phoneRegex, {
      message: 'Phone number is not valid',
      excludeEmptyString: true,
    }),
    company: string(),
    website: string(),
    interestedIn: array()
      .nullable()
      .min(1, 'Please select at least one option')
      .required('Please select at least one option'),
    intent: string().nullable().required('Please select an option'),
    leadSource: string().nullable().required('Please select an option'),
    additionalInfo: string(),
    challenge: number()
      .positive('Must be a positive number')
      .required('Please provide an answer')
      .typeError('Please enter a valid number'),
  }).required();
  const formOptions = { resolver: yupResolver(validationSchema) };

  // checkbox validation (at least one checked)
  const atLeastOne = () =>
    getValues('interestedIn').length
      ? true
      : 'Please select at least one option';

  // react hook form initialization
  const { register, handleSubmit, getValues, formState } =
    useForm<FormData>(formOptions);
  const { errors } = formState;

  // reCAPTCHA public site key
  const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY;

  // handle form submission
  function onSubmit(data: FormData) {
    if (data.challenge === 5) {
      // Challenge correct, this is a real user
      createLead(data);
    } else {
      // Challenge incorrect, this is a bot, redirect to home
      router.push('/');
    }
  }

  // create a new lead from form data and return json response
  async function createLead(data: FormData) {
    const lead = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      company: data.company,
      website: data.website,
      interestedIn: data.interestedIn,
      intent: data.intent,
      leadSource: data.leadSource,
      additionalInfo: data.additionalInfo,
      createdAt: new Date().toISOString(),
    };
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify(lead),
    };

    // send new lead email
    const email = await fetch('/api/sendgrid', requestOptions);
    const emailResponse = await email.json();

    // return await fetch('/api/createLead', requestOptions).then(handleResponse);
  }

  // handle the response from the server and redirect to confirmation screen
  async function handleResponse(response: Response) {
    let result = await response.json();
    if (result.success) {
      router.push('/contact?success=true');
    } else {
      console.log(result.message);
      return result.message;
    }
  }

  // content of the form
  const ShowForm = (
    <>
      <FormDescription>
        Thank you for your interest in working with Webjeb Studios! Tell me a
        few basic details about your project, and I will get back in touch
        regarding next steps (usually within one business day).{' '}
        <strong>
          This form should take no more than 3 minutes to complete.
        </strong>
      </FormDescription>
      <ContactForm onSubmit={handleSubmit(onSubmit)}>
        <InputGroupSpan4>
          <label>First Name*</label>
          <input {...register('firstName')} />
          <p className='error'>{errors.firstName?.message}</p>
        </InputGroupSpan4>
        <InputGroupSpan4>
          <label>Last Name*</label>
          <input {...register('lastName')} />
          <p className='error'>{errors.lastName?.message}</p>
        </InputGroupSpan4>
        <InputGroupSpan4>
          <label>Email*</label>
          <input {...register('email')} />
          <p className='error'>{errors.email?.message}</p>
        </InputGroupSpan4>
        <InputGroupSpan4>
          <label>Phone</label>
          <input {...register('phone')} />
          <p className='error'>{errors.phone?.message}</p>
        </InputGroupSpan4>
        <InputGroupSpan4>
          <label>Company</label>
          <input {...register('company')} />
          <p className='error'>{errors.company?.message}</p>
        </InputGroupSpan4>
        <InputGroupSpan4>
          <label>Website</label>
          <input {...register('website')} placeholder='https://' />
          <p className='error'>{errors.website?.message}</p>
        </InputGroupSpan4>
        <FieldsetSpan4>
          <legend>I'm interested in (select all that apply):*</legend>
          <Checkbox>
            <input
              {...register('interestedIn', { validate: atLeastOne })}
              type='checkbox'
              key={1}
              value={'A website redesign'}
            />
            <label>A website redesign</label>
          </Checkbox>
          <Checkbox>
            <input
              {...register('interestedIn', { validate: atLeastOne })}
              type='checkbox'
              key={2}
              value={'A new website'}
            />
            <label>A new website design</label>
          </Checkbox>
          <Checkbox>
            <input
              {...register('interestedIn', { validate: atLeastOne })}
              type='checkbox'
              key={3}
              value={'Maintenance'}
            />
            <label>Website maintenance</label>
          </Checkbox>
          <Checkbox>
            <input
              {...register('interestedIn', { validate: atLeastOne })}
              type='checkbox'
              key={4}
              value={'SEO'}
            />
            <label>Search engine optimization</label>
          </Checkbox>
          <Checkbox>
            <input
              {...register('interestedIn')}
              type='checkbox'
              key={5}
              value={'Other'}
            />
            <label>Other</label>
          </Checkbox>
          <p className='error'>{errors.interestedIn?.message}</p>
        </FieldsetSpan4>
        <FieldsetSpan4>
          <legend>Please choose one:*</legend>
          <Radio>
            <input
              {...register('intent')}
              type='radio'
              key={1}
              value={'Ready to start'}
            />
            <label>I'm ready to get started on a project!</label>
          </Radio>
          <Radio>
            <input
              {...register('intent')}
              type='radio'
              key={2}
              value={'I have some questions'}
            />
            <label>I'm interested but have some questions.</label>
          </Radio>
          <Radio>
            <input
              {...register('intent')}
              type='radio'
              key={3}
              value={'I want to spam you'}
            />
            <label>I'm a robot and want to send you some spam.</label>
          </Radio>
          <Radio>
            <input
              {...register('intent')}
              type='radio'
              key={4}
              value={'Other'}
            />
            <label>Other</label>
          </Radio>
          <p className='error'>{errors.intent?.message}</p>
        </FieldsetSpan4>
        <FieldsetSpan8>
          <legend>How'd you hear about us?*</legend>
          <Radio>
            <input
              {...register('leadSource')}
              type='radio'
              key={1}
              value={'Referral'}
            />
            <label>I was referred by a friend or colleage</label>
          </Radio>
          <Radio>
            <input
              {...register('leadSource')}
              type='radio'
              key={2}
              value={'A site you designed'}
            />
            <label>I saw a site you designed</label>
          </Radio>
          <Radio>
            <input
              {...register('leadSource')}
              type='radio'
              key={3}
              value={'Google search'}
            />
            <label>Google search</label>
          </Radio>
          <Radio>
            <input
              {...register('leadSource')}
              type='radio'
              key={4}
              value={'Other'}
            />
            <label>Other</label>
          </Radio>
          <p className='error'>{errors.leadSource?.message}</p>
        </FieldsetSpan8>
        <InputGroupSpan8>
          <label>Questions or additional information</label>
          <textarea {...register('additionalInfo')} rows={5} />
        </InputGroupSpan8>
        <ChallengeQ>
          <label>2 + 3 = ?*</label>
          <input {...register('challenge')} maxLength='3' />
          <p className='error'>{errors.challenge?.message}</p>
        </ChallengeQ>
        <StyledButton type='submit' disabled={formState.isSubmitting}>
          Submit
        </StyledButton>
        {/* reCAPTCHA script */}
        <Script src='https://www.google.com/recaptcha/api.js?render=reCAPTCHA_site_key'></Script>
      </ContactForm>
    </>
  );

  // content to display after form submission
  const ShowConfirmation = (
    <>
      <FormDescription>
        Thank you for getting in touch with me about your project needs. I will
        review your information and get back in touch with you soon. I look
        forward to talking with you!
      </FormDescription>
      <Button href='/' variant='secondary'>
        Back to home
      </Button>
    </>
  );

  return (
    <Layout title='Webjeb Studios | Get Started'>
      <Section
        id='heading'
        customStyles={{
          backgroundColor: 'var(--color-dark-background)',
        }}
      >
        <h1 style={{ color: 'var(--color-text-headings-dark)' }}>
          {/* Change heading depending on form submission status */}
          {formVisible ? 'Get Started' : 'Thank you!'}
        </h1>
      </Section>
      <Section id='contact-form'>
        {/* Show either the form or the confirmation screen */}
        {formVisible ? ShowForm : ShowConfirmation}
      </Section>
    </Layout>
  );
}

export default Contact;

const FormDescription = styled.p`
  max-width: 70ch;
`;
const ContactForm = styled.form`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: var(--document-padding);
  p.error {
    margin-bottom: 0;
    font-size: 1.8rem;
    color: red;
  }

  @media (max-width: ${BREAKPOINTS.mobile}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StyledInputGroup = styled.div`
  label,
  input,
  textarea {
    width: 100%;
  }
  input,
  textarea {
    padding: 0.5rem;
    border-width: 1px;
  }
`;

const InputGroupSpan4 = styled(StyledInputGroup)`
  grid-column: span 4;
`;

const InputGroupSpan8 = styled(StyledInputGroup)`
  grid-column: span 8;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    grid-column: span 4;
  }
`;

const ChallengeQ = styled(InputGroupSpan8)`
  label,
  input {
    width: auto;
  }

  label {
    margin-right: 1rem;
  }
`;

const StyledFieldset = styled.fieldset`
  border: 0;
  padding-left: 0;
  input {
    margin-right: 0.5rem;
  }
`;

const FieldsetSpan4 = styled(StyledFieldset)`
  grid-column: span 4;
`;

const FieldsetSpan8 = styled(StyledFieldset)`
  grid-column: span 8;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    grid-column: span 4;
  }
`;

const Checkbox = styled.div`
  width: 100%;
`;

const Radio = styled.div`
  width: 100%;
`;

const StyledButton = styled.button`
  text-decoration: none;
  font-size: 1.8em;
  font-weight: 700;
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: var(--button-padding);
  border: 2px solid;
  border-radius: 3px;
  display: inline-block;
  color: #fff;
  border-color: var(--color-primary);
  background-color: var(--color-primary);
  transition-property: background-color, border-color;
  transition-duration: 0.4s;
  transition-timing-function: ease-in-out;

  &:hover {
    background-color: var(--color-secondary);
    border-color: var(--color-secondary);
    transition-property: background-color, border-color;
    transition-duration: 0.4s;
    transition-timing-function: ease-in-out;
`;
