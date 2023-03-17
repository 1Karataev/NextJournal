'use client';
import React from 'react';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import {IconButton} from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import NoteIcon from '@mui/icons-material/Note';
import style from './post.module.scss';

const Post: React.FC = () => {
  return (
    <div className={style.container}>
      <h2>ЗАГОЛОВОК</h2>
      <p>текст</p>
      <div className={style.icon_container}>
        <IconButton><ChatBubbleIcon/></IconButton>
        <IconButton><SwapHorizIcon/></IconButton>
        <IconButton><NoteIcon/></IconButton>
        <IconButton><ShareIcon/></IconButton>
      </div>
    </div>

  );
};

export default Post;
