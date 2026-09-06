const {
  AIRTABLE_API_KEY,
  AIRTABLE_BASE_ID,
  AIRTABLE_TABLE_NAME,
  REACT_APP_API_KEY,
  REACT_APP_API_BASE_ID,
  REACT_APP_DATA_TABLE_NAME,
} = process.env;

export async function getData() {
  const apiKey = AIRTABLE_API_KEY || REACT_APP_API_KEY;
  const baseId = AIRTABLE_BASE_ID || REACT_APP_API_BASE_ID;
  const tableName = AIRTABLE_TABLE_NAME || REACT_APP_DATA_TABLE_NAME;

  if (!apiKey || !baseId || !tableName) {
    throw new Error('Missing Airtable environment variables');
  }

  const records = [];
  let offset;

  do {
    const params = new URLSearchParams({ pageSize: '100' });
    if (offset) params.set('offset', offset);

    const url = `https://api.airtable.com/v0/${encodeURIComponent(baseId)}/${encodeURIComponent(tableName)}?${params.toString()}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: { Authorization: `Bearer ${apiKey}` },
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`Airtable request failed (${response.status}): ${errorBody}`);
    }

    const content = await response.json();
    records.push(...(content.records || []));
    offset = content.offset;
  } while (offset);

  return records;
}
