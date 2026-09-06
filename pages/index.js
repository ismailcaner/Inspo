import React from 'react';
import styles from '../styles/ProductsGrid.module.css';
import Link from 'next/link';
import ProductCard from '@/components/customComponents/ProductCard';
import { getData } from './api/fetchRecords';

export async function getStaticProps() {
  const data = await getData();

  return {
    props: { data },
    revalidate: 1,
  };
}

export default function Home({ data = [] }) {
  return (
    <div>
      <header className={styles.header}>
        <Link href='/' style={{ fontSize: 35, fontWeight: '100' }}>Inspo</Link>
      </header>

      <div style={{ margin: '16px 16px 0px 16px' }}>
        <div className={styles.productsGrid}>
          {data.map((record) => {
            const fields = record?.fields || {};
            const imageUrl = fields.png?.[0]?.url;

            return (
              <div className={styles.productcard} key={record.id}>
                <ProductCard
                  slug={record.id}
                  newitem={fields.new}
                  imageurl={imageUrl}
                  imagealt={fields.description || 'Product image'}
                  description={fields.description}
                  category={fields.category}
                  brand={fields.brand}
                  producturl={fields.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
