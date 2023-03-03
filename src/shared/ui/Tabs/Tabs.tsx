import { FC, ReactNode, useCallback } from 'react';
import styles from './Tabs.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card, CardTheme } from '../Card/Card';

export interface TabItem<T extends string> {
  value: T;
  content: ReactNode;
}

interface TabsProps<T extends string> {
  className?: string;
  tabs: Array<TabItem<T>>;
  currentTabValue: T;
  onTabClick: (tab: TabItem<T>) => void;
}

const Tabs = <T extends string>({ className, tabs, currentTabValue, onTabClick }: TabsProps<T>) => {
  const clickHandle = useCallback(
    (tab: TabItem<T>) => {
      return () => {
        onTabClick(tab);
      };
    },
    [onTabClick]
  );

  return (
    <div className={classNames(styles.Tabs, {}, [className])}>
      {tabs.map((tab) => {
        return (
          <Card
            className={styles.tab}
            key={tab.value}
            theme={tab.value === currentTabValue ? CardTheme.NORMAL : CardTheme.OUTLINED}
            onClick={clickHandle(tab)}
          >
            {tab.content}
          </Card>
        );
      })}
    </div>
  );
};

export { Tabs };
