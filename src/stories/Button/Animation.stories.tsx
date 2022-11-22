import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

interface ButtonProps {
  label?: string,
  backgroundColor?: string
}

export default {
  title: 'Button/Animation',
};

export const Primary = ({ label }: ButtonProps) => {
  return (
    <button 
      className="px-5 py-2 bg-indigo-500 outline-none rounded text-white shadow-indigo-700 shadow-md font-medium active:shadow-none active:scale-95 hover:bg-indigo-600 focus:bg-indigo-600 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed transition-colors duration-200"
    >
      {label}
    </button>
  )
}
Primary.args = {
  label: 'Button'
};

export const Secondary = ({ label }: ButtonProps) => {
  return (
    <button
      className="px-5 py-2 bg-indigo-50 outline-none rounded text-indigo-500 font-medium active:scale-95 hover:bg-indigo-400 hover:text-white focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed transition-colors duration-200"
    >
      {label}
    </button>
  )
}
Secondary.args = {
  label: 'Secondary'
};

export const Outline = ({ label }: ButtonProps) => {
  return (
    <button
      className="px-5 py-2 bg-transparent outline-none border-2 border-indigo-400 rounded text-indigo-500 font-medium active:scale-95 hover:bg-indigo-600 hover:text-white hover:border-transparent focus:bg-indigo-600 focus:text-white focus:border-transparent focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed transition-colors duration-200"
    >
      {label}
    </button>
  )
}
Outline.args = {
  label: 'Outline'
};