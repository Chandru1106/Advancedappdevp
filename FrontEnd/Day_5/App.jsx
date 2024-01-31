
import Login from "./Components/Login"
import SignUp from "./Components/SignUp"
import Home from "./Components/Home"
import Contact from "./Components/ContactUs"
import Investment from "./Components/Investment"
import Eligibility from "./Components/Eligibility"
import Apply from "./Components/Apply"
import Admin from "./Components/Admin"
import AdminHome from "./Components/AdminHome"
import TrackApp from "./Components/TrackApp"
import Manage from "./Components/Manage"
import Update from "./Components/Update"
import Profile from "./Components/Profile"
import { BrowserRouter,Route,Routes } from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/SignUp" element={<SignUp />}/>
          <Route path="/Home" element={<Home />}/>
          <Route path="/Contact" element={<Contact />}/>
          <Route path="/Investment" element={<Investment />}/>
          <Route path="/Eligibility" element={<Eligibility />}/>
          <Route path="/Apply" element={<Apply />}/>
          <Route path="/Admin" element={<Admin />}/>
          <Route path="/AdminHome" element={<AdminHome />}/>
          <Route path="/TrackApp" element={<TrackApp />}/>
          <Route path="/Manage" element={<Manage />}/>
          <Route path="/Update" element={<Update />}/>
          <Route path="/Profile" element={<Profile />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App