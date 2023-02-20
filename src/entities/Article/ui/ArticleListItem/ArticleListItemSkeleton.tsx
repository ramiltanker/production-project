import { FC } from 'react';
import styles from './ArticleListItem.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleView } from '../../model/types/article';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

const ArticleListItemSkeleton: FC<ArticleListItemSkeletonProps> = ({ className, view }) => {
  if (view === ArticleView.BIG) {
    return (
      <div className={classNames(styles.ArticleListItemSkeleton, {}, [className, styles[view]])}>
        <Card className={styles.card}>
          <div className={styles.header}>
            <Skeleton width={30} height={30} border={'50%'} />
            <Skeleton width={150} height={16} className={styles.username} />
            <Skeleton width={150} height={16} className={styles.date} />
          </div>
          <Skeleton width={250} height={24} className={styles.title} />
          <Skeleton height={200} className={styles.img} />
          <div className={styles.footer}>
            <Skeleton height={36} width={200} />
          </div>
        </Card>
      </div>
    );
  } else {
    return (
      <div className={classNames(styles.ArticleListItemSkeleton, {}, [className, styles[view]])}>
        <Card className={styles.card}>
          <div className={styles.imgWrapper}>
            <Skeleton width={200} height={200} className={styles.img} />
          </div>
          <div className={styles.infoWrapper}>
            <Skeleton width={130} height={16} />
          </div>
          <Skeleton width={150} height={16} className={styles.title} />
        </Card>
      </div>
    );
  }
};

export { ArticleListItemSkeleton };
