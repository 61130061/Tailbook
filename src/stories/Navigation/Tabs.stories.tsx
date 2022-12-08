import React from 'react';
import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

interface TabsProps {
}

export default {
  title: 'Navigation/Tabs',
};

export const Tabs = ({  }: TabsProps) => {
  const [selected, setSelected] = useState(0);
  let menu = ['JSX', 'JS', 'HTML']

  return (
    <div className="flex w-full bg-white">
      {menu.map((d, i) =>
        <div
          key={i}
          onClick={() => setSelected(i)}
          aria-selected={i == selected ? "true" : "false"}
          className="hover:text-blue-400 hover:cursor-pointer py-3 px-5 aria-selected:border-b-2 border-blue-400 aria-selected:text-blue-400 aria-selected:cursor-default"
        >{d}</div>
      )}
    </div>
  )
}
Tabs.args = {
};

export const Secondary = ({  }: TabsProps) => {
  const [selected, setSelected] = useState(0);
  let menu = ['JSX', 'JS', 'HTML']

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