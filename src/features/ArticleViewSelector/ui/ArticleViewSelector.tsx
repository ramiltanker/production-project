import { FC } from 'react';
import styles from './ArticleViewSelector.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleView } from 'entities/Article';
import ArticleSelectorBIG from 'shared/assets/icons/articles-big.svg';
import ArticleSelectorSMALL from 'shared/assets/icons/articles-small.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.SMALL,
    icon: ArticleSelectorSMALL
  },
  {
    view: ArticleView.BIG,
    icon: ArticleSelectorBIG
  }
];

const ArticleViewSelector: FC<ArticleViewSelectorProps> = ({ className, view, onViewClick }) => {
  const onClick = (newView: ArticleView) => {
    return () => {
      onViewClick(newView);
    };
  };

  return (
    <div className={classNames(styles.ArticleViewSelector, {}, [className])}>
      {viewTypes.map((viewType) => {
        return (
          <Button theme={ButtonTheme.CLEAR} key={viewType.view} onClick={onClick(viewType.view)}>
            <Icon SVG={viewType.icon} className={classNames('', { [styles.selected]: view === viewType.view })} />
          </Button>
        );
      })}
    </div>
  );
};

export { ArticleViewSelector };
