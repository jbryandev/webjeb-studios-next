import connectToDatabase from '../../lib/mongodb';

export default async function handler(req, res) {
  const SECRET_KEY = process.env.RECAPTCHA_SECRETKEY;
  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${req.body.recaptchaResponse}`;

  if (req.method === 'POST') {
    try {
      // connect to the database
      let { db } = await connectToDatabase();
      // add the post
      await db.collection('leads').insertOne(req.body);
      // return a message
      return res.json({
        message: 'Lead added successfully',
        success: true,
      });
    } catch (error) {
      // return an error
      return res.json({
        message: new Error(error).message,
        success: false,
      });
    }
  }
}
