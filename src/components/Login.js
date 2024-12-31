import React,{useState} from 'react'
import Header from './Header';
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div className='w-full bg-gradient-to-b from-black bg-black opacity-90' >
      <Header/>
      <div className="absolute">
        <img className="min-w-full h-100" src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt=""/>
      </div>
      <form className='bg-black opacity-90 w-3/12 rounded-md  absolute p-12  my-52 mx-auto right-0 left-0 text-white'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        <input type="text" placeholder='Email Address' className='w-full p-4 my-6'/>
        <input type="password" placeholder='Email password' className='w-full p-4 my-6'/>
        <button className='p-4 my-4 bg-red-600 '>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='cursor-pointer' onClick={toggleSignInForm}>
        {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? signIn Now"}
        </p>
      </form>
    </div>
  )
}

export default Login