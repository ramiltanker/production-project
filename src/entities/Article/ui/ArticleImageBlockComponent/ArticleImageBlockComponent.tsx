import { FC } from 'react';
import styles from './ArticleImageBlockComponent.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleImageBlock } from 'entities/Article/model/types/article';
import { Text, TextAlign } from 'shared/ui/Text/Text';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = ({ className, block }) => {
  return (
    <div className={classNames(styles.articleImageBlockComponent, {}, [className])}>
      <img src={block.src} alt={block.title} className={styles.img} />
      {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
    </div>
  );
};

export { ArticleImageBlockComponent };
