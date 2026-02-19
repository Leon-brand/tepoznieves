import { useState } from 'react' 

import Header from './components/Header'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import CategoryAccordion from './components/CategoryAccordion'
import ImageModal from './components/ImageModal'
import SearchResultModal from './components/SearchResultModal'
import { menuData } from './data/menuData'

import './App.css'


function App() {

  const [ query, setQuery ] = useState('')
  const [ searchResults, setSearchResults ] = useState([])
  const [ isSearchOpen, setIsSearchOpen ] = useState(false)
  const [ selectedImage, setSelectedImage ] = useState(null)

  const handleSearch = (value) => {
    setQuery(value)

    if (!value.trim()) {
      setSearchResults([])
      setIsSearchOpen(false)
      return
    }

    const normalized = value.toLowerCase()//loque se escribe a minuscula

    const results = []

    menuData.forEach((category) => {
      category.items.forEach((flavor) => {
        const nameMatch = flavor.name
        .toLowerCase()
        .split(' ')
        .some(
          (word) =>
            word === normalized || word.startsWith(normalized)
        )

      const ingredientMatch = flavor.ingredients.some((ing) => {
        const words = ing.toLowerCase().split(' ')
        return words.some(
          (word) =>
            word === normalized || word.startsWith(normalized)
        )
      })

        if (nameMatch || ingredientMatch) {
          results.push({
            category: category.category,
            ...flavor
          })
        }
      })
    })

    setSearchResults(results)
    setIsSearchOpen(true)
  }


  return (
    <div className="min-h-screen flex flex-col bg-[#fff]">
      <Header />
      <main className="flex-1 px-4 py-6">
      <SearchBar
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <div className='my-4'>
        <img
            className="mx-auto rounded-lg" 
            src={`${import.meta.env.BASE_URL}images/logo1.PNG`}
            alt="logo Tepoznieve" 
            width={200}
            height={225}
        />
      </div>
      {menuData.map((category) => (
        <CategoryAccordion
          key={category.category}
          title={category.category}
        >
          {category.items.map((flavor) => {
            const hasImage = Boolean(flavor.image)

            return (
              <div
                key={flavor.name}
                className={`mb-4 pl-2 flex  items-center ${hasImage ? 'justify-between' : ''}`}
              >
                <div className="flex flex-wrap gap-x-2">
                  <span className="text-base font-semibold text-[#74594e]">
                    {flavor.name}
                  </span>
                  <span className="text-sm text-[#74594e]/70 ml-2 mt-1">
                    {flavor.ingredients.join(', ')}
                  </span>
                </div>
                {hasImage && (
                  <button
                    type="button"
                    className="ml-3 shrink-0"
                    onClick={() => { setSelectedImage(flavor.image) }}
                  >
                    <img
                      src={flavor.image}
                      alt={flavor.name}
                      className="w-16 h-16 object-cover rounded-md border border-[#f07e00]/40"
                    />
                  </button>
                )}
              </div>
            )
          })}
        </CategoryAccordion>
      ))}
      <div className='mt-6'>
        
        <img
            className="mx-auto rounded-lg"
            src={`${import.meta.env.BASE_URL}images/personajes1.PNG`}
            alt='personajes'
            width={150}
            height={200}
        />
      </div>
      </main>
      <p className='mb-4 text-center text-[#663300] text-lg font-semibold'>
        "¿Y tú nieve de qué sabor la quieres?"
      </p>
      <Footer />
      <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)}></ImageModal>
      <SearchResultModal results={isSearchOpen ? searchResults : []} onClose={() => setIsSearchOpen(false)}></SearchResultModal>
    </div>
  )
}

export default App
