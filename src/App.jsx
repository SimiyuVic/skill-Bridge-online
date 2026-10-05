import Footer from "./components/Footer.jsx"
import Navbar from "./components/Navbar.jsx"
import Home from "./pages/Home/Home.jsx"
import { Routes, Route } from "react-router-dom"
import AllJobsPage from "./pages/AllJobs.jsx"
import About from "./pages/AboutPage.jsx"
import Contact from "./pages/ContactPage.jsx"
import JobDetails from "./pages/JobDetails.jsx"
import { Toaster } from "react-hot-toast"


function App() {

  return (
    <div>
      <Navbar />
      <Toaster />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/all-jobs" element={ <AllJobsPage /> } />
        <Route path="/about-us" element={ <About /> } />
        <Route path="/contact-us" element={ <Contact />  } />
        <Route path="/job-description/:id" element={ <JobDetails /> }  />
      </Routes>

      
      <Footer />
    </div>
  )
}

export default App
