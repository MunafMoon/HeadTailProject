import { Link, useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate()
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <tr>
        <button onClick={() => navigate("/about")} 
          style={{color:"blue", padding:"12px", 
          backgroundColor:"green", cursor:"pointer"}}>About</button>
        {/* <Link to="/about">About</Link> */}
      </tr>

      <tr>
        <button onClick={() => navigate("/head-tail")}
          style={{color:"blue", padding:"12px", 
          backgroundColor:"green", cursor:"pointer"}}>Head & Tail</button>
        {/* <Link to="/head-tail">Head & Tail</Link> */}
      </tr>
    </div>
  );
}

export default Home