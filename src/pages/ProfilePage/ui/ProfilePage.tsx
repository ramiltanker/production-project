import { FC } from 'react';
import styles from './ProfilePage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
  return <div className={classNames('')}></div>;
};

export default ProfilePage;
