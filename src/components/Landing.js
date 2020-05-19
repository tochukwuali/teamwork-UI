import React from 'react'

const Landing = () => {
    return (
      <div className="bg-gray-400 font-sans leading-normal tracking-normal">
        <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
          {/* <!--Left Col--> */}
          <div className="flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6">
            {/* <p className="uppercase tracking-loose">Witty Tagline</p> */}
            <h1 className="font-bold text-3xl my-4">Connect with your team</h1>
            <p className="leading-normal mb-4">
              Instead of emails and messages, and have your work
              mates see them and comment just like facebook.
            </p>
            <button
              className="bg-transparent hover:bg-gray-900 text-gray-900 hover:text-white rounded shadow hover:shadow-lg 
            py-2 px-4 border border-gray-900 hover:border-transparent"
            >
              Get Started
            </button>
          </div>
          {/* <!--Right Col--> */}
          <div className="w-full lg:w-1/2 lg:py-6 text-center">
            {/* Name */}
            <svg
              className="fill-current text-gray-900 w-3/5 mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M17 6V5h-2V2H3v14h5v4h3.25H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6zm-5.75 14H3a2 2 0 0 1-2-2V2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5.75zM11 8v8h6V8h-6zm3 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>
          </div>
        </div>
      </div>
    );
}

export default Landing
