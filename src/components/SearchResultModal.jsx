

const SearchResultModal = ({ results, onClose }) => {
  
  if(!results.length) return null

return (
    <div
      className="fixed inset-0 z-40 bg-black/70 flex justify-center pt-24 px-4"
      onClick={onClose}
    >
      <div
        className="
          bg-[#fffaf5]
          w-full
          max-w-xl
          rounded-xl
          p-4
          max-h-[45vh]
          overflow-y-auto
        "
        onClick={(e) => e.stopPropagation()}
      >
        {results.map((item) => {
          const hasImage = Boolean(item.image)

          return (
            <div
              key={item.name}
              className={`mb-4 px-4 pt-6 flex ${hasImage ? 'justify-between items-start' : ''}`}
            >
              {/* Texto */}
              <div className="pr-2">
                <p className="text-sm text-[#f07e00] font-semibold">
                  {item.category}
                </p>

                <p className="text-base font-bold text-[#663300]">
                  {item.name}
                </p>

                <p className="text-sm text-[#74594e]/70">
                  {item.ingredients.join(', ')}
                </p>
              </div>

              {/* Imagen opcional */}
              {hasImage && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    w-28
                    h-28
                    object-cover
                    rounded-md
                    border
                    border-[#f07e00]/40
                    shrink-0
                  "
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )

}

export default SearchResultModal