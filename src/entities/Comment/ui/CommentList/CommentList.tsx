import { memo } from 'react';
import styles from './CommentList.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Comment } from 'entities/Comment/model/types/comment';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

const CommentList = memo(({ className, comments, isLoading }: CommentListProps) => {
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(styles.commentList, {}, [className])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </div>
    );
  }

  return (
    <div className={classNames(styles.commentList, {}, [className])}>
      {comments?.length
        ? (
            comments?.map((comment) => {
              return <CommentCard
                className={styles.comment}
                key={comment.id}
                comment={comment}
                isLoading={isLoading}
               />;
            })
          )
        : (
          <Text text={t('Комментарии отсутствуют')} />
          )}
    </div>
  );
});

export { CommentList };
