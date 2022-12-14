import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

interface PopoverListProps {
  shadow?: boolean,
  outline?: boolean,
  icon?: boolean,
}

export default {
  title: 'Display/Popover List',
};

export const PopoverList = ({ shadow, outline, icon }: PopoverListProps) => {
  let sub1 = ['Import task', 'Email notification', 'Save as template']
  let sub2 = ['Account']
  let containerCSS = "w-fit rounded-lg text-gray-600 bg-white flex flex-col px-2 py-1 divide-y" 

  if (shadow) containerCSS+=" shadow-lg shadow-slate-200";
  if (outline) containerCSS+=" border";

  return (
    <div className={containerCSS}>
      <div className="py-1">
        {sub1.map((d, i) =>
          <div key={i} className="rounded-lg py-2 px-3 hover:bg-slate-100 hover:cursor-pointer">
            {d}
          </div>
        )}
      </div>
      <div className="py-1">
        {sub2.map((d, i) =>
          <div key={i} className="rounded-lg py-2 px-3 hover:bg-slate-100 hover:cursor-pointer">
            {d}
          </div>
        )}
        {icon ?
          <div className="flex gap-2 items-center rounded-lg py-2 px-3 hover:bg-slate-100 hover:cursor-pointer">
            <div className="fill-gray-500 w-[20px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" version="1.1">
                <path d="M27.526,18.036L27,17.732c-0.626-0.361-1-1.009-1-1.732s0.374-1.371,1-1.732l0.526-0.304 c1.436-0.83,1.927-2.662,1.098-4.098l-1-1.732c-0.827-1.433-2.666-1.925-4.098-1.098L23,7.339c-0.626,0.362-1.375,0.362-2,0 c-0.626-0.362-1-1.009-1-1.732V5c0-1.654-1.346-3-3-3h-2c-1.654,0-3,1.346-3,3v0.608c0,0.723-0.374,1.37-1,1.732 c-0.626,0.361-1.374,0.362-2,0L8.474,7.036C7.042,6.209,5.203,6.701,4.375,8.134l-1,1.732c-0.829,1.436-0.338,3.269,1.098,4.098 L5,14.268C5.626,14.629,6,15.277,6,16s-0.374,1.371-1,1.732l-0.526,0.304c-1.436,0.829-1.927,2.662-1.098,4.098l1,1.732 c0.828,1.433,2.667,1.925,4.098,1.098L9,24.661c0.626-0.363,1.374-0.361,2,0c0.626,0.362,1,1.009,1,1.732V27c0,1.654,1.346,3,3,3h2 c1.654,0,3-1.346,3-3v-0.608c0-0.723,0.374-1.37,1-1.732c0.625-0.361,1.374-0.362,2,0l0.526,0.304 c1.432,0.826,3.271,0.334,4.098-1.098l1-1.732C29.453,20.698,28.962,18.865,27.526,18.036z M16,21c-2.757,0-5-2.243-5-5s2.243-5,5-5 s5,2.243,5,5S18.757,21,16,21z"></path>
              </svg>
            </div>
            <div>Setting</div>
          </div>:
          <div className="rounded-lg py-2 px-3 hover:bg-slate-100 hover:cursor-pointer">
            Setting
          </div>
        }
      </div>
    </div>
  )
}
PopoverList.args = {
  shadow: true,
  outline: true,
  icon: false,
};