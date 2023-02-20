import { FC, memo } from 'react';
import styles from './ArticleTextBlockComponent.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleTextBlock } from '../../model/types/article';
import { Text } from 'shared/ui/Text/Text';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

const ArticleTextBlockComponent = memo(({ className, block }: ArticleTextBlockComponentProps) => {
  return (
    <div className={classNames(styles.articleTextBlockComponent, {}, [className])}>
      {block.title && <Text title={block.title} className={styles.title} />}
      {block.paragraphs.map((paragraph, index) => {
        return <Text key={paragraph} text={paragraph} className={styles.paragraph} />;
      })}
    </div>
  );
});

export { ArticleTextBlockComponent };
