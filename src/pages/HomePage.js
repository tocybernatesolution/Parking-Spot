import React from 'react'
import HeroCard from '../components/HeroCard/HeroCard'
import Footer from '../components/Footer/Footer'
export default function App() {


  return (
    <div>

      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: "#F5F7FA", gap: 10 }}>
        <HeroCard />
      </div>
      
      <Footer />
    </div>
  )
}

