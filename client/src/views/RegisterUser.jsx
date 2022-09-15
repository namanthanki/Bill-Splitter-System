import { useNavigate } from "react-router-dom";
import { useState } from "react";

const RegisterUser = () => {
    const navigate = useNavigate();
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
  
    const handleRegisterUserRequest = async (event) => {
      event.preventDefault();
  
      const response = await fetch(`http://localhost:7803/api/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email, 
          password
        })
      })
  
      const data = await response.json();
      console.log(data);
  
      if(data.status === "ok") {
          navigate("/user/login");
      }
  }
  
    return (
      <div className="App">
        <h1>Register</h1>
        <form onSubmit={ handleRegisterUserRequest }>
          <input 
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder="Name: (i.e -> John Doe)"
          />
          <input 
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Email: (i.e -> johndoe@example.com)"
          />
          <input 
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Password"
          />
          <input 
            type="submit"
          />
        </form>
      </div>
    );}

export default RegisterUser;