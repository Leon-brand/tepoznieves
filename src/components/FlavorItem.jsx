

const FlavorItem = ({onClick, name})=>{
   return (
    <button
      onClick={onClick}
      className="
        w-full
        text-left
        py-2
        px-2
        text-neutral-800
        hover:bg-[#f07e00]/10
        rounded-md
        transition
      "
    >
      {name}
    </button>
  )
}

export default FlavorItem