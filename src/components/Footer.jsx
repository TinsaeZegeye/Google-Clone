import React from 'react'
import CountryLookup from './CountryLookup'

export default function Footer() {
  return (
      <footer className="absolute bottom-0 w-full bg-[#f2f2f2] text-sm text-gray-500 p-2">
        <div className="border-b px-8 py-3">
            <CountryLookup />
        </div>

        <div className="flex flex-col justify-between items-center px-2 py-3 sm:flex-row sm:items-start">
            <ul className="flex space-x-3 sm:space-x-6 space-y-2 sm:space-y-0 mb-4 sm:mb-0">
              <li className="link">About</li>
              <li className="link">Advertising</li>
              <li className="link">Business</li>
              <li className="link">How Search Works?</li>
            </ul>
            <ul className="flex space-x-3 sm:space-x-6 space-y-2 sm:space-y-0">
                <li className="link">Privacy</li>
                <li className="link">Terms</li>
                <li className="link">Settings</li>
            </ul>
        </div>
    </footer>

  )
}
