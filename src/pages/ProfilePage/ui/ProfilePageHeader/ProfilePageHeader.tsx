import { FC, useCallback } from 'react';
import styles from './ProfilePageHeader.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

interface ProfilePageHeaderProps {
  className?: string;
}

const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({ className }) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const readonly = useSelector(getProfileReadonly);

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={styles.header}>
      <Text title={t('Профиль')} />
      {readonly
        ? (
          <Button className={styles.editBtn} theme={ButtonTheme.OUTLINE} onClick={onEdit}>
            {t('Редактировать')}
          </Button>
          )
        : (
          <div className={styles.buttons}>
            <Button className={styles.editBtn} theme={ButtonTheme.OUTLINE_RED} onClick={onCancelEdit}>
              {t('Отменить')}
            </Button>
            <Button className={styles.editBtn} theme={ButtonTheme.OUTLINE} onClick={onSave}>
              {t('Сохранить')}
            </Button>
          </div>
          )}
    </div>
  );
};

export { ProfilePageHeader };
