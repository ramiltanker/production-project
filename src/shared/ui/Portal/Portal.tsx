import { FC } from 'react';
import { createPortal } from 'react-dom';
import { classNames } from 'shared/lib/classNames/classNames';

interface PortalProps {
  children?: React.ReactNode;
  element?: HTMLElement;
}

const Portal: FC<PortalProps> = ({ children, element = document.body }) => {
  return createPortal(children, element);
};

export { Portal };
