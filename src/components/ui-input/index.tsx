import React from 'react'

type PropsType = {
  id: string
  onChange?: any
  value?: string
  label: string
  type?: string
}

const InputUI: React.FC<PropsType> = ({ id, onChange, value, label, type }) => {
  return (
    <div className="relative">
      <input
        id={id}
        value={value}
        type={type}
        onChange={onChange}
        className="block w-full px-6 py-6 pb-1 text-gray-300 rounded-md appearance-none text-md bg-neutral-700 focus:outline-none focus:ring-0 peer"
        placeholder=" "
      />
      <label
        htmlFor={id}
        className=" absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] 
        left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-focus:scale-75 peer-focus:-translate-y-3
        "
      >
        {label}
      </label>
    </div>
  )
}

export default InputUI
