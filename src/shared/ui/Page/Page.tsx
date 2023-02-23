import { FC, MutableRefObject, ReactNode, useRef } from 'react';
import styles from './Page.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfinityScroll } from 'shared/lib/hooks/useInfinityScroll/useInfinityScroll';

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

const Page: FC<PageProps> = ({ className, children, onScrollEnd }) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfinityScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd
  });

  return (
    <section ref={wrapperRef} className={classNames(styles.page, {}, [className])}>
      {children}
      <div ref={triggerRef} />
    </section>
  );
};

export { Page };
