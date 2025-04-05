import React from 'react';

const contract = () => {
    return (
<>
  <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 text-white bg-gray-800">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        alt="Your Company"
        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
        className="mx-auto h-10 w-auto"
      />
      <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-white">
        Send Your Message
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form action="#" method="POST" className="space-y-6 text-white">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="block w-full md:w-full rounded-md px-3 py-1.5 text-base text-white outline-1 outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              placeholder="Write Your E-mail"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="message" className="block text-sm font-medium text-white">
              Message Box
            </label>
          </div>
          <textarea
            id="message"
            name="message"
            className="textarea block w-full md:w-full rounded-md px-3 py-1.5 text-base text-white outline-1 outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
            placeholder="Write Your Message"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-indigo-600"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
</>


    );
};

export default contract;