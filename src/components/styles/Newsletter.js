import React from "react";

const Newsletter = () => {
  return (
    <div>
      <div class="bg-white">
        <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 class="inline text-3xl font-extrabold tracking-tight text-gray-900 sm:block sm:text-4xl">
            Want service news and updates?
          </h2>
          <p class="inline text-3xl font-extrabold tracking-tight text-indigo-600 sm:block sm:text-4xl">
            Sign up for our newsletter.
          </p>
          <form class="mt-8 sm:flex">
            <label for="emailAddress" class="sr-only">
              Email address
            </label>
            <input
              id="emailAddress"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="w-full px-5 py-3 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs border-gray-300 rounded-md"
              placeholder="Enter your email"
            />
            <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Notify me
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;