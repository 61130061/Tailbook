import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

interface ProgressProps {
  text: string,
  rounded: boolean,
  animate: boolean
}

export default {
  title: 'Display/Progress',
};

export const Progress = ({ rounded, animate, text }: ProgressProps) => {

  return (
    <div>
      <div className={`w-full min-h-[10px] bg-slate-100${rounded ? ' rounded-full' : ' rounded'}`}>
        <div
          className={`${animate ? 'animate-pulse ' : ''}min-h-[10px] bg-emerald-400 text-xs leading-none py-1 text-center text-white${rounded ? ' rounded-full' : ' rounded'}`}
          style={{ width: '45%' }}
        >
          {text}
        </div>
      </div>
    </div>
  )
}
Progress.args = {
  text: '45%',
  rounded: true,
  animate: false
};