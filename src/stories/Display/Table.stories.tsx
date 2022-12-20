import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

interface TableProps {
  border?: boolean,
  shadow?: boolean,
  bgHeader?: boolean,
  divideY?: boolean,
  divideX?: boolean,
}

export default {
  title: 'Display/Table',
};

export const Table = ({ border, shadow, bgHeader, divideY, divideX }: TableProps) => {
  const demoData = [
    {
      "name": "Tim Cook",
      "email": "tim.cook@gmail.com",
      "status": "office",
      "position": "CEO",
      "working": "Project #204"
    },
    {
      "name": "Elon Musk",
      "email": "elon.musk@gmail.com",
      "status": "wfh",
      "position": "CTO",
      "working": "Project #222"
    },
    {
      "name": "Bill Gate",
      "email": "bill.gate@gmail.com",
      "status": "office",
      "position": "Head Marketing",
      "working": "Project #111"
    },
    {
      "name": "John Ember",
      "email": "john.ember@gmail.com",
      "status": "field",
      "position": "Engineer",
      "working": "Project #100"
    },
    {
      "name": "Emma Green",
      "email": "emma.green@gmail.com",
      "status": "leave",
      "position": "Internship",
      "working": "Project #100"
    },
  ]

  return (
    <div className="">
      <div className={`overflow-x-auto rounded-lg${shadow ? ' shadow-lg':''}${border ? ' border':''}`}>
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden ">
            <table
              className={`min-w-full${divideY ? ' divide-y' : ''} divide-gray-200 dark:divide-gray-700 table-fixed`}
            >
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr className={divideX ? `divide-x divide-gray-200 dark:divide-gray-700`:''}>
                  <th scope="col" className="p-4">
                    <div className="flex items-center">
                      <input id="checkbox-all" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label htmlFor="checkbox-all" className="sr-only">checkbox</label>
                    </div>
                  </th>
                  <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                    Profile
                  </th>
                  <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                    Status
                  </th>
                  <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                    Working On
                  </th>
                  <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                    Position
                  </th>
                  <th scope="col" className="p-4">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>

              <tbody className={`bg-white${divideY ? ' divide-y divide-gray-200 dark:divide-gray-700':''} dark:bg-gray-800`}>
                {demoData.map((d, i) =>
                  <tr 
                    key={i}
                    className={`hover:bg-gray-50${divideX ? ' divide-x':''} divide-gray-200 dark:divide-gray-700 dark:hover:bg-gray-700`}
                  >
                    <td className="p-4 w-4">
                      <div className="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="checkbox-table-1" className="sr-only">checkbox</label>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="flex gap-3 items-center">
                        <img
                          alt=""
                          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        />
                        <div>
                          <div>
                            {d.name}
                          </div>
                          <div className="text-gray-400">
                            {d.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                      <span className={`flex w-fit items-center gap-1 border px-3 py-1 text-xs uppercase font-medium pl-2 rounded-full border-${d.status == "office" ? "emerald" : d.status == "wfh" ? "blue" : d.status == "leave" ? "rose" : "yellow"}-400 bg-${d.status == "office" ? "emerald" : d.status == "wfh" ? "blue" : d.status == "leave" ? "rose" : "yellow"}-400 text-white fill-white`}>
                        <div className="w-[15px] h-[15px]">
                          <svg
                            height="14px"
                            viewBox="0 0 512 512"
                            width="14px"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z" />
                          </svg>
                        </div>
                        <div>
                          {d.status}
                        </div>
                      </span>
                    </td>
                    <td className="py-3 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {d.working}
                    </td>
                    <td className="py-3 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {d.position}
                    </td>
                    <td className="py-3 px-6 text-sm font-medium text-right whitespace-nowrap">
                      <button
                        className="mr-1 p-1 transition duration-500 ease select-none hover:bg-zinc-600 focus:outline-none focus:shadow-outline disabled:bg-gray-400/80 rounded-md border-[1.5px] border-zinc-500 text-zinc-500 fill-zinc-500 select-none hover:text-white hover:fill-white"
                        type="button"
                      >
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 53.942 53.942" width="15px" height="15px">
                          <path d="M53.364,40.908c-2.008-3.796-8.981-7.912-9.288-8.092c-0.896-0.51-1.831-0.78-2.706-0.78c-1.301,0-2.366,0.596-3.011,1.68
	c-1.02,1.22-2.285,2.646-2.592,2.867c-2.376,1.612-4.236,1.429-6.294-0.629L17.987,24.467c-2.045-2.045-2.233-3.928-0.632-6.291
	c0.224-0.309,1.65-1.575,2.87-2.596c0.778-0.463,1.312-1.151,1.546-1.995c0.311-1.123,0.082-2.444-0.652-3.731
	c-0.173-0.296-4.291-7.27-8.085-9.277c-0.708-0.375-1.506-0.573-2.306-0.573c-1.318,0-2.558,0.514-3.49,1.445L4.7,3.986
	c-4.014,4.013-5.467,8.562-4.321,13.52c0.956,4.132,3.742,8.529,8.282,13.068l14.705,14.705c5.746,5.746,11.224,8.66,16.282,8.66
	c0,0,0,0,0.001,0c3.72,0,7.188-1.581,10.305-4.698l2.537-2.537C54.033,45.163,54.383,42.833,53.364,40.908z"/>
                        </svg>

                      </button>
                      <button
                        className="mr-1 p-1 transition duration-500 ease select-none hover:bg-zinc-600 focus:outline-none focus:shadow-outline disabled:bg-gray-400/80 rounded-md border-[1.5px] border-zinc-500 text-zinc-500 fill-zinc-500 select-none hover:text-white hover:fill-white"
                        type="button"
                      >
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24" width="15px" height="15px">
                          <rect width="24" height="24" opacity="0" />
                          <path d="M19 20H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2z" />
                          <path d="M5 18h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71L16.66 2.6A2 2 0 0 0 14 2.53l-9 9a2 2 0 0 0-.57 1.21L4 16.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 18zM15.27 4L18 6.73l-2 1.95L13.32 6z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
Table.args = {
  border: true,
  shadow: false,
  bgHeader: true,
  divideY: true,
  divideX: false
};