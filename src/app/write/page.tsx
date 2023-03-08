'use client';
import {Button, Input} from '@mui/material';
import dynamic from 'next/dynamic';
import React from 'react';
import styles from '../page.module.css';

interface WriteProps {
  title: string;
}

const Editor = dynamic(() => import('./components/Editor').then((m) => m.Editor), {ssr: false});

const Write: React.FC<WriteProps> = ({title}) => {
  return (
    <div className={styles.main}>
      <Input placeholder='Заголовок ' defaultValue={title} />
      <Editor />
      <Button>Опубликовать</Button>
    </div>
  );
};

export default Write;
