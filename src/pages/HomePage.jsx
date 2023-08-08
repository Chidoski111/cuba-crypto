import React from 'react'
import Header from "../components/Layouts/Header.jsx"
import Hero from "../components/Route/Hero.jsx"
import FeatureSection from "../components/Route/featureSection.jsx"
import TrustedBy from "../components/Route/TrustedBy.jsx"
import Stats from "../components/Route/stats.jsx"

import Footer from "../components/Layouts/Footer.jsx"
const HomePage = () => {
  return (
    <div>
        < Header activeHeading={1}/>
        <Hero />
        <FeatureSection/>
        <TrustedBy/>
        <Stats/>
        <Footer/>
    </div>
  )
}

export default HomePage