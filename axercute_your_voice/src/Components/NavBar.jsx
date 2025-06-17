import { useNavigate } from "react-router";

const NavBar = () => {
    const navigate = useNavigate();
  return (
    <>
      <nav>
          <span onClick={()=>navigate("/")}> 
              Home
          </span>

          <span onClick={()=>navigate("/songSearch")}>
              Song Search
          </span>


          <span  onClick={()=>navigate("/singerSearch")}>
              Song Search
          </span>

          <span  onClick={()=>navigate("/singerLogin")}>
              Song Search
          </span>

          <span  onClick={()=>navigate("/contactUs")}>
              Song Search
          </span>

      </nav>
    </>
  );
};
export default NavBar;
