import type { NextPage } from 'next';
import Layout from '../components/layout';
import styled from 'styled-components';
import Button from '../components/button';
import Section from '../components/section';
import BREAKPOINTS from '../constants';
import { useForm } from 'react-hook-form';

type FormData = {
  firstName: string;
  lastName: string;
};

const Contact: NextPage = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <Layout title='Webjeb Studios | Get Started'>
      <Section
        id='heading'
        customStyles={{
          backgroundColor: 'var(--color-dark-background)',
        }}
      >
        <h1 style={{ color: 'var(--color-text-headings-dark)' }}>
          Get Started
        </h1>
      </Section>
      <Section id='contact-form'>
        <p>Thank you for your interest in working with Webjeb Studios!</p>
        <p>
          Tell me a few basic details about your project, and I will get back in
          touch regarding next steps (usually within one business day).
        </p>
        <p>
          <strong>
            This form should take no more than 3 minutes to complete.
          </strong>
        </p>
        <form onSubmit={onSubmit}>
          <label>First Name</label>
          <input {...register('firstName')} />
          <label>Last Name</label>
          <input {...register('lastName')} />
          <button
            type='button'
            onClick={() => {
              setValue('lastName', 'luo'); // ✅
              setValue('firstName', true); // ❌: true is not string
              errors.bill; // ❌: property bill does not exist
            }}
          >
            SetValue
          </button>
        </form>
      </Section>
    </Layout>
  );
};

export default Contact;
