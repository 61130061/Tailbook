import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

interface ButtonProps {
  label?: string,
  shadow?: boolean,
  animation?: boolean,
  icon?: boolean,
}

export default {
  title: 'Button/Secondary',
};

export const Secondary = ({ label, shadow, animation, icon }: ButtonProps) => {
  let css = "px-5 py-2 outline-none rounded font-medium hover:bg-indigo-400 hover:text-white focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed"

  css += " bg-indigo-50 text-indigo-500 fill-indigo-500 hover:fill-white"

  if (shadow) css+=" shadow-indigo-400 shadow-md disabled:shadow-none disabled:cursor-not-allowed"

  if (animation) css+=" active:shadow-none active:scale-95 transition-colors duration-75"

  if (icon) { 
    css += " flex gap-2 items-center"

    return (
      <button
        type="button"
        className={css}
      >
        <div>
          <svg
            height="18px"
            viewBox="0 0 15 15"
            width="18px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 6C2.34315 6 1 4.65685 1 3C1 1.34315 2.34315 0 4 0H11C12.6569 0 14 1.34315 14 3C14 4.65685 12.6569 6 11 6H9V3.5C9 2.11929 7.88071 1 6.5 1C5.11929 1 4 2.11929 4 3.5V6Z" />
            <path d="M6.5 2C5.67157 2 5 2.67157 5 3.5V8.05001C3.85888 8.28164 3 9.29052 3 10.5C3 12.9853 5.01472 15 7.5 15H8C10.7614 15 13 12.7614 13 10V9.14706C13 7.96127 12.0387 7 10.8529 7H8V3.5C8 2.67157 7.32843 2 6.5 2Z" />
          </svg>
        </div>
        <div>{label}</div>
      </button>
    )
  }

  return (
    <button
      type="button"
      className={css}
    >
      {label}
    </button>
  )
}
Secondary.args = {
  label: 'Button',
  shadow: false,
  animation: false,
  icon: false,
};