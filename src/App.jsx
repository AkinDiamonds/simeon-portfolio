// import React from 'react'
import Hero from './components/Hero'
import Header from './components/Header'
import WorkSection from './components/WorkSection'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Header></Header>
      <Hero />
      <WorkSection></WorkSection>
    </div>
  )
}
