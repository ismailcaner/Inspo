import React, { useState } from 'react';
import styles from '../styles/ProductsGrid.module.css';
import { Separator } from "@/components/ui/separator";
import Link from 'next/link';
import ProductCard from '@/components/customComponents/ProductCard';
import Dialog from '@/components/customComponents/Dialog';
import Drawer from '@/components/customComponents/Drawer';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { getData } from './api/fetchRecords';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export async function getStaticProps() {
  const data = await getData();
  return {
    props: {data},
    revalidate: 1,};
}

export default function Home({ data }) {
  const [category, setCategory] = useState();
  const filteredRecords = !category || category === 'all' ? data : data.filter(record => { if (category === 'new') { return record.fields.new; }return record.fields.category === category;});

  return (
    <div>
      <header className={styles.header}>
        <Link href='/' style={{ fontSize: 35, fontWeight: '100' }}>Inspo</Link>
        <div style={{ display: 'flex' }}>
          <div className={styles.categorydesktop}>
            <Select onValueChange={setCategory} value={category}>
              <SelectTrigger className="w-[100]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Everything</SelectItem>
                <Separator />
                <SelectItem value="home">Home</SelectItem>
                <SelectItem value="workspace">Workspace</SelectItem>
                <SelectItem value="tech">Tech</SelectItem>
                <SelectItem value="personal">Personal</SelectItem>
                <SelectItem value="life">Life style</SelectItem>
                <SelectItem value="new">
                  <div style={{display:'flex', flexDirection:'row', gap:5, alignItems:'center'}}>
                    <span>New Item</span>
                    <Sparkles size={16} />
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className={styles.submitdesktop}>
            <Dialog />
          </div>
        </div>

        <div className={styles.submitmobile}>
          <Drawer />
        </div>

      </header>
      
  <div style={{ margin:'16px 16px 0px 16px'}}>
      <div className={styles.productsGrid}>
        <div className={styles.categorymobil}>
        <Select onValueChange={setCategory} value={category}>
              <SelectTrigger className="w-[100%]">
              <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Everything</SelectItem>
                <Separator />
                <SelectItem value="home">Home</SelectItem>
                <SelectItem value="workspace">Workspace</SelectItem>
                <SelectItem value="tech">Tech</SelectItem>
                <SelectItem value="personal">Personal</SelectItem>
                <SelectItem value="life">Life style</SelectItem>
                <SelectItem value="new">
                  <div style={{display:'flex', flexDirection:'row', gap:5, alignItems:'center'}}>
                    <span>New Item</span>
                    <Sparkles size={16} />
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
        </div>

  

        {filteredRecords.map(record => (
      
          <div className={styles.productcard} key={record.id}>
         <ProductCard
            newitem={record.fields.new}
            imageurl={record.fields.png[0].url}
            imagealt={record.fields.description}
            description={record.fields.description}
            catagory={record.fields.catagory}
            brand={record.fields.brand}
            producturl={record.fields.url}
            png={record.fields.png } />
          </div>
       
        ))}
      </div>

      <footer style={{ height:'5rem', display:'flex', justifyContent:'space-between' }}>
        <Link style={{ display: 'flex', alignItems: 'center', alignItems:'center' }} href='https://www.ismailcaner.com/' target='_blank'>İsmail Caner<ArrowUpRight size={16} /></Link>
        <Link style={{ display: 'flex', alignItems: 'center', alignItems:'center' }} href='https://www.instagram.com/lsmailcaner/' target='_blank'>Follow me Instagram<ArrowUpRight size={16} /></Link>
      </footer>
    </div>
    </div>
  );
};