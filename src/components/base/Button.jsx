import React from 'react'

const Button = ({ children, className , ...rest }) => {
  return (
    <button className={`group relative bg-primary text-white px-6 py-2 whitespace-nowrap rounded-md font-medium overflow-hidden + ${className} `} {...rest }>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <span className="group-hover:translate-x-1 transition"></span>
      </span>
      <span className="absolute inset-0 bg-secondary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
    </button>
  )
}

export default Button