import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  const body = JSON.parse(req.body);
  try {
    await sendgrid.send({
      to: 'james@webjebstudios.com',
      from: 'leads@webjebstudios.com',
      subject: `[ New Lead ] - ${body.company}`,
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
          <strong>Name:</strong> ${body.firstName} ${body.lastName}<br />
          <strong>Email:</strong> ${body.email}<br />
          <strong>Phone:</strong> ${body.phone}<br />
          <strong>Company:</strong> ${body.company}<br />
          <strong>Website:</strong> ${body.website}<br />
          <strong>Interest:</strong> ${body.interestedIn}<br />
          <strong>Intent:</strong> ${body.intent}<br />
          <strong>Lead Source:</strong> ${body.leadSource}<br />
          <strong>Additional Information:</strong> ${body.additionalInfo}<br />
          <strong>Date Created:</strong> ${new Date(
            body.createdAt
          ).toLocaleString('en-us', { timeZone: 'CST' })}<br />
        </p>
      </body>
      </html>`,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
  return res.status(200).json({ message: 'Email sent' });
}
