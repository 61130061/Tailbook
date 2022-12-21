import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

interface StepsProps {
  current: number,
}

export default {
  title: 'Navigation/Steps',
};

const demo = ['Job details', 'Application form', 'Preview']

export const Steps = ({ current }: StepsProps) => {
  return (
    <div className="w-full flex gap-8 text-sm font-medium">
      {demo.map((d, i) => 
        <div
          key={i}
          className={`flex-1 border-t-4${i < current ? ' border-blue-500' : ' border-gray-200'} pt-5 hover:cursor-pointer`}
        >
          <div className={i < current ? 'text-blue-500 hover:text-blue-600' : ' text-gray-600 hover:text-gray-700'}>
            Step {i + 1}
          </div>
          <div>
            {d}
          </div>
        </div>
      )}
    </div>
  )
}
Steps.args = {
  current: 2
}