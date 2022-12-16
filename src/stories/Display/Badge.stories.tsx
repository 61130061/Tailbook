import React from 'react';
import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

interface BadgeProps {
  label: string,
  remove?: boolean,
  icon?: boolean,
  outlineColor?: boolean,
  rounded?: boolean,
}

export default {
  title: 'Display/Badge',
};

export const Badge = ({ label, remove, icon, outlineColor, rounded }: BadgeProps) => {
  let spanCSS = "flex items-center gap-1 border px-3 py-1 text-xs uppercase font-medium";

  if (remove) spanCSS+=" pr-2"
  if (icon) spanCSS+=" pl-2"

  if (rounded) spanCSS+=" rounded-full"
  else spanCSS+=" rounded-md"

  return (
    <div className="flex gap-3 text-sm">
      <span
        className={outlineColor ? spanCSS + " border-blue-400 bg-blue-100 text-blue-800 fill-blue-800" : spanCSS + " border-blue-400 bg-blue-400 text-white fill-white"}
      >
        {icon &&
          <div className="w-[15px] h-[15px]">
            <svg width="14px" height="14px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z" /></svg>
          </div>
        }
        <div>default</div>
        {remove &&
          <div className="hover:cursor-pointer hover:bg-slate-100 hover:fill-blue-400 p-1 rounded-full">
            <svg version="1.1" width="8px" height="8px" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 47.971 47.971">
              <g>
                <path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
		c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242
		C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879
		s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"/>
              </g>
            </svg>
          </div>
        }
      </span>
      <span
        className={outlineColor ? spanCSS + " border-emerald-400 bg-emerald-100 text-emerald-800 fill-emerald-800" : spanCSS + " border-emerald-400 bg-emerald-400 text-white fill-white"}
      >
        {icon &&
          <div className="w-[15px] h-[15px]">
            <svg version="1.1" width="14px" height="14px" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 330 330">
              <g>
                <path d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M165,300
		c-74.44,0-135-60.561-135-135S90.56,30,165,30s135,60.561,135,135S239.439,300,165,300z"/>
                <path d="M226.872,106.664l-84.854,84.853l-38.89-38.891c-5.857-5.857-15.355-5.858-21.213-0.001
		c-5.858,5.858-5.858,15.355,0,21.213l49.496,49.498c2.813,2.813,6.628,4.394,10.606,4.394c0.001,0,0,0,0.001,0
		c3.978,0,7.793-1.581,10.606-4.393l95.461-95.459c5.858-5.858,5.858-15.355,0-21.213
		C242.227,100.807,232.73,100.806,226.872,106.664z"/>
              </g>
            </svg>
          </div>
        }
        <div>{label}</div>
        {remove &&
          <div className="hover:cursor-pointer hover:bg-slate-100 hover:fill-emerald-400 p-1 rounded-full">
            <svg version="1.1" width="8px" height="8px" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 47.971 47.971">
              <g>
                <path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
		c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242
		C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879
		s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"/>
              </g>
            </svg>
          </div>
        }
      </span>
      <span
        className={outlineColor ? spanCSS + " border-rose-400 bg-rose-100 text-rose-800 fill-rose-800" : spanCSS + " border-rose-400 bg-rose-400 text-white fill-white"}
      >
        {icon &&
          <div className="w-[15px] h-[15px]">
            <svg version="1.1" width="14px" height="14px" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 201.21 201.21">
              <path d="M166.926,155.377c8.633-10.416,14.741-22.853,17.662-35.965l14.641,3.262c-3.435,15.42-10.612,30.039-20.754,42.275
              L166.926,155.377z M162.129,20.796c-12.603-9.675-27.482-16.296-43.03-19.146l-2.705,14.754c13.219,2.424,25.876,8.057,36.6,16.291
              L162.129,20.796z M4.476,71.48l14.351,4.365C22.735,62.992,29.764,51.047,39.153,41.3L28.35,30.894
              C17.326,42.338,9.07,56.373,4.476,71.48z M33.814,175.861c11.849,10.591,26.185,18.314,41.459,22.332l3.817-14.506
              c-12.992-3.419-25.192-9.992-35.281-19.01L33.814,175.861z M12.953,149.881l13.083-7.338c-6.587-11.744-10.334-25.08-10.835-38.564
              l-14.989,0.559C0.801,120.389,5.207,136.068,12.953,149.881z M61.936,24.369C74.073,18.152,87.179,15,100.888,15V0
              C85.005,0,69.171,3.811,55.097,11.019L61.936,24.369z M200.998,89.399c-1.771-15.729-7.349-31.032-16.13-44.254l-12.495,8.299
              c7.469,11.247,12.213,24.261,13.72,37.635L200.998,89.399z M108.462,201.21c15.8-1.181,31.303-6.177,44.832-14.448l-7.824-12.797
              c-11.506,7.033-24.689,11.282-38.125,12.286L108.462,201.21z"/>
            </svg>
          </div>
        }
        <div>{label}</div>
        {remove &&
          <div className="hover:cursor-pointer hover:bg-slate-100 hover:fill-rose-400 p-1 rounded-full">
            <svg version="1.1" width="8px" height="8px" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 47.971 47.971">
              <g>
                <path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
		c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242
		C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879
		s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"/>
              </g>
            </svg>
          </div>
        }
      </span>
    </div>
  )
}
Badge.args = {
  label: 'badge',
  remove: false,
  icon: true,
  outlineColor: false,
  rounded: true
};