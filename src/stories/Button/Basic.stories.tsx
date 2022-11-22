import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

interface ButtonProps {
  label?: string,
  backgroundColor?: string
}

export default {
  title: 'Button/Basic',
};

export const Fill = ({ label }: ButtonProps) => {
  return (
    <button 
      className="p-3 border rounded-lg"
    >
      {label}
    </button>
  )
}
Fill.args = {
  label: 'Hello'
};