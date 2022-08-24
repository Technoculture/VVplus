import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black pb-5 fixed bottom-0 w-full">
  <div className="max-w-screen-xl px-4 pt-8 mx-auto sm:px-6 lg:px-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="flex justify-center text-teal-300 sm:justify-start">
      <h1 className="text-2xl font-bold bg-orange-500 bg-clip-text text-transparent hover:cursor-pointer " >Logo</h1>
      </div>

      <p className="mt-4 text-sm text-center text-gray-400 lg:text-right lg:mt-0 ">
        T&C &nbsp; Design &nbsp; Privacy & Policy &nbsp; Contact
      </p>
    </div>
  </div>
</footer>
  )
}

export default Footer