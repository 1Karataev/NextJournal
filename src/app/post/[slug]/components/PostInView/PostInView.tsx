'use client';
import React from 'react';
import {IconButton} from '@mui/material';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import NoteIcon from '@mui/icons-material/Note';
import ShareIcon from '@mui/icons-material/Share';
import style from './PostInView.module.scss';

const PostInView: React.FC = () => {
  return (
    <div className={style.container}>
      <h2>ЗАГОЛОВОК</h2>
      <p>тексттексттексттексттексттекстvvvvvтексттексттексттексттексттекстvvтекстvvv</p>
      <div className={style.icon_container}>
        <IconButton><ChatBubbleIcon/></IconButton>
        <IconButton><SwapHorizIcon/></IconButton>
        <IconButton><NoteIcon/></IconButton>
        <IconButton><ShareIcon/></IconButton>
      </div>
    </div>
  );
};

export default PostInView;
