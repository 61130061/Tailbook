import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

interface GroupProps {
  shadow?: boolean,
  icon?: boolean,
}

export default {
  title: 'Button/Group',
};

export const Group = ({ shadow, icon }: GroupProps) => {
  return (
    <nav 
      className={`isolate inline-flex -space-x-px rounded-md${shadow ? ' shadow-sm':''}`}
      aria-label="Pagination"
    >
      {[...Array(3)].map((d, i) =>
        <button
          key={i}
          className="relative inline-flex gap-1 items-center first:rounded-l-md last:rounded-r-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
        >
          {icon &&
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
          }
          Button
        </button>
      )}
    </nav>
  )
}
Group.args = {
  shadow: true,
  icon: false,
}