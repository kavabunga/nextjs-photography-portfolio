import { LoaderWidget } from '@/widgets/loader';

import classes from './classes.module.css';

export function GalleryLoaderContainerUi() {
  return (
    <div className={classes.container}>
      <LoaderWidget />
    </div>
  );
}
