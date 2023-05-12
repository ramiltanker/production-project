/* eslint-disable max-len */
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Comment } from '../../model/types/comment';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { CommentCard } from '../CommentCard/CommentCard';
import { VStack } from 'shared/Stack';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

const CommentList = memo(({ className, comments, isLoading }: CommentListProps) => {
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <VStack gap="16" max className={classNames('', {}, [className])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </VStack>
    );
  }

  return (
    <VStack gap="16" className={classNames('', {}, [className])}>
      {comments?.length
        ? (
            comments?.map((comment) => {
              return <CommentCard key={comment.id} comment={comment} isLoading={isLoading} />;
            })
          )
        : (
          <Text text={t('Комментарии отсутствуют')} />
          )}
    </VStack>
  );
});

export { CommentList };
