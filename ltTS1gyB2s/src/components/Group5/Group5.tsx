import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Group5.module.css';

interface Props {
  className?: string;
}
/* @figmaId 21:5 */
export const Group5: FC<Props> = memo(function Group5(props = {}) {
  return (
    <>
      <div className={classes.rectangle12}></div>
      <div className={classes.sorryThatsNotIt}>Sorry! Thats not it!</div>
    </>
  );
});
