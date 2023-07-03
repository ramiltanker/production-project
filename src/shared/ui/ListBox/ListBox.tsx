import { FC, Fragment, ReactNode, useState } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { Listbox } from '@headlessui/react';
import styles from './ListBox.module.scss';
import { Button } from '../Button/Button';
import { HStack } from 'shared/Stack';

type DropdownDirection = 'top' | 'bottom';

const directionClasses: Record<DropdownDirection, string> = {
  bottom: styles.optionsBottom,
  top: styles.optionsTop
};

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps {
  className?: string;
  items: ListBoxItem[];
  value?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string;
}

const ListBox: FC<ListBoxProps> = (props) => {
  const { className, items, defaultValue, onChange, value, readonly, direction = 'bottom', label } = props;

  const optionsMods = [directionClasses[direction]];

  return (
    <HStack gap="4" align="center">
      {label && <span>{label + '>'}</span>}
      <Listbox
        as="div"
        className={classNames(styles.listBox, {}, [className])}
        value={value}
        onChange={onChange}
        disabled={readonly}
      >
        <Listbox.Button className={styles.trigger}>
          <Button disabled={readonly}>{value ?? defaultValue}</Button>
        </Listbox.Button>
        <Listbox.Options className={classNames(styles.options, {}, optionsMods)}>
          {items.map((item) => (
            <Listbox.Option key={item.value} value={item.value} disabled={item.disabled} as={Fragment}>
              {({ active, selected, disabled }) => (
                <li className={classNames(styles.item, { [styles.active]: active, [styles.disabled]: disabled })}>
                  {selected && '!!!'}
                  {item.content}
                </li>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </HStack>
  );
};

export { ListBox };
