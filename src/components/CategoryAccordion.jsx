import { useState } from 'react'

function CategoryAccordion({ title, children }) {
  
  const [isOpen, setIsOpen] = useState(false)

 
  return (
    <div className="border-b border-[#663300]/40">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          w-full
          flex
          items-center
          justify-between
          py-4
          text-center
          text-lg
          font-semibold
          text-[#f07e00]
          focus:outline-none
        "
      >
        <span className="
          absolute
          left-1/2
          -translate-x-1/2
          text-center
          pointer-events-none
        ">
          {title}
        </span>
      <span
        className={`
          ml-auto
          transition-transform
          duration-200
          ${isOpen ? 'rotate-180' : ''}
        `}
      >
        ▾
      </span>
      </button>

      {isOpen && (        
        <div className="pb-4">
          {children}
        </div>
      )}
    </div>
  )
}

export default CategoryAccordion
