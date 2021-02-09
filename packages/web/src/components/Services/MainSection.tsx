import React, { Fragment } from "react";

const MainSection = () => {
  return (
    <Fragment>
      <section className="text-gray-400 bg-white body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              Pricing
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600">
              Banh mi cornhole echo park skateboard authentic crucifix neutra
              tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon
              twee
            </p>
          </div>
          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-300 rounded-tl rounded-bl">
                    Service
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-300">
                    Professional
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-300">
                    Price
                  </th>
                 
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-3 text-gray-600">Vet</td>
                  <td className="px-4 py-3 text-gray-600">Alessa Monroe</td>
                  <td className="px-4 py-3 text-lg text-gray-600">$40usd</td>
                </tr>
                <tr>
                  <td className="border-t-2 border-gray-600 px-4 py-3 text-gray-600">Pet Grommer</td>
                  <td className="border-t-2 border-gray-600 px-4 py-3 text-gray-600">
                    Christian Jhon
                  </td>
                  
                  <td className="border-t-2 border-gray-600 px-4 py-3 text-lg text-gray-600">
                    $20usd
                  </td>             
                </tr>
                <tr>
                  <td className="border-t-2 border-gray-600 px-4 py-3 text-gray-600">
                    Urgency Vet
                  </td>
                  <td className="border-t-2 border-gray-600 px-4 py-3 text-gray-600">
                    Martin Arredondo
                  </td>
                  
                  <td className="border-t-2 border-gray-600 px-4 py-3 text-lg text-gray-600">
                    $70usd
                  </td>
                  
                </tr>
                <tr>
                  <td className="border-t-2 border-b-2 border-gray-600 px-4 py-3 text-gray-600">
                    Pet Swimsuit
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-600 px-4 py-3 text-gray-600">
                    Luna Merit
                  </td>
                  
                  <td className="border-t-2 border-b-2 border-gray-600 px-4 py-3 text-lg text-gray-600">
                    $15usd
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
          <div className="text-blue-400 inline-flex items-center md:mb-2 lg:mb-0">Learn More
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default MainSection;
