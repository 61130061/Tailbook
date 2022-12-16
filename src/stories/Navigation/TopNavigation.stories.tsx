import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

interface NavProps {
}

export default {
  title: 'Navigation/Top Navigation',
};

export const TopNavigation = ({ }: NavProps) => {
  let menu = ['home', 'product', 'features', 'pricing'];

  return (
    <div
      className="sm:flex bg-white items-start sm:items-center justify-between p-2"
    >
      <div className="flex justify-between w-full sm:w-fit">
        <div className="text-3xl text-gray-800 font-semibold">Logo</div>
        <div className="sm:hidden">
          <button
            className="p-2 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed bg-transparent text-indigo-500 hover:bg-indigo-50 rounded-md"
            type="button"
          >
            <svg width="25px" height="25px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex flex-col sm:flex sm:flex-row">
        {menu.map((d, i) =>
          <button
            key={i}
            className="px-5 py-2 outline-none font-medium focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed bg-transparent text-indigo-500 hover:bg-indigo-50 rounded-md capitalize"
            type="button"
          >
            {d}
          </button>
        )}
      </div>
      <div className="border-b border-gray-300 my-2" />
      <div className="flex flex-col gap-2 sm:flex sm:flex-row sm:items-center">
        <button
          className="px-5 py-2 outline-none font-medium focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed bg-transparent text-indigo-500 hover:bg-indigo-50 rounded-md capitalize"
          type="button"
        >
          Sign in
        </button>
        <button
          className="px-4 py-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline disabled:bg-gray-400/80 rounded-md bg-indigo-500 text-white fill-white"
          type="button"
        >
          Register
        </button>
      </div>
    </div>
  )
}
TopNavigation.args = {
};