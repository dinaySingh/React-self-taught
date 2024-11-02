import './App.css'
import Login from './component/Login'
import Profiles from './component/Profiles'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <Login />
      <Profiles/>

    </UserContextProvider>
  )
}

export default App
