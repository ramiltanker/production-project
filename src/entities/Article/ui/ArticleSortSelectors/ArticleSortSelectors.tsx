import { FC, useMemo } from 'react';
import styles from './ArticleSortSelectors.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { ArticleSortField } from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types';

interface ArticleSortSelectorsProps {
  className?: string;
  order: SortOrder;
  sort: ArticleSortField;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

const ArticleSortSelectors: FC<ArticleSortSelectorsProps> = ({
  className,
  order,
  sort,
  onChangeOrder,
  onChangeSort
}) => {
  const { t } = useTranslation();

  const orderOptions = useMemo<Array<SelectOption<SortOrder>>>(() => {
    return [
      {
        value: 'asc',
        content: t('возрастанию')
      },
      {
        value: 'desc',
        content: t('убыванию')
      }
    ];
  }, [t]);

  const fieldOptions = useMemo<Array<SelectOption<ArticleSortField>>>(() => {
    return [
      {
        value: ArticleSortField.CREATED,
        content: t('дате создания')
      },
      {
        value: ArticleSortField.TITLE,
        content: t('названию')
      },
      {
        value: ArticleSortField.VIEWS,
        content: t('просмотрам')
      }
    ];
  }, [t]);

  return (
    <div className={classNames(styles.ArticleSortSelectors, {}, [className])}>
      <Select
        label={t('Сортировать по')}
        options={fieldOptions}
        value={sort}
        onChange={onChangeSort}
        className={styles.select}
      />
      <Select
        label={t('Сортировать по')}
        options={orderOptions}
        value={order}
        onChange={onChangeOrder}
        className={classNames(styles.select, {}, [styles.order])}
      />
    </div>
  );
};

export { ArticleSortSelectors };
