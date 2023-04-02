import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Group4.module.css';

interface Props {
  className?: string;
}
/* @figmaId 21:4 */
export const Group4: FC<Props> = memo(function Group4(props = {}) {
  return (
    <>
      <div className={classes.rectangle12}></div>
      <div className={classes.thatsIt}>Thats it!</div>
    </>
  );
});
