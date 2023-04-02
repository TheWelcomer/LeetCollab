import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Group3.module.css';

interface Props {
  className?: string;
}
/* @figmaId 18:13 */
export const Group3: FC<Props> = memo(function Group3(props = {}) {
  return (
    <>
      <div className={classes.rectangle7}></div>
      <div className={classes.rectangle9}></div>
      <div className={classes.rectangle10}></div>
      <div className={classes.rectangle11}></div>
      <div className={classes.undoRedo}>undo redo</div>
      <div className={classes.line2}></div>
      <div className={classes.questionGoesHere}>question goes here</div>
      <div className={classes.programAnswerGoesHere}>program answer goes here</div>
      <div className={classes.rectangle8}></div>
      <div className={classes.chatGoesHere}>chat goes here</div>
      <div className={classes.line3}></div>
      <div className={classes.checkAnswer}>
        <div className={classes.textBlock}>check</div>
        <div className={classes.textBlock2}>answer</div>
      </div>
      <div className={classes.line4}></div>
    </>
  );
});
