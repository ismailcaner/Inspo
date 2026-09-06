import Link from 'next/link';
import { getData } from '../api/fetchRecords';

export async function getStaticPaths() {
  const data = await getData();

  return {
    paths: data.map((record) => ({
      params: { slug: record.id },
    })),
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const data = await getData();
  const record = data.find((item) => item.id === params.slug);

  if (!record) {
    return { notFound: true };
  }

  return {
    props: {
      record,
    },
    revalidate: 1,
  };
}

export default function ProductPage({ record }) {
  const fields = record?.fields || {};
  const imageUrl = fields.png?.[0]?.url;

  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: 24 }}>
      <div style={{ marginBottom: 24 }}>
        <Link href="/">← Inspo</Link>
      </div>

      {imageUrl && (
        <div style={{ marginBottom: 24 }}>
          <img
            src={imageUrl}
            alt={fields.description || 'Product image'}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      )}

      <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
        {fields.brand && <span>{fields.brand}</span>}
        {fields.brand && fields.category && <span>·</span>}
        {fields.category && <span>{fields.category}</span>}
      </div>

      {fields.description && (
        <h1 style={{ fontSize: 28, fontWeight: 400, margin: '0 0 24px' }}>
          {fields.description}
        </h1>
      )}

      {fields.url && (
        <a
          href={fields.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'inline-block' }}
        >
          View product ↗
        </a>
      )}
    </main>
  );
}
