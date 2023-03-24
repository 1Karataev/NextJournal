'use client';
import React from 'react';
import style from './CommentView.module.scss';
import {Avatar, Button} from '@mui/material';
import {deepOrange} from '@mui/material/colors';

const CommentView = () => {
  return (
    <div className={style.container}>
      <div className={style.info}>
        <Avatar sx={{bgcolor: deepOrange[500]}}>N</Avatar>
        <p>VASYA</p>
        <span>
              time
        </span>
      </div>
      <div className={style.text}>
        textetstetetetete
      </div>
      <div>
        <Button variant="text">Ответить</Button>
      </div>
    </div>
  );
};

export default CommentView;
