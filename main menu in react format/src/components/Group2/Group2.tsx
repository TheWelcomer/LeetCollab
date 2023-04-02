import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Group2.module.css';
import { Rectangle2Icon } from './Rectangle2Icon.js';
import { Rectangle3Icon } from './Rectangle3Icon.js';
import { Rectangle5Icon } from './Rectangle5Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 9:17 */
export const Group2: FC<Props> = memo(function Group2(props = {}) {
  return (
    <>
      <div className={classes.rectangle6}></div>
      <div className={classes.rectangle1}></div>
      <div className={classes.line1}></div>
      <div className={classes.rectangle2}>
        <Rectangle2Icon className={classes.icon} />
      </div>
      <div className={classes.rectangle5}>
        <Rectangle5Icon className={classes.icon2} />
      </div>
      <div className={classes.rectangle3}>
        <Rectangle3Icon className={classes.icon3} />
      </div>
      <div className={classes.rectangle4}></div>
      <div className={classes.login}>
        <div className={classes.textBlock}>Login</div>
        <div className={classes.textBlock2}>
          <p></p>
        </div>
      </div>
      <div className={classes.codeBreakers}>CodeBreakers</div>
      <div className={classes._2Player}>2 Player </div>
      <div className={classes._1Player}>1 Player </div>
    </>
  );
});
