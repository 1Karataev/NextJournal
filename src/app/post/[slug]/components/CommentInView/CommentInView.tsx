'use client';
import React from 'react';
import {Tab, Tabs} from '@mui/material';
import style from './CommentInView.module.scss';
import Box from '@mui/material/Box';
import CommentView from '@/app/post/[slug]/components/CommentInView/CommentView/CommentView';

const CommentInView: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={style.container}>
      <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Популярные" />
          <Tab label="По порядку" />
        </Tabs>
      </Box>

      <div>
        <div hidden={value !== 0} >
          <CommentView/>
          <CommentView/>
          <CommentView/>
          <CommentView/>
          <CommentView/>
        </div>
        <div hidden={value !== 1} >
          <CommentView/>
        </div>
      </div>
    </div>
  );
};

export default CommentInView;
