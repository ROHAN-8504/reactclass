import { Link } from "react-router-dom";
import "./Header.css";

function Header({ setsearchquery }) {
  let togglemode = () => {
    document.body.classList.toggle("change");
  };

  return (
    <>
     <header style={{display:"flex",justifyContent:"space-evenly"}}   >
    <Link to={'/'}><img  class='animate-bounce'     height={30} width={100}      src="https://zerodha.com/static/images/logo.svg" alt="logo" /></Link>

    <input  onChange={(e)=>{setsearchquery(e.target.value)}}  type="text" placeholder="search products..." />

    <nav style={{display:"flex",gap:"20px",alignItems:"center"}}>
  <Link to={'/auth/register'}  > <a href="">Signup</a></Link>
  <Link to={'/about'}  ><a href="">About</a></Link>
  <Link to={'/products'}    ><a href="">Products</a></Link>
  <Link to={'/auth/login'}     ><a href="">signin</a></Link>


    <button onClick={togglemode} >dark/light</button>
    </nav>

    </header>
  );
}

export default Header;