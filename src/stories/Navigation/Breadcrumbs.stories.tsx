import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

interface BreadProps {
}

export default {
  title: 'Navigation/Breadcrumbs',
};

export const Breadcrumbs = ({ }: BreadProps) => {

  const buttonCSS = `hover:bg-slate-50 hover:text-sky-700 px-2 py-1 rounded-lg`;
  const strokeWidth = 2;

  return (
    <div className="h-[320px]">
      <div className="flex gap-1 items-center text-gray-600 text-sm font-medium">
        <button className={buttonCSS}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
          </svg>
        </button>
        <div className="text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            strokeWidth={strokeWidth} stroke="currentColor"
            className="w-4 h-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
        <button className={buttonCSS}>Level one</button>
        <div className="text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            strokeWidth={strokeWidth} stroke="currentColor"
            className="w-4 h-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
        <div className="relative">
          <button className={buttonCSS}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          </button>
          <div className="absolute py-2 mt-1 rounded-lg shadow -left-[30px] w-[120px]">
            {['two', 'three', 'four', 'five'].map((d, i) => 
              <div 
                key={i} 
                className="px-3 py-2 hover:bg-slate-100 hover:cursor-pointer"
              >
                Level {d}
              </div>
            )}
          </div>
        </div>
        <div className="text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            strokeWidth={strokeWidth} stroke="currentColor"
            className="w-4 h-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
        <button className={buttonCSS}>Level six</button>
        <div className="text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            strokeWidth={strokeWidth} stroke="currentColor"
            className="w-4 h-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
        <div className="px-2 py-1 rounded-lg font-bold text-gray-700">
          Active
        </div>
      </div>
    </div>
  )
}

export const Simple = ({ }: BreadProps) => {

  const itemCSS = "px-1 font-semibold hover:underline hover:underline-offset-2";
  const dividerCSS = "font-thin text-gray-600";

  return (
    <div className="flex gap-1 text-sm text-gray-700">
      <button className={itemCSS}>Home</button>
      <div className={dividerCSS}>/</div>
      <button className={itemCSS}>Level one</button>
      <div className={dividerCSS}>/</div>
      <button className={itemCSS}>Level two</button>
      <div className={dividerCSS}>/</div>
      <button className={itemCSS}>Level three</button>
      <div className={dividerCSS}>/</div>
      <div className="text-gray-400">Active Page</div>
    </div>
  )
}