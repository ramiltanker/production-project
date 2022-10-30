import { FC } from 'react';
import styles from './Profile.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from '../model/slice/profileSlice';

interface ProfileProps {
  className?: string;
}

const initialReducers: ReducersList = {
  profile: profileReducer
};

const Profile: FC<ProfileProps> = ({ className }) => {
  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames('')}></div>
    </DynamicModuleLoader>
  );
};

export { Profile };
