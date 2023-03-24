import React from 'react';
import {NextPage} from 'next';
import PostInView from '@/app/post/[slug]/components/PostInView/PostInView';
import style from './page.module.scss';
import CommentInView from '@/app/post/[slug]/components/CommentInView/CommentInView';

interface PostViewProps {
  title: string;
}

const PostView: NextPage<PostViewProps> = () => {
  return (
    <div className={style.container}>
      <div className={style.post}>
        <PostInView/>
      </div>

      <div className={style.comment}>
        <CommentInView/>
      </div>
    </div>
  );
};

export default PostView;
