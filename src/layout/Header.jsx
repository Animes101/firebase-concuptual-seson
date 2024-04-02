import { useContext } from "react"
import NavBar from "../components/NavBar"

const Header = () => {

  const {user}=useContext(AuthContext)
  return (
    <NavBar />
  )
}

export default Header