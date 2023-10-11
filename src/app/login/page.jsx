import Image from "next/image"
import logo from "../assets/Group 2.png"
import boy from "../assets/boy.png"
import "./login.css"

const Login = () => {
  return (
    <div className="pt-24 mt-16 mb-16 login">
      <div className="lg:grid grid-cols-2 w-[85%] m-auto">
        <div>
          <div className="mb-16">
            <Image
              src={logo}
              placeholder="blur"
              alt="boy"
            />
          </div>
          <div className="mt-8">
            <h1 className="text-3xl font-bold text-left mb-8">Login your account</h1>
            <form className="w-full max-w-md">
              <h1 className="text-center text-3xl font-bold"></h1>

              <input
                type="text"
                placeholder="Email address"
                className="mt-6 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green"
              />

              <input
                type="password"
                placeholder="Password"
                className="mt-8 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green"
              />

              <button type="submit" className="mt-8 block w-full px-4 py-3 bg-black text-white rounded-md text-sm hover:font-semibold hover:text-black hover:bg-green">sign in</button>
              <button type="submit" className="mt-8 block w-full px-4 py-3 border border-gray-300 rounded-md text-sm font-semibold hover:bg-green">sign up</button>
            </form>
          </div>
        </div>
        <div className="img rounded-md">
          <Image
            src={boy}
            placeholder="blur"
            height={500}
          />
        </div>
      </div>
      
    </div>
  )
}

export default Login
