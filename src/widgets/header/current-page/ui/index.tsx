import classes from './classes.module.css';

interface ICurrentPageUi {
  pageName: string;
}

export function CurrentPageUi({ pageName }: ICurrentPageUi) {
  return (
    <div className={classes.currentPage}>
      <span className={classes.currentPage__text}>{pageName}</span>
    </div>
  );
}
