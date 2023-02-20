import { FC } from 'react';
import styles from './ArticleCodeBlockComponent.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleCodeBlock } from 'entities/Article/model/types/article';
import { Code } from 'shared/ui/Code/Code';

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> = ({ className, block }) => {
  return (
    <div className={classNames(styles.ArticleCodeBlockComponent, {}, [className])}>
      <Code text={block.code}></Code>
    </div>
  );
};

export { ArticleCodeBlockComponent };
