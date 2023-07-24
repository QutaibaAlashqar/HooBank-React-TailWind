import { logo } from '../assets';


function logIn() {
  return (
    <div className=" flex items-center min-h-screen bg-gray-50">
            <div className="flex-1 h-full max-w-4xl mx-auto bg-black rounded-lg shadow-xl">
                <div className="flex flex-col md:flex-row">
                    <div className="h-32 md:h-auto md:w-1/2">
                        <img className="object-cover w-full h-full" src="https://blogs.idc.com/wp-content/uploads/2021/06/06.18.21_JS_Featured-scaled.jpg"
                            alt="img" />
                    </div>
                    <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                        <div className="w-full">
                            <div className="flex justify-center">
                                <img className="w-18 h-18" src={logo} alt="loo" />
                            </div>
                            <h1 className="mb-4 text-2xl font-bold text-center text-white">
                                Login to Your Account
                            </h1>
                            <div>
                                <label className="block text-sm text-white">
                                    Email
                                </label>
                                <input type="email"
                                    className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    placeholder="" />
                            </div>
                            <div>
                                <label className="block mt-4 text-sm text-white">
                                    Password
                                </label>
                                <input
                                    className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    placeholder="" type="password" />
                            </div>
                            <p className="mt-4 text-white">
                                <a className="text-sm text-blue-600 hover:underline" href="https://www.instagram.com">
                                    Forgot your password?
                                </a>
                            </p>

                            <button
                                className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                                href="#">
                                Log In
                            </button>

                            <hr className="my-8" />

                            <div className="flex items-center text-white justify-center gap-4">
                                <button className="flex items-center text-white justify-center w-full px-4 py-2 text-sm font-extrabold border rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-white">
                                    <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
                                    </svg>
                                    Call Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default logIn