import React from 'react'
import { useNavigate } from 'react-router-dom';

const Collections = () => {
  const navigate = useNavigate()

  return (
    <section className="py-24 flex items-center justify-center bg-white">
      <div className="w-full max-w-4xl px-4 flex flex-col items-center justify-center text-center gap-10">
        <div className="flex flex-col gap-4">
          <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
            Welcome to Saiyaraa — Where Style Meets Convenience
          </h2>
          <p className="text-gray-500 text-base font-normal leading-relaxed">
            Discover a new way to shop with Saiyaraa, your one-stop destination for curated collections, trending styles, and exclusive deals. Whether you're buying or selling, our platform empowers you to make smarter choices with a seamless and secure shopping experience.
          </p>
        </div>

        <button
          className="px-5 py-2 bg-indigo-600 hover:bg-indigo-800 text-white text-sm font-medium rounded-lg shadow-md transition-all duration-300"
          onClick={() => navigate('/collections')}
        >
          Explore Collections
        </button>
      </div>
    </section>
  )
}

export default Collections;
