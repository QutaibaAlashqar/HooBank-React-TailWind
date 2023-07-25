import { card } from "../../assets";

import { useNavigate } from "react-router-dom";


export default function ContactForm() {

  
  const navigate = useNavigate();
  window.scrollTo(0, 0);


  return (
    <div>
      <section className="flex md:flex-row flex-col text-white relative sm:py-16">
        <div className="container px-1 py-15 mx-auto">
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap ">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-White text-xl">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-700 focus:border-indigo-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-500 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm text-white text-xl"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-9 text-sm text-white text-xl"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto font-bold text-white bg-indigo-500 border-0 py-3 px-10 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  SEND
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a className="text-indigo-500">hoobank@email.com</a>
                <p className="leading-normal my-5">
                  Ankara / Turkey
                </p>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="flip-up" className="view_over-in">
            
            <img src={card} alt="billing" className="w-[100%] h-[100%] blur_css"/>
            <button  onClick={() => navigate('/LogIn')} className="btn bg-rose-700 hover:bg-rose-500 font-bold text-white text-xl py-5 px-20 rounded-full animate-pulse">
                LogIn
            </button>
        </div>

      </section>
    </div>
  );
}