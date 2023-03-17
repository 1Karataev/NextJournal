import React from 'react';
import Post from '@/app/components/post/Post';
import style from './MainPage.module.scss';

const MainPage: React.FC = () => {
  return (
    <div className={style.container}>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  );
};

export default MainPage;
