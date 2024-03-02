import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../redux/Slices/AuthSlice";
import toast from "react-hot-toast";
import pic6 from '../assets/pic6.jpg'
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/api/login", {
        email,
        password,
      });
      const data = await res.data;

      if (res.status === 200) {
        dispatch(loginUser());
        toast.success(data.message);
        navigate("/home");
      } else {
        toast.error(data.message);
        navigate("/login");
      }
    } catch (error) {
      // Handle axios error and display a toast message
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        const errorMessage = error.response.data.message || "Server error";
        toast.error(errorMessage);
      } else if (error.request) {
        // The request was made but no response was received
        toast.error("No response received from the server");
      } else {
        // Something happened in setting up the request that triggered an Error
        toast.error("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="flex w-auto ">
      <div className="flex mx-auto mt-10 border rounded-lg shadow-lg">
      <div className="hidden md:block" >
        <img src={pic6} className=" w-[500px] h-[600px] rounded-l-lg " alt="login pic"/>
      </div>
      <div className="flex flex-col w-[400px] md:w-[600px] px-5 gap-20  ">
        <div className="text-center">
        <h1 className="mt-10 text-5xl font-bold tracking-tighter text-black">Welcome back !</h1>
        </div>
        
      <form
        onSubmit={handleLogin}
        className="flex flex-col px-5 py-5 mt-2 bg-white md:mt-10 "
      >
        <label>Username</label>
        <input
          type="email"
          name="email"
          id="email"
          className=" mt-[-5px]  border-gray-500 outline-none border-b-[1px]"
          autoComplete="off"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="pt-2">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="mt-[-5px] border-gray-500 outline-none border-b-[1px]"
          autoComplete="off"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link
          to="/forgot-password"
          className="pt-2 -mb-1 text-xs text-gray-600 cursor-pointer hover:underline"
        >
          Forgot Password
        </Link>
        <button
          type="submit"
          className="px-3 py-2 my-4 mx-auto w-[60%] text-white bg-black rounded-md outline-none "
        >
          Login{" "}
        </button>
        <p className="flex gap-2 -mt-1 text-xs text-gray-600">
          <span>Or</span>
          <Link to="/" className="hover:text-black">
            Create your account
          </Link>
        </p>
      </form>

      </div>
      </div>
        
    </div>
  );
};

export default Login;



{/* <form
onSubmit={handleLogin}
className="bg-white rounded-lg p-5 shadow-lg flex flex-col gap-3 w-[80vw] lg:w-[20vw] text-sm"
>
<input
  type="email"
  name="email"
  id="email"
  className="px-3 py-2 text-gray-600 border rounded-md outline-none focus:border-green-300"
  autoComplete="off"
  placeholder="johndoe@gmail.com"
  required
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
<input
  type="password"
  name="password"
  id="password"
  className="px-3 py-2 text-gray-600 border rounded-md outline-none focus:border-green-300"
  autoComplete="off"
  placeholder="********"
  required
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>
<Link
  to="/forgot-password"
  className="-mb-1 text-xs text-gray-600 cursor-pointer hover:underline"
>
  Forgot Password
</Link>
<button
  type="submit"
  className="px-3 py-2 text-white bg-green-500 border rounded-md outline-none hover:bg-green-300"
>
  Login{" "}
</button>
<p className="flex gap-2 -mt-1 text-xs text-gray-600">
  <span>Or</span>
  <Link to="/" className="hover:text-green-600">
    Create your account
  </Link>
</p>
</form> */}





// import axios from 'axios';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('admin@gmail.com');
//   const [password, setPassword] = useState('admin');
//   const [error, setError] = useState('');

//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Perform validation
//     if (!email || !password) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     axios.post('https://frost-style-backend.onrender.com/login', { email, password })
//   .then((result) => {
//     console.log(result);
//     if (result.data === 'Success') {
//       navigate('/home');
//       setError(''); // Clear error on success
//     }
//   })
//   .catch((err) => {
//     console.log(err);
//     setError('Invalid credentials. Please try again.');
//   });

//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-yellow-300">
//       <div className="w-full max-w-md p-8 space-y-8 rounded shadow-lg bg-yellow-50">
//         <h2 className="text-3xl font-extrabold text-center text-yellow-800">Log In</h2>
//         {error && <p className="text-sm text-center text-red-500">{error}</p>}
//         <form className="mt-8 space-y-6" onSubmit={handleLogin}>
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               autoComplete="email"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="block w-full mt-1 border rounded-md shadow-sm focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               id="password"
//               name="password"
//               type="password"
//               autoComplete="current-password"
//               required
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="block w-full mt-1 border rounded-md shadow-sm focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
//             />
//           </div>
//           <div>
//             <button
//               type="submit"
//               className="w-full px-4 py-2 text-white bg-yellow-600 rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-200"
//             >
//               Log In
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
