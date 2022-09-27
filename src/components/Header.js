import {FcTodoList} from 'react-icons/fc' 
const Header = () => {
   
   return (
   <>
    <nav className="navbar bg-danger">
  <div className="container-fluid d-flex justify-content-center">
    <a className="navbar-brand d-flex" href="#">
      <FcTodoList className='fs-1'/>    
      <p className='fs-2 text-light'> odoList </p>
    </a>
  </div>
</nav>
    
    </>
    )
}

export default Header;