import { FC, useTransition } from 'react';
import styles from './ArticleEditPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage: FC<ArticleEditPageProps> = ({ className }) => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);

  return (
    <Page className={classNames(styles.ArticleEditPage, {}, [className])}>
      {isEdit ? t('Редактирование статьи с ID = ') + String(id) : t('Создание новой статьи')}
    </Page>
  );
};

export default ArticleEditPage;
