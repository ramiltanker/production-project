import { FC } from 'react';
import styles from './ProfileCard.module.scss';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from '../../model/types/profile';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstname?: (value: string) => void;
  onChangeLastname?: (value: string) => void;
  onChangeCity?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeUsername?: (value: string) => void;
  onChangeCurrency?: (value: Currency) => void;
  onChangeCountry?: (value: Country) => void;
}

const ProfileCard: FC<ProfileCardProps> = ({
  className,
  data,
  isLoading,
  error,
  readonly,
  onChangeFirstname,
  onChangeLastname,
  onChangeCity,
  onChangeAge,
  onChangeAvatar,
  onChangeUsername,
  onChangeCurrency,
  onChangeCountry
}) => {
  const { t } = useTranslation('profile');

  const mods: Mods = {
    [styles.editing]: !readonly
  };

  if (isLoading) {
    return (
      <div className={classNames(styles.profileCard, { [styles.loading]: true }, [className])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(styles.profileCard, {}, [className, styles.error])}>
        <Text
          title={t('Произошла ошибка при загрузки профиля')}
          text={t('Попробуйте обновить страницу')}
          theme={TextTheme.ERROR}
        />
      </div>
    );
  }

  return (
    <div className={classNames(styles.profileCard, mods, [className])}>
      <div className={styles.data}>
        {data?.avatar && (
          <div className={styles.avatarWrapper}>
            <Avatar src={data?.avatar} alt="Avatar" />
          </div>
        )}
        <Input
          value={data?.firstname}
          placeholder={t('Ваше имя')}
          readonly={readonly}
          onChange={onChangeFirstname}
          className={styles.input}
        />
        <Input
          value={data?.lastname}
          placeholder={t('Ваша фамилия')}
          readonly={readonly}
          onChange={onChangeLastname}
          className={styles.input}
        />
        <Input
          value={data?.age}
          placeholder={t('Ваш возраст')}
          readonly={readonly}
          onChange={onChangeAge}
          className={styles.input}
        />
        <Input
          value={data?.city}
          placeholder={t('Город')}
          readonly={readonly}
          onChange={onChangeCity}
          className={styles.input}
        />
        <Input
          value={data?.username}
          placeholder={t('Имя пользователя')}
          readonly={readonly}
          onChange={onChangeUsername}
          className={styles.input}
        />
        <Input
          value={data?.avatar}
          placeholder={t('Введите ссылку на аватар')}
          readonly={readonly}
          onChange={onChangeAvatar}
          className={styles.input}
        />
        <CurrencySelect
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
          className={styles.input}
        />
        <CountrySelect value={data?.country} onChange={onChangeCountry} readonly={readonly} className={styles.input} />
      </div>
    </div>
  );
};

export { ProfileCard };
