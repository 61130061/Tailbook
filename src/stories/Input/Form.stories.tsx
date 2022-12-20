import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

interface FormProps {
  valid?: boolean
}

export default {
  title: 'Input/Form',
};

export const Form = ({ valid }: FormProps) => {

  return (
    <form className="w-[420px] px-10 py-6 rounded-lg border shadow-lg">
      <div className="flex flex-col gap-2 mb-4">
        <label>Email</label>
        <input
          className={`${valid ? 'peer ':''}px-3 py-2 rounded-lg border-[1.5px] focus:outline-none focus:ring-opacity-50 focus:ring-2 focus:ring-gray-300 invalid:border-red-300 invalid:focus:ring-red-200 invalid:focus:ring-opacity-50`}
          placeholder=""
          required
          type="email"
        />
        {valid &&
          <p className="text-xs text-red-400 hidden peer-invalid:block">Please provide a valid email address.Please provide a valid email address.</p>
        }
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <label>Password</label>
        <input
          className="px-3 py-2 rounded-lg border-[1.5px] focus:outline-none focus:ring-opacity-50 focus:ring-2 focus:ring-gray-300 invalid:border-red-300 invalid:focus:ring-red-200 invalid:focus:ring-opacity-50"
          placeholder=""
          required
          type="password"
        />
      </div>
      <div className="flex justify-between">
        <div className="flex items-center items-start mb-4">
          <input
            className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded accent-indigo-400"
            id="checkbox"
            type="checkbox"
          />
          <label
            className="text-sm ml-3 text-gray-900"
            htmlFor="checkbox"
          >
            Remember me
          </label>
        </div>
        <div className="text-sm text-indigo-600 font-medium hover:cursor-pointer">Forgot your password?</div>
      </div>
      <button
        className="w-full my-4 px-4 py-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline disabled:bg-gray-400/80 rounded-md bg-indigo-500 text-white fill-white"
        type="submit"
      >
        Sign in
      </button>
      <fieldset className="border-t border-slate-300 my-2">
        <legend className="mx-auto text-slate-400 px-4 text-sm">Or continue with</legend>
        <div></div>
      </fieldset>
      <button
        className="w-full my-2 px-4 py-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline disabled:bg-gray-400/80 rounded-md bg-gray-700 text-white fill-white"
      >
        Github
      </button>
    </form>
  )
}
Form.args = {
  valid: true,
}