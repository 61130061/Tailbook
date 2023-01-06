import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Input/Radio Card',
};

const demoData = [
  {
    title: 'Relaxed',
    desc: 'New campaign sent two months'
  },
  {
    title: 'Normal',
    desc: 'New campaign sent every month'
  },
  {
    title: 'Accelerated',
    desc: 'New campaign sent every two weeks'
  }
]

export const RadioCard = () => {

  return (
    <div className="grid grid-cols-3 gap-x-2">
      {demoData.map((d, i) =>
        <div className="relative flex">
          <input
            id={"id-" + i}
            name="push-notifications"
            type="radio"
            className={`peer appearance-none mr-3 h-3 w-3 rounded-full checked:bg-gray-800 ring-gray-300 ring-offset-2 ring-1 checked:ring-gray-600 hover:cursor-pointer absolute right-3 top-5`}
          />
          <label
            htmlFor={"id-" + i}
            className="w-full bg-white border rounded-lg px-5 py-3 hover:cursor-pointer peer-checked:border-gray-700 peer-checked:bg-gray-50"
          >
            <div className="text-gray-800 font-medium">{d.title}</div>
            <div className="text-gray-600 text-sm">{d.desc}</div>
          </label>

        </div>
      )}
    </div>
  )
}