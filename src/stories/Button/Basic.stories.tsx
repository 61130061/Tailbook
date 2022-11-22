import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

interface ButtonProps {
  label?: string,
  backgroundColor?: string
}

export default {
  title: 'Button/Basic',
};

export const Primary = ({ label }: ButtonProps) => {
  return (
    <button
      type="button"
      className="bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
    >
      {label}
    </button>
  )
}
Primary.args = {
  label: 'Button'
};

export const Outline = ({ label }: ButtonProps) => {
  return (
    <button
      type="button"
      className="border-2 border-indigo-500 text-indigo-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:border-indigo-600 hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
    >
      {label}
    </button>
  )
}
Outline.args = {
  label: 'Button'
};