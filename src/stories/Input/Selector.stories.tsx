import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Input/Selector',
};

export const Selector = ({ }) => {

  return (
    <div className="text-sm">
      <button className="flex items-center justify-between font-medium text-gray-700 px-4 py-2 w-[240px] border rounded-lg shadow-sm">
        <div>Selector 3</div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3 text-gray-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      <div className="w-[240px] h-[240px] overflow-y-scroll py-2 mt-1 border rounded-lg shadow-sm">
        {[...Array(10)].map((d, i) =>
          <div
            key={i}
            className="px-3 py-2 hover:bg-slate-100 flex justify-between items-center hover:cursor-pointer"
          >
            <div>Select {i + 1}</div>
            {i + 1 == 3 &&
              < svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            }
          </div>
        )}
      </div>
    </div>
  )
}