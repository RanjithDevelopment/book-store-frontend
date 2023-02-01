import React,{ useState }from "react";
// import axios from "axios";
import Login from "./Login";


function Hompage() {

  //all State variables 
  
  const [loginname, setLoginname] = useState("");
  const [loginstate, setLogin] = useState(false);
 
  //const [apidata,setApidata]=useState([])


  //mounting phase of the component
//   useEffect(() => {
//     async function getApiData() {
//         const result = await axios.get('https://6321f66582f8687273bdac1b.mockapi.io/users');
//         setApidata(result.data);
//     //finding the student in a  database

//     }
//     getApiData();
// }, []);



  const handlelogin = (text) => {

    setLoginname(text);
    setLogin("true");


  }
  

//   const handleSearch=()=>{
//     apidata.map((data)=>{
// if(s===data.name){
  
//   SearchedValues={
//     name:data.name,
//     age:data.age,
//     email:data.email,
//     course:data.courses
//   }
//   console.log(SearchedValues);

// }
//     })
//   }
  
  return (
    <>
    <h1 style={{marginLeft:"30%"}}>Welcome To Library Application</h1>
      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark" style={{ backgroundcolor: "#e3f2fd" }}>
        <div className="container-fluid">
          <a className="navbar-brand" >Home</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" onClick={(e) => { handlelogin(e.target.innerHTML) }}>ADMIN Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" onClick={(e) => { handlelogin(e.target.innerHTML) }}>USER Login</a>
              </li>
            </ul>
            
             
          </div>
        </div>
      </nav>
     
     
      {loginstate ? <Login login={loginname} /> : <></>}
    </>

  );

}
export default Hompage;