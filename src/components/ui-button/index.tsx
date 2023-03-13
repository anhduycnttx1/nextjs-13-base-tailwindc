import React from 'react'

type PropsType = {
  id?: string
  children: React.ReactNode | string
  onClick?: any

  color?: 'red' | 'blue' | 'slate' | 'violet' | 'pink' | 'yellow' | 'green' | 'orange' | 'teal' | 'cyan'
}

const ButtonUI: React.FC<PropsType> = ({ id, onClick, children, color }) => {
  const colorBtn = color ? `bg-${color}-600` : 'bg-slate-600'
  const colorHoverBtn = color ? `hover:bg-${color}-700` : 'hover:bg-slate-700'
  return (
    <button
      id={id}
      onClick={onClick}
      className={`${colorBtn} py-2 font-medium text-white rounded-md w-full ${colorHoverBtn}`}
    >
      {children}
    </button>
  )
}

export default ButtonUI
