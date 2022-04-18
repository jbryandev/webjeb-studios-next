import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: 'james@webjebstudios.com',
      from: 'leads@webjebstudios.com',
      subject: `[ New Lead ] - ${req.body.company}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>Webjeb Studios | New Lead</title>
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      </head>
      <body>
        <img src="https://webjeb-studios-next.vercel.app/images/webjeb-studios-logo.png" alt="Webjeb Studios Logo">
        <h1>New Lead</h1>
        <p>
          <strong>Name:</strong> ${req.body.firstName} ${
        req.body.lastName
      }<br />
          <strong>Email:</strong> ${req.body.email}<br />
          <strong>Phone:</strong> ${req.body.phone}<br />
          <strong>Company:</strong> ${req.body.company}<br />
          <strong>Website:</strong> ${req.body.website}<br />
          <strong>Interest:</strong> ${req.body.interestedIn}<br />
          <strong>Intent:</strong> ${req.body.intent}<br />
          <strong>Lead Source:</strong> ${req.body.leadSource}<br />
          <strong>Additional Information:</strong> ${
            req.body.additionalInfo
          }<br />
          <strong>Date Created:</strong> ${new Date(
            req.body.createdAt
          ).toLocaleString('en-us', { timeZone: 'CST' })}<br />
        </p>
      </body>
      </html>`,
    });
  } catch (error) {
    console.error(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
  return res.status(200).json({ message: 'Email sent' });
}

export default sendEmail;
