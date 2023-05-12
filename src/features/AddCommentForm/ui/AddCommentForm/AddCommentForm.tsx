import { FC, useCallback } from 'react';
import styles from './AddCommentForm.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getAddCommentFormError, getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import { addCommentFromActions, addCommentFromReducer } from '../../model/slice/addCommentForm';
import { HStack } from 'shared/Stack';

interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const initialReducers: ReducersList = {
  addCommentForm: addCommentFromReducer
};

const AddCommentForm: FC<AddCommentFormProps> = ({ className, onSendComment }) => {
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
      <HStack justify="space-between" align='center' max className={classNames(styles.addCommentForm, {}, [className])}>
        <Input
          className={styles.input}
          placeholder={t('Введите текст комментария')}
          value={text ?? ''}
          onChange={onCommentTextChange}
        />
        <Button theme={ButtonTheme.OUTLINE} onClick={onSendHandler}>
          {t('Отправить')}
        </Button>
      </HStack>
    </DynamicModuleLoader>
  );
};

export default AddCommentForm;
