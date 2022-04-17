import { connectToDatabase } from '../../lib/mongodb';

const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // connect to the database
      let { db } = await connectToDatabase();
      // add the post
      await db.collection('leads').insertOne(JSON.parse(req.body));
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
