import { FC, memo } from 'react';
import styles from './SidebarItem.module.scss';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from 'widgets/Sidebar/model/types/items';
import { classNames } from 'shared/lib/classNames/classNames';
import { getUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed?: boolean;
}

const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink
      to={item.path}
      className={classNames(styles.item, { [styles.collapsed]: collapsed })}
      theme={AppLinkTheme.PRIMARY_INVERTED}
    >
      <item.Icon className={styles.icon} />
      <span className={styles.link}>{t(item.text)}</span>
    </AppLink>
  );
});

export { SidebarItem };
