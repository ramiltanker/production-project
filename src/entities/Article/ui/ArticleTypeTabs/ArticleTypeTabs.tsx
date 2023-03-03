import { FC, useMemo } from 'react';
import styles from './ArticleTypeTabs.module.scss';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from 'entities/Article/model/types/article';
import { useTranslation } from 'react-i18next';

interface ArticleTypeTabsProps {
  className?: string;
  currentTabValue: ArticleType;
  onTabClick: (tab: TabItem<ArticleType>) => void;
}

const ArticleTypeTabs: FC<ArticleTypeTabsProps> = ({ className, currentTabValue, onTabClick }) => {
  const { t } = useTranslation();

  const typeTabs = useMemo<Array<TabItem<ArticleType>>>(() => {
    return [
      {
        content: t('Все'),
        value: ArticleType.ALL
      },
      {
        content: 'IT',
        value: ArticleType.IT
      },
      {
        content: t('Экономика'),
        value: ArticleType.ECONOMICS
      },
      {
        content: t('Наука'),
        value: ArticleType.SCIENCE
      }
    ];
  }, [t]);

  return <Tabs tabs={typeTabs} currentTabValue={currentTabValue} onTabClick={onTabClick} className={styles.tabs} />;
};

export { ArticleTypeTabs };
