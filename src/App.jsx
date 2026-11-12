import fashionImage from './assets/Style.jpg'

function App() {

  return (
    <>
      <div className="min-h-screen bg-[#fffaf5] text-gray-900">

      <nav className="flex items-center justify-between bg-white px-6 md:px-10 py-5">
        <h1 className="text-2xl font-bold text-orange-500">LUXE</h1>

       <div className="flex flex-wrap justify-center gap-5 md:gap-8 text-sm text-gray-700">
        <a href="#" className="hover:text-orange-500 transition">Shop</a>
        <a href="#" className="hover:text-orange-500 transition">Categories</a>
        <a href="#" className="hover:text-orange-500 transition">Deals</a>
        <a href="#" className="hover:text-orange-500 transition">About</a>
      </div>

      <div className="flex items-center gap-4 text-gray-700 text-xl">
       <span>⌕</span>
       <span>♡</span>
        <span>🛒</span>
       <span>♙</span>
    </div>
      </nav>

      <section className="flex flex-col md:flex-row items-center justify-between gap-12 px-6 md:px-10 py-16 md:py-20">
        <div className="w-full md:w-1/2">
          <span className="inline-block rounded-full bg-orange-100 px-5 py-2 text-sm text-orange-700 mb-6">
            New Collection 2026
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Discover<br />
            Style That<br />
            Defines You
          </h1>

          <p className="mt-6 max-w-lg text-gray-600 leading-7">
            Elevate your wardrobe with our curated collection of premium fashion.
            Exclusive designs,
            unmatched quality.
          </p>

          <div className="flex flex-wrap gap-4 gap-4 mt-7">
            <button className="rounded-full bg-orange-500 px-7 py-3 text-white font-medium shadow-lg hover:bg-orange-600 transition">
              Shop Now
            </button>

            <button className="rounded-full border border-gray-300 bg-white px-7 py-3  hover:bg-gray-100 transition">
              View Lookbook
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <img src={fashionImage} alt='Styles' className='w-full max-w-md h-[500px]  rounded-2xl' />
        </div>
      </section>
      </div>
    </>
  )
}

export default App
