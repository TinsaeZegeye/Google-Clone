import React from 'react'
import CountryLookup from './CountryLookup'

export default function Footer() {
  return (
      <footer className="absolute bottom-0 w-full bg-[#f2f2f2] text-sm text-gray-500 p-2">
        <div className="border-b px-8 py-3">
            <CountryLookup />
        </div>

        <div className="flex justify-between items-start px-8 py-3">
            <ul className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0 mb-4 sm:mb-0">
            <li className="link">About</li>
            <li className="link">Advertising</li>
            <li className="link">Business</li>
            <li className="link">How Search Works?</li>
            </ul>
            <ul className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0">
            <li className="link">Privacy</li>
            <li className="link">Terms</li>
            <li className="link">Settings</li>
            </ul>
        </div>
    </footer>

  )
}
