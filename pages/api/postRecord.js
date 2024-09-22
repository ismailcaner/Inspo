import axios from 'axios';

export default async function handler(req, res) {
  const { NEXT_PUBLIC_API_KEY, NEXT_PUBLIC_BASE_ID, NEXT_PUBLIC_USER_TABLE_NAME } = process.env;
  const userdata = `https://api.airtable.com/v0/${NEXT_PUBLIC_BASE_ID}/${NEXT_PUBLIC_USER_TABLE_NAME}`;

  if (req.method === 'POST') {
    try {
      const response = await axios.post(userdata, {
        fields: req.body
      }, {
        headers: {
          Authorization: `Bearer ${NEXT_PUBLIC_API_KEY}`,
          'Content-Type': 'application/json'
        }
      });
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Error adding record' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
