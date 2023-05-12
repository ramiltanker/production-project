import { FC, ReactNode } from 'react';
import styles from './Flex.module.scss';
import { Mods, classNames } from 'shared/lib/classNames/classNames';

export type FlexJustify = 'flex-start' | 'center' | 'flex-end' | 'space-between';
export type FlexAlign = 'flex-start' | 'center' | 'flex-end';
export type FlexDirection = 'row' | 'column';
export type FlexGap = '4' | '8' | '16' | '32';

const justifyClasses: Record<FlexJustify, string> = {
  'flex-start': styles.justifyStart,
  'flex-end': styles.justifyEnd,
  center: styles.justifyCenter,
  'space-between': styles.justifySpaceBetween
};

const alignClasses: Record<FlexAlign, string> = {
  'flex-start': styles.alignStart,
  'flex-end': styles.alignEnd,
  center: styles.alignCenter
};

const directionClasses: Record<FlexDirection, string> = {
  column: styles.directionColumn,
  row: styles.directionRow
};

const gapClasses: Record<FlexGap, string> = {
  4: styles.gap4,
  8: styles.gap8,
  16: styles.gap16,
  32: styles.gap32
};

export interface FlexProps {
  className?: string;
  children?: ReactNode;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction: FlexDirection;
  gap?: FlexGap;
  max?: boolean;
}

const Flex: FC<FlexProps> = (props) => {
  const { align = 'flex-start', children, className, direction, justify = 'flex-start', gap = '4', max } = props;

  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gapClasses[gap]
  ];

  const mods: Mods = {
    [styles.max]: max
  };

  return <div className={classNames(styles.Flex, mods, classes)}>{children}</div>;
};

export { Flex };
