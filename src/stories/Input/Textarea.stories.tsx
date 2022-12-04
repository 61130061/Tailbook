import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

interface TextareaProps {
  placeholder?: string,
  rows?: number,
  dark?: boolean,
  shadow?: boolean,
}

export default {
  title: 'Input/Textarea',
};

export const Textarea = ({ placeholder, rows, dark, shadow }: TextareaProps) => {
  let css = "w-full border-[1.5px] px-3 py-2 rounded-lg focus:outline-none focus:ring-opacity-50 focus:ring-2 focus:ring-gray-300";

  if (dark) {
    css+=" bg-zinc-800 text-white border-gray-400";
  } else {
    css+=" border-gray-300";
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
Textarea.args = {
  placeholder: 'Type on this thing',
  rows: 6,
  dark: false,
  shadow: false,
};