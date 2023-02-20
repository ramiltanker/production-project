import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
  return <div className={classNames('', {}, [className])}>ARTICLES PAGE</div>;
};

export default memo(ArticlesPage);
