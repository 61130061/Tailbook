import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

interface BreadProps {
  bgColor?: boolean,
}

export default {
  title: 'Navigation/Breadcrumbs',
};

export const Breadcrumbs = ({ bgColor }: BreadProps) => {

  let child = ['home', 'setting', 'customization', 'blue'];
  let containerCSS = "flex gap-2 text-indigo-400 rounded-xl";
  let linkCSS = "hover:underline hover:cursor-pointer hover:underline-offset-2"
  let currentCSS = "font-semibold" 

  if (bgColor) containerCSS+=" bg-indigo-50 px-5 py-3";

  return (
    <div
      className={containerCSS}
    >
      {child.map((d, i) =>
        <div className="flex gap-2 items-center capitalize">
          <a
            className={i < child.length-1 ? linkCSS : currentCSS}
            key={i}
          >
            {d}
          </a>
          {i < child.length - 1 &&
            <div
              className="fill-indigo-200 stroke-indigo-200 stroke-[10px]"
            >
              <svg 
                version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 330.002 330.002"
                width="13px" 
                height="13px"
              >
                <path id="XMLID_226_" d="M233.252,155.997L120.752,6.001c-4.972-6.628-14.372-7.97-21-3c-6.628,4.971-7.971,14.373-3,21	l105.75,140.997L96.752,306.001c-4.971,6.627-3.627,16.03,3,21c2.698,2.024,5.856,3.001,8.988,3.001	c4.561,0,9.065-2.072,12.012-6.001l112.5-150.004C237.252,168.664,237.252,161.33,233.252,155.997z"/>
              </svg>
            </div>
          }
        </div>
      )}
    </div>
  )
}
Breadcrumbs.args = {
  bgColor: true
};