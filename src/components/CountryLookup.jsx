'use client';

import React, { useEffect, useState } from 'react'

export default function CountryLookup() {

  const [country, setCountry] = useState('United States');
  useEffect(() => {
    fetch(`https://ipinfo.io/json?token=${process.env.NEXT_PUBLIC_IP_API_KEY}`).then((res) => res.json()).then((data) => setCountry(data.country));
  }, []);

  return (
    country
  )
}