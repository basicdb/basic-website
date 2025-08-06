import type { NextApiRequest, NextApiResponse } from 'next';

if (!process.env.AIRTABLE_API_KEY) {
  throw new Error('Missing AIRTABLE_API_KEY environment variable');
}

if (!process.env.AIRTABLE_BASE_ID) {
  throw new Error('Missing AIRTABLE_BASE_ID environment variable');
}

const AIRTABLE_API_URL = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/general-waitlist`;
const airtableHeaders = {
  'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`,
  'Content-Type': 'application/json',
};

type ResponseData = {
  success: boolean;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Method not allowed' 
    });
  }

  try {
    const { email } = req.body;

    // Validate email
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid email address' 
      });
    }

    // Create record in Airtable
    const response = await fetch(AIRTABLE_API_URL, {
      method: 'POST',
      headers: airtableHeaders,
      body: JSON.stringify({
        records: [{
          fields: {
            email
          }
        }]
      })
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Airtable API error:', error);
      throw new Error('Failed to create record in Airtable');
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Email submitted successfully' 
    });
  } catch (error) {
    console.error('Error processing email submission:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    });
  }
} 