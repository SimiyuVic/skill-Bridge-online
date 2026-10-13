import Home from "./pages/Home/Home.jsx"
import { Routes, Route } from "react-router-dom"
import AllJobsPage from "./pages/AllJobs.jsx"
import About from "./pages/AboutPage.jsx"
import Contact from "./pages/ContactPage.jsx"
import JobDetails from "./pages/JobDetails.jsx"
import { Toaster } from "react-hot-toast"
import Signup from "./pages/auth/SignUp.jsx"
import JobSeekerRegister from "./pages/auth/signup/JobSeeker.jsx"
import EmployerRegister from "./pages/auth/signup/Employer.jsx"
import Login from "./pages/auth/Login.jsx"
import PublicLayout from "./layout/Public.jsx"
import Adminlayout from "./layout/AdminLayout.jsx"
import AdminDashboard from "./pages/admin/AdminDashboard.jsx"
import Employers from "./pages/admin/Employers.jsx"
import AdminJobSeeker from "./pages/admin/AdminJobSeeker.jsx"
import AdminJobs from "./pages/admin/AdminJobs.jsx"
import AdminSettings from "./pages/admin/AdminSettings.jsx"


function App() {

  return (
    <div>
      <Toaster />
      <Routes>

        <Route element={ <PublicLayout /> } >

          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/all-jobs" element={<AllJobsPage />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/job-description/:id" element={<JobDetails />} />

          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/job-seeker-register" element={<JobSeekerRegister />} />
          <Route path="/employer-register" element={<EmployerRegister />} />

        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={ <Adminlayout /> } >
          <Route index element={ <AdminDashboard /> } />
          <Route path="employers" element={ <Employers /> } />
          <Route path="job-seeker" element={ <AdminJobSeeker /> } />
          <Route path="jobs" element={ <AdminJobs /> } />
          <Route path="settings" element={ <AdminSettings /> } /> 
        </Route>

        {/* Employer routes */}

        {/* Job seeker routes */}
      </Routes>
    </div>
  )
}

export default App
