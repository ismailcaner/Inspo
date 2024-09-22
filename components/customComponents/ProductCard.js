import React from 'react';
import { Badge } from "@/components/ui/badge";
import styles from '@/styles/ProductsGrid.module.css';

export default function ProductCard({ imageurl, imagealt, description, catagory, brand, newitem, producturl }) {
  return (
    <div>
    <a className={styles.linkdiv} href={producturl} target='_blank' rel='noopener noreferrer'>
      <div style={{position:'absolute', right:20, top:20}}>
    <Badge variant="outline" className={newitem === ' ' ? styles.test : ''} >{newitem}</Badge>
    </div>
      <div className={styles.img}>
        <img className={styles.animation} src={imageurl} alt={imagealt} loading="eager" />
      </div>
    </a>
    <div className={styles.productinfo}>
      <div className={styles.productinfocontent}>
        <span>{brand}</span>
        <span>·</span>
        <span>{catagory}</span>
      </div>
      <span style={{ fontSize: 16, fontWeight: '400' }}>{description}</span>
    </div>
  </div>
  );
}
