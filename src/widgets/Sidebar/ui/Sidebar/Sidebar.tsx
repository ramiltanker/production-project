import { FC, memo, useState } from 'react';
import styles from './Sidebar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selector/getSidebarItems';

interface SidebarProps {
  className?: string;
}

const Sidebar = memo(({ className = '' }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const sidebarItemsList = useSelector(getSidebarItems);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <menu data-testid="sidebar" className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [className])}>
      <Button
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.XL}
        square={true}
        className={classNames(styles.collapsedBtn)}
        data-testid="sidebar-toggle"
        onClick={onToggle}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={styles.items}>
        {sidebarItemsList.map((item) => {
          return <SidebarItem item={item} key={item.path} collapsed={collapsed} />;
        })}
      </div>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={styles.langSwitcher} short={collapsed} />
      </div>
    </menu>
  );
});

export { Sidebar };
