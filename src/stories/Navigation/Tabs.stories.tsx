import React from 'react';
import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

interface TabsProps {
  label?: boolean,
  icon?: boolean
}

export default {
  title: 'Navigation/Tabs',
};

const menu = ['JSX', 'JS', 'HTML']

export const Tabs = ({ label, icon }: TabsProps) => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex w-full bg-white border-b border-gray-200 gap-5">
      {menu.map((d, i) =>
        <div
          key={i}
          onClick={() => setSelected(i)}
          aria-selected={i == selected ? "true" : "false"}
          className="flex group hover:text-blue-500 hover:cursor-pointer py-3 px-2 aria-selected:border-b-2 border-blue-500 aria-selected:text-blue-500 aria-selected:cursor-default"
        >
          {d}
          {label && i < menu.length - 1 &&
            <span
              className="flex items-center gap-1 border ml-2 px-[10px] py-[1px] text-xs uppercase font-medium rounded-full border-gray-100 bg-gray-100 text-gray-800 group-aria-selected:bg-blue-50 group-aria-selected:text-blue-500"
            >
              <div>
                {i + 1 * 10}
              </div>
            </span>
          }
        </div>
      )}
    </div>
  )
}
Tabs.args = {
  label: true
};

export const Secondary = ({  }: TabsProps) => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex w-fit bg-gray-100 rounded-lg p-1">
      {menu.map((d, i) =>
        <div
          key={i}
          onClick={() => setSelected(i)}
          aria-selected={i == selected ? "true" : "false"}
          className="py-2 px-10 rounded-lg hover:cursor-pointer aria-selected:cursor-default aria-selected:bg-white aria-selected:shadow"
        >
          {d}
        </div>
      )}
    </div>
  )
}
Secondary.args = {
};