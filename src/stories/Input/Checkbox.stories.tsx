import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

interface CheckboxProps {
}

export default {
  title: 'Input/Checkbox',
};

export const Checkbox = ({ }: CheckboxProps) => {

  return (
    <div className="flex items-center items-start mb-4">
      <input
        id="checkbox"
        type="checkbox"
        className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded accent-gray-700"
      />
      <label htmlFor="checkbox" className="text-sm ml-3 font-medium text-gray-900">I agree to the <a href="#" className="text-blue-600 hover:underline">terms and conditions</a></label>
    </div>
  )
}