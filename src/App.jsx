import { Hero } from "./components/Hero"

import {  WhyUs } from "./components/WhyUs"
import { Engagement } from "./components/Engagement"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { TestimonialsStacked } from "./components/testimonials-with-image"
import { Navbar } from "./components/Navbar"
import { FAQs } from "./components/Faq"
import { ServicesBento } from "./components/ServicesBento"

function App() {
  return (
    <div className="bg-[#07090f] text-white">
      <Navbar/>
      <Hero />
      <ServicesBento/>
      <WhyUs/>
      <Engagement />
      <TestimonialsStacked/>
      <FAQs/>
      <Contact />
      <Footer />
    </div>
  )
}

export default App
