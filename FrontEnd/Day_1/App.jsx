
import Login from "./Components/Login"
import SignUp from "./Components/SignUp"
import { BrowserRouter,Route,Routes } from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/SignUp" element={<SignUp />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App