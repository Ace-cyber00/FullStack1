import React from 'react'
import { Link } from 'react-router-dom'
import FullLogo from '../assets/FullLogo.png'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'


  

  const Register = () => {
  const [confirmPassword,setConfirmPassword] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
  e.preventDefault();

  if (password !== confirmPassword) {
    alert("Password and Confirm Password do not match");
    return;
  }

  try {
    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Registration successful!");
      navigate("/login");
    } else {
      alert(data.error || "Registration failed");
    }

  } catch (err) {
    console.error("Register error:", err);
    alert("Something went wrong on the server");
  }
};

  

  return (
    <div className="flex flex-col justify-center sm:h-screen p-4">
      <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8">
        <div className="text-center mb-12">
          <Link to="/"><img
            src={FullLogo} alt="logo" className="w-40 inline-block"
            
            />
          </Link >
        </div>

        <form onSubmit={handleRegister}>
          <div className="space-y-6">
            <div>
              <label className="text-slate-900 text-sm font-medium mb-2 block">Email Id</label>
              <input name="email" type="text" value={email} className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter email"
              autoComplete="new-email"
              onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="text-slate-900 text-sm font-medium mb-2 block">Password</label>
              <input name="password" type="password" value={password} className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter password"
              autoComplete="new-password"
              onChange={(e) =>setPassword(e.target.value)
                
              }
              />
            </div>
            <div>
              <label className="text-slate-900 text-sm font-medium mb-2 block">Confirm Password</label>
              <input name="cpassword" type="password" value={confirmPassword} className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter confirm password"
              autoComplete="new-password"
              onChange={(e) =>setConfirmPassword(e.target.value)}
              />
            </div>

            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label htmlFor="remember-me" className="text-slate-600 ml-3 block text-sm">
                I accept the <Link to="javascript:void(0);" className="text-blue-600 font-medium hover:underline ml-1">Terms and Conditions</Link >
              </label>
            </div>
          </div>

          <div className="mt-12">
            <button type="submit" className="w-full py-3 px-4 text-sm tracking-wider font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer">
              Create an account
            </button>
          </div>
          <p className="text-slate-600 text-sm mt-6 text-center">Already have an account? <Link to="/login" className="text-blue-600 font-medium hover:underline ml-1">Login here</Link ></p>
        </form>
      </div>
    </div>
  )
}

export default Register
