import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

interface InputProps {
  placeholder?: string,
  rows?: number,
  dark?: boolean,
  shadow?: boolean,
}

export default {
  title: 'Input/Textarea',
};

export const Primary = ({ placeholder, rows, dark, shadow }: InputProps) => {
  let css = "w-full border-2 px-3 py-2 rounded-lg focus:outline-none focus:border-indigo-500";

  if (dark) {
    css+=" bg-zinc-800 text-white border-gray-400";
  } else {
    css+=" bg-white border-gray-300";
  }

  if (shadow) css+=" shadow-lg";

  return (
    <textarea
      placeholder={placeholder}
      rows={rows}
      className={css}
    >
    </textarea>
  )
}
Primary.args = {
  placeholder: 'Type onn this thing',
  rows: 6,
  dark: false,
  shadow: false,
};