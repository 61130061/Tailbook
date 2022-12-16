import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

interface LinkProps {
  text: string,
  bold?: boolean,
}

export default {
  title: 'Navigation/Link',
};

export const Link = ({ text, bold }: LinkProps) => {

  let css = "hover:underline hover:cursor-pointer hover:underline-offset-2";

  if (bold) css+=" font-bold decoration-2"
  else css+=" font-semibold"

  return (
    <a
      className={css}
    >
      {text}
    </a>
  )
}
Link.args = {
  text: 'Link',
  bold: false
};