import React from 'react';
import Link from 'next/link';
import { Badge } from "@/components/ui/badge";
import styles from '@/styles/ProductsGrid.module.css';

export default function ProductCard({ imageurl, imagealt, description, category, brand, newitem, producturl, slug }) {
  return (
    <div>
      <Link
        className={styles.linkdiv}
        href={slug ? `/image/${slug}` : (producturl || '#')}
      >
        {newitem && (
          <div style={{ position: 'absolute', right: 20, top: 20 }}>
            <Badge variant="outline">{newitem}</Badge>
          </div>
        )}

        <div className={styles.img}>
          {imageurl && (
            <img
              className={styles.animation}
              src={imageurl}
              alt={imagealt || ''}
              loading="lazy"
            />
          )}
        </div>
      </Link>

      <div className={styles.productinfo}>
        <div className={styles.productinfocontent}>
          <span>{brand}</span>
          <span>·</span>
          <span>{category}</span>
        </div>
        <span style={{ fontSize: 16, fontWeight: '400' }}>{description}</span>
      </div>
    </div>
  );
}
