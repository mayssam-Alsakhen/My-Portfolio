import Nav from '../components/Nav'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Volunteering from '../components/Volunteering'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <div>
     
      {/* <Nav/> */}
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Volunteering/>
      <Contact/>
      <Footer/>
      
      </div>
  
  )
}
