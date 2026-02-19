

const SearchBar = ({ value, onChange }) => {
 return (
    <div className="w-full max-w-xl mx-auto">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Escribe tu ingrediente (ej. mango)"
        className="
          w-full
          h-12
          mb-6
          px-4
          rounded-full
          bg-white
          border
          border-[#f07e00]
          text-[#3b2f2a]
          font-bold
          placeholder-[#f07e00]/70
          placeholder:text-center
          focus:outline-none
          focus:ring-1
          focus:ring-[#f37021]
          focus:border-[#f37021]
          shadow-lg
        "
      />
    </div>
  )
}

export default SearchBar