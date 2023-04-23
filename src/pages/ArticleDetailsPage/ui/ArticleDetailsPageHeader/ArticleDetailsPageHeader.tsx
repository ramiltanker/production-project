import { FC, useCallback } from 'react';
import styles from './ArticleDetailsPageHeader.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { getArticleDetailsData } from 'entities/Article';
import { getUserAuthData } from 'entities/User';
import { getCanEditArticle } from '../../model/selectors/article';
import { useSelector } from 'react-redux';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

const ArticleDetailsPageHeader: FC<ArticleDetailsPageHeaderProps> = ({ className }) => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const userData = useSelector(getUserAuthData);
  const article = useSelector(getArticleDetailsData);
  const canEdit = useSelector(getCanEditArticle);

  const onBackToList = useCallback(() => {
    navigate(RoutePath.article_details);
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    if (article?.id) {
      navigate(`${RoutePath.article_details}${article.id}/edit`);
    }
  }, [article?.id, navigate]);

  return (
    <div className={classNames(styles.ArticleDetailsPageHeader, {}, [className])}>
      <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
        {t('Назад к списку')}
      </Button>
      {canEdit && (
        <Button className={styles.editBtn} theme={ButtonTheme.OUTLINE} onClick={onEditArticle}>
          {t('Редактировать')}
        </Button>
      )}
    </div>
  );
};

export { ArticleDetailsPageHeader };
