import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

interface RadioProps {
  labelColor?: boolean,
}

export default {
  title: 'Input/Radio',
};

const options = ['Everything', 'Same as email', 'No push notifications'];

export const Radio = ({ labelColor }: RadioProps) => {

  return (
    <fieldset>
      <legend className="contents text-base font-medium text-gray-900">Push Notifications</legend>
      <p className="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
      <div className="mt-4 space-y-4">
        {options.map((d, i) => 
          <div key={i} className="flex items-center">
            <input
              id={"push-everything-"+i}
              name="push-notifications"
              type="radio"
              className={`${labelColor ? 'peer ':''}appearance-none mr-3 h-3 w-3 rounded-full checked:bg-blue-400 ring-gray-300 ring-offset-1 ring-2 checked:ring-blue-300 hover:cursor-pointer`}
            />
            <label 
              htmlFor={"push-everything-" + i}
              className={`block hover:cursor-pointer text-sm font-medium text-gray-700${labelColor ? ' peer-checked:text-blue-500':''}`}
            >
              {d}
            </label>
          </div>
        )}
      </div>
    </fieldset>
  )
}
Radio.args = {
  labelColor: true
}