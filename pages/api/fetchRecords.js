const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID, AIRTABLE_TABLE_NAME } = process.env;

export async function getData() {
  if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID || !AIRTABLE_TABLE_NAME) {
    throw new Error('Missing Airtable environment variables');
  }

  const records = [];
  let offset;

  do {
    const params = new URLSearchParams({
      pageSize: '100',
    });

    if (offset) params.set('offset', offset);

    const url = `https://api.airtable.com/v0/${encodeURIComponent(AIRTABLE_BASE_ID)}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}?${params.toString()}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      },
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
