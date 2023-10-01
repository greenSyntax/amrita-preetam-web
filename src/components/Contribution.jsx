import React from 'react'

function Contribution() {
  return (
    <>
      <div className="bg-white">
        <div className="relative isolate px-12 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <a href="/" className="font-semibold text-indigo-600">
                  <span className="absolute inset-0" aria-hidden="true" />
                  ← Move to Home
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Contribute in Project
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                fugiat veniam occaecat fugiat aliqua.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a href="/contribute"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Go to Github
                </a>
                <a href="/report" className="rounded-md bg-slate-600 px-3.5 py-2.5 text-sm font-semibold shadow-sm leading-6 text-white">
                  You can Mail Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contribution