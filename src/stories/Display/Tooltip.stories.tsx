import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

interface TooltipProps {
}

export default {
  title: 'Display/Tooltip',
};

export const Tooltip = ({ }: TooltipProps) => {

  return (
    <div className="min-h-[320px] py-6 flex flex-col justify-center">
      <div className="relative py-3 mx-auto">
        <div className={`group cursor-pointer relative inline-block border-b border-gray-200 hover:border-gray-300 w-28 text-center`}>
          Hover over me
          <div className={`opacity-0 w-28 bg-black text-white text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full -left-1/2 ml-14 px-3 pointer-events-none`}>
            Tooltip center
            <svg className="absolute text-black h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255">
              <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
            </svg>
          </div>
        </div>
      </div>
    </div> 
  )
}
Tooltip.args = {
};