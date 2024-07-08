import { HeroWidget } from '@/widgets/hero';

import classes from './classes.module.css';

export default function Home() {
  return (
    <main className={classes.main}>
      <HeroWidget />
    </main>
  );
}
