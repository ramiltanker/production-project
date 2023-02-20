import { FC, useCallback } from 'react';
import styles from './AddCommentForm.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { getAddCommentFormError, getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { addCommentFromActions, addCommentFromReducer } from '../../model/slice/addCommentForm';

interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const initialReducers: ReducersList = {
  addCommentForm: addCommentFromReducer
};

const AddCommentForm: FC<AddCommentFormProps> = ({ className, onSendComment }) => {
  const error = useSelector(getAddCommentFormError);
  const text = useSelector(getAddCommentFormText);
  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(addCommentFromActions.setText(value));
    },
    [dispatch]
  );

  const onSendHandler = useCallback(() => {
    onCommentTextChange('');
    onSendComment(text ?? '');
  }, [onCommentTextChange, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(styles.addCommentForm, {}, [className])}>
        <Input
          className={styles.input}
          placeholder={t('Введите текст комментария')}
          value={text ?? ''}
          onChange={onCommentTextChange}
        />
        <Button theme={ButtonTheme.OUTLINE} onClick={onSendHandler}>
          {t('Отправить')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
};

export default AddCommentForm;
