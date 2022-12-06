import React from 'react';

import './Toggle.css';

interface SwitchProps {
  label?: string
}

export default function Switch ({label}: SwitchProps) {
  return (
    <label htmlFor="toggle" className="flex items-center cursor-pointer relative mb-4">
      <input type="checkbox" id="toggle" className="sr-only" />
      <div className="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full" />
      <span className="ml-3 text-gray-900 text-sm font-medium">
        {label}
      </span>
    </label>
  )
}