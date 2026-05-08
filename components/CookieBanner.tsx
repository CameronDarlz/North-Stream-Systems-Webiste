'use client'

import { useState, useEffect } from 'react'

const COOKIE_KEY = 'nss_cookie_consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY)
    if (!consent) {
      setVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted')
    setVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem(COOKIE_KEY, 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-nss-text leading-relaxed max-w-2xl">
          We use cookies to improve your experience. By continuing to use this site, you agree to our use of cookies.
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={handleDecline}
            className="text-sm font-medium text-muted hover:text-nss-text transition-colors px-4 py-2 rounded-lg border border-gray-200 hover:border-gray-300"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="text-sm font-semibold text-white bg-primary hover:bg-primary/90 transition-colors px-4 py-2 rounded-lg"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
