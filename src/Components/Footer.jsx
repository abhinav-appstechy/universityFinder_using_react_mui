import React from 'react'

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <svg
            width="35"
            height="35"
            viewBox="0 0 97 97"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M48.4175 77.3453C43.8175 73.3453 39.6475 68.7853 35.2975 64.4653C24.3975 53.6353 13.5575 42.7353 2.6475 31.9053C2.10617 31.4126 1.67961 30.8071 1.39796 30.1315C1.11631 29.4559 0.986433 28.7266 1.0175 27.9953C1.0975 19.3953 1.0175 10.7953 1.0675 2.18532C1.0675 1.47532 0.647504 0.435319 1.4375 0.0753186C2.2275 -0.284681 2.7275 0.735319 3.2475 1.24532C13.3875 11.3453 23.5208 21.4587 33.6475 31.5853C37.9375 35.8553 42.3475 40.0153 46.5475 44.3853C48.1075 45.9953 48.9575 45.7353 50.4175 44.2953C64.6375 29.9953 78.9008 15.7387 93.2075 1.52532C93.8075 0.925318 94.3175 -0.324681 95.3075 0.135319C96.0675 0.495319 95.6175 1.68532 95.6275 2.49532V12.4353C95.6611 12.9938 95.5699 13.5528 95.3606 14.0717C95.1513 14.5906 94.8292 15.0564 94.4175 15.4353C79.7508 30.0487 65.0842 44.6687 50.4175 59.2953C49.6812 59.9244 49.1016 60.7166 48.725 61.6088C48.3483 62.5011 48.1848 63.4688 48.2475 64.4353C48.4175 67.8153 48.2475 71.2053 48.3075 74.5853C48.3075 75.3353 48.0875 76.1953 49.0775 76.5853C48.9575 76.8753 48.8575 77.2553 48.4175 77.3453Z"
              fill="#A48854"
            />
            <path
              d="M49.08 79.62C49.52 79.53 49.65 79.15 49.81 78.82L95.7 33C96 33.28 96.18 33.38 96.18 33.47C96.08 42.61 97.06 51.81 94.96 60.85C91.26 76.77 81.49 87.27 66.25 92.81C60.7899 94.9458 54.9337 95.8803 49.08 95.55C49.08 95.21 49.02 94.88 49 94.55L49.08 79.62Z"
              fill="#332A4E"
            />
            <path
              d="M48.3375 95.2489C48.3375 95.5789 48.3375 95.9089 48.4175 96.2489C41.5175 96.8089 34.9675 95.2489 28.6675 92.6489C23.1595 90.524 18.1568 87.2707 13.9806 83.0979C9.8044 78.9251 6.54697 73.9251 4.4175 68.4189C2.39528 63.1608 1.27293 57.5997 1.0975 51.9689C1.0975 51.3189 0.7075 50.3589 1.4875 50.0589C2.2675 49.7589 2.6675 50.6789 3.1375 51.1489C17.4575 65.4156 31.7708 79.6889 46.0775 93.9689C46.6975 94.6189 47.1875 95.5589 48.3375 95.2489Z"
              fill="#A48854"
            />
          </svg>
      <span className="ml-3 text-xl">UniversityFinder</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 UniversityFinder —
      <a className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@universityfinder</a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a className="text-gray-500">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-500">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-500">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-500">
        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
  </div>
</footer>
  )
}

export default Footer