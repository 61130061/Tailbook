import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

interface ButtonProps {
  label?: string,
  shadow?: boolean,
  animation?: boolean,
  icon?: boolean,
  outline?: boolean,
  rounded?:boolean,
}

export default {
  title: 'Button/Icon',
};

export const Icon = ({ label, shadow, animation, outline, rounded }: ButtonProps) => {
  let css = "p-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline disabled:bg-gray-400/80"

  if (rounded) {
    css+=" rounded-full"
  } else {
    css+=" rounded-md"
  }

  if (outline) {
    css+=" border-[1.5px] border-indigo-500 text-indigo-500 fill-indigo-500 select-none hover:text-white hover:fill-white hover:border-indigo-600 hover:bg-indigo-600"
  } else {
    css+=" bg-indigo-500 text-white fill-white"
  }

  if (shadow) css+=" shadow-indigo-700 shadow-md disabled:shadow-none disabled:cursor-not-allowed"

  if (animation) css+=" active:shadow-none active:scale-95 transition-colors duration-75"

  return (
    <button
      type="button"
      className={css}
    >
      <svg width="20px" height="20px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
          fill="currentColor"
        />
      </svg>
    </button>
  )
}
Icon.args = {
  shadow: false,
  animation: false,
  outline: false,
  rounded: false
};