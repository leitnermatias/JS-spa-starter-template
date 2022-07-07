import {Link, Outlet} from "react-router-dom";
import styled, {css} from 'styled-components'

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
`


function App() {
  return (
    <div className="App">
      <Navbar>
        <Link to="/">Home</Link>
        <Link to="/info">Info</Link>
        <Link to="/notfound">404 Not Found</Link>
      </Navbar>
      <Outlet/>
    </div>
  )
}

export default App
