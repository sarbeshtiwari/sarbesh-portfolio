'use client'

import dynamic from 'next/dynamic'

const HeroScene = dynamic(() => import('./HeroScene'), { 
  ssr: false,
  loading: () => <div style={{ height: '100vh', background: '#0f172a' }}></div>
})

export default function HeroWrapper() {
  return <HeroScene />
}