import React, { useState } from 'react';
import styles from '@/styles/ProductsGrid.module.css';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { X, Send } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function CustomDialog() {
  const [inputValue, setInputValue] = useState('');
  const [userurl, setInputUrl] = useState('');
  const [usernotes, setInputNotes] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const addRecord = async (newRecord) => {
    try {
      const response = await fetch('/api/postRecord', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRecord),
      });
    console.log('test')
    } catch (error) {
      console.error('Error adding record:', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecord({
      usermail: inputValue,
      userurl: userurl,
      usernotes: usernotes,
    });
    setInputValue('');
    setInputUrl('');
    setInputNotes('');
    setIsDialogOpen(false);
    toast({
      title: "Sent to.",
      description: "Thanks for your suggestion.",
      action: <ToastAction altText="Close"><X size={16} /></ToastAction>,
    });
  };

  return (
  <div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger className={styles.dialogdesktop}>
                <span style={{display:'flex', flexDirection:'row', gap:5, alignItems:'center'}}>Submit<Send size={15} /></span>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Submit a product</DialogTitle>
                  <DialogDescription>
                    Send me a product you like and if I like it too, you will see it in the product list.
                    With respect, please do not submit more than 5 products a day.
                  </DialogDescription>
                </DialogHeader>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: 20 }}>
                  <span>Email</span>
                  <Input className={styles.input} value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="email" placeholder="johndoe@example.com" required />
                  <span>Product URL</span>
                  <Input className={styles.input} value={userurl} onChange={(e) => setInputUrl(e.target.value)} type="url" placeholder="https://example.com" required />
                  <span>Description</span>
                  <Textarea className={styles.input} value={usernotes} onChange={(e) => setInputNotes(e.target.value)} type="text" placeholder="Enter description(Optional)" />
                </div>
                <Button aria-label="Submit" onClick={handleSubmit} disabled={!inputValue || !userurl}>Submit</Button>
              </DialogContent>
            </Dialog>
        
    </div>
  );
};

