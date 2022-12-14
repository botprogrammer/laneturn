import React from "react";

export default function Contact() {
  return (
    <div className="body">
      <section className="bg-white">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl font-bold text-center text-gray-700">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-600 sm:text-xl">
            Got a technical issue? Want to send feedback about a new feature? We
            use an agile approach to connect with the needs of your customers
            early and often.
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label className="block mb-2 text-md font-medium text-gray-600">
                First Name
              </label>
              <input
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg block w-full p-2.5"
                placeholder="John"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-md font-medium text-gray-600">
                Last Name
              </label>
              <input
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg block w-full p-2.5"
                placeholder="Doe"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-md font-medium text-gray-600">
                Your Email
              </label>
              <input
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg block w-full p-2.5"
                placeholder="john@gmail.com"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-md font-medium text-gray-600">
                Your message
              </label>
              <textarea
                id="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 "
                placeholder="Enter your message..."
                required
              />
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
