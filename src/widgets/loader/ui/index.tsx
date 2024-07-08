import { motion } from 'framer-motion';

import { IconLoader2 } from '@tabler/icons-react';

import { iconAnimationConfig } from './motion';

export function LoaderWidgetUi() {
  return (
    <motion.div variants={iconAnimationConfig} animate="animate">
      <IconLoader2 size="100%" color="var(--accent-color-01)" />
    </motion.div>
  );
}
