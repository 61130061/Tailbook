import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

interface InputProps {
  placeholder?: string,
  dark?: boolean,
  shadow?: boolean,
  icon?: boolean,
  type?: string
}

export default {
  title: 'Input/Input',
  argTypes: {
    type: {
      options: ['text', 'email', 'password'],
      control: { type: 'select' },
    },
    icon: {
      description: "🚸 still working on it"
    }
  },
};

export const Input = ({ placeholder, dark, shadow, type, icon }: InputProps) => {
  let css = "px-3 py-2 rounded-lg border-[1.5px] focus:outline-none focus:ring-opacity-50 focus:ring-2 focus:ring-gray-300";

  if (dark) {
    css+=" bg-zinc-800 text-white border-gray-400";
  } else {
    css+=" border-gray-300";
  }

  if (shadow) css+=" shadow-lg";

  /*
    String not working!!
    TODO:
      - Fix icon
  */
  if (icon) {
    return (
      <div className="relative w-[320px]">
        <input
          type={type}
          placeholder={placeholder}
          className={css + " w-full pr-[38px]"}
        />
        <div className={dark ? "absolute top-2 right-2 fill-gray-300" : "absolute top-2 right-2 fill-gray-500" }>
          <svg width="24px" height="24px" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 487.95 487.95">
            <g>
              <g>
                <path d="M481.8,453l-140-140.1c27.6-33.1,44.2-75.4,44.2-121.6C386,85.9,299.5,0.2,193.1,0.2S0,86,0,191.4s86.5,191.1,192.9,191.1
			c45.2,0,86.8-15.5,119.8-41.4l140.5,140.5c8.2,8.2,20.4,8.2,28.6,0C490,473.4,490,461.2,481.8,453z M41,191.4
			c0-82.8,68.2-150.1,151.9-150.1s151.9,67.3,151.9,150.1s-68.2,150.1-151.9,150.1S41,274.1,41,191.4z"/>
              </g>
            </g>
          </svg>
        </div>
      </div>
    )
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={css}
    >
    </input>
  )
}
Input.args = {
  placeholder: 'Placeholder',
  type: 'text',
  dark: false,
  shadow: false,
  icon: false,
};

export const Success = ({ placeholder, type }: InputProps) => {
  let css = "text-green-500 placeholder-green-600 px-3 py-2 rounded-lg border-[1.5px] border-green-500 focus:outline-none focus:ring-opacity-50 focus:ring-2 focus:ring-green-300";

  return (
    <input
      placeholder={placeholder}
      className={css}
      type={type}
    >
    </input>
  )
}
Success.args = {
  placeholder: 'Success',
  type: 'text',
  dark: false
};

export const Warning = ({ placeholder, type }: InputProps) => {
  let css = "text-yellow-500 placeholder-yellow-600 px-3 py-2 rounded-lg border-[1.5px] border-yellow-500 focus:outline-none focus:ring-opacity-50 focus:ring-2 focus:ring-yellow-300";

  return (
    <input
      placeholder={placeholder}
      className={css}
      type={type}
    >
    </input>
  )
}
Warning.args = {
  placeholder: 'Warning',
  type: 'text',
  dark: false
};

export const Error = ({ placeholder, type }: InputProps) => {
  let css = "text-red-500 placeholder-red-600 px-3 py-2 rounded-lg border-[1.5px] border-red-500 focus:outline-none focus:ring-opacity-50 focus:ring-2 focus:ring-red-300";

  return (
    <input
      placeholder={placeholder}
      className={css}
      type={type}
    >
    </input>
  )
}
Error.args = {
  placeholder: 'Error',
  type: 'text',
  dark: false
};