/* eslint-disable max-len */
import { ArticleList } from 'entities/Article';
import { Article, ArticleView } from 'entities/Article/model/types/article';
import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
  return (
    <div className={classNames('', {}, [className])}>
      <ArticleList view={ArticleView.BIG} isLoading={true} articles={[]} />
    </div>
  );
};

export default memo(ArticlesPage);
