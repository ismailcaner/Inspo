
const { NEXT_PUBLIC_API_KEY, NEXT_PUBLIC_BASE_ID, NEXT_PUBLIC_DATA_TABLE_NAME } = process.env;
const data = `https://api.airtable.com/v0/${NEXT_PUBLIC_BASE_ID}/${NEXT_PUBLIC_DATA_TABLE_NAME}`;

const apimethod = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${NEXT_PUBLIC_API_KEY}`,
  }
};

export async function getData() {
  const response = await fetch(data, apimethod);
  const content = await response.json();
  return content.records;
}