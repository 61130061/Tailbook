import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

interface DropdownProps {
  outline?: boolean,
}

export default {
  title: 'Navigation/Dropdown Menu',
};

export const DropdownMenu = ({ outline }: DropdownProps) => {

  let buttonCSS = "text-gray-700 hover:text-blue-700 font-medium flex items-center justify-between p-2"

  if (outline) buttonCSS+=" border rounded hover:border-blue-400"

  return (
    <div className="h-[320px]">
      <div className="group w-fit">
        <button
          className={buttonCSS}
        >
          <span>Dropdown</span>
          <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        <div className="absolute group-hover:block hover:block hidden pt-2">
          <div className="w-fit rounded-lg text-gray-600 bg-white flex flex-col px-2 py-1 divide-y shadow-lg shadow-slate-200 border">
            <div className="py-1">
              <div className="rounded-lg py-2 px-3 hover:bg-slate-100 hover:cursor-pointer">
                Import task
              </div>
              <div className="rounded-lg py-2 px-3 hover:bg-slate-100 hover:cursor-pointer">
                Email notification
              </div>
              <div className="rounded-lg py-2 px-3 hover:bg-slate-100 hover:cursor-pointer">
                Save as template
              </div>
            </div>
            <div className="py-1">
              <div className="rounded-lg py-2 px-3 hover:bg-slate-100 hover:cursor-pointer">
                Account
              </div>
              <div className="rounded-lg py-2 px-3 hover:bg-slate-100 hover:cursor-pointer">
                Setting
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
DropdownMenu.args = {
  outline: false
};