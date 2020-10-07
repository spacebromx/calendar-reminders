import React from 'react';
import {generateCalendar} from "./utils";

import './styles/main.css'

function App() {
  return (
    <div className="antialiased sans-serif bg-gray-100 h-screen">
      <div className="container mx-auto px-4 py-2 md:py-24">
        <div className="bg-white rounded-lg shadow">
          <div className="flex items-center justify-between py-2 px-6">
            <div>
              <span className="text-lg font-bold text-gray-800">February</span>
              <span className="ml-1 text-lg text-gray-600 font-normal">2020</span>
            </div>
            <div className="border rounded-lg px-1">
              <button type="button"
                      className="leading-none rounded-lg transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 items-center">
                <svg className="h-6 w-6 text-gray-500 inline-flex leading-none" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                </svg>
              </button>
              <div className="border-r inline-flex h-6"/>
              <button type="button"
                      className="leading-none rounded-lg transition ease-in-out duration-100 inline-flex items-center cursor-pointer hover:bg-gray-200 p-1">
                <svg className="h-6 w-6 text-gray-500 inline-flex leading-none" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
          {/*end header*/}

          <div className="-mx-1 -mb-1">

            {/*calendar header starts*/}

            <div className="flex flex-wrap">
              <div className="px-2 py-2 flex-1">
                <div className="text-gray-600 text-sm uppercase tracking-wide font-bold text-center">Sunday</div>
              </div>

              <div className="px-2 py-2 flex-1">
                <div className="text-gray-600 text-sm uppercase tracking-wide font-bold text-center">Monday</div>
              </div>
              <div className="px-2 py-2 flex-1">
                <div className="text-gray-600 text-sm uppercase tracking-wide font-bold text-center">Tuesday</div>
              </div>
              <div className="px-2 py-2 flex-1">
                <div className="text-gray-600 text-sm uppercase tracking-wide font-bold text-center">Wednesday</div>
              </div>
              <div className="px-2 py-2 flex-1">
                <div className="text-gray-600 text-sm uppercase tracking-wide font-bold text-center">Thursday</div>
              </div>
              <div className="px-2 py-2 flex-1">
                <div className="text-gray-600 text-sm uppercase tracking-wide font-bold text-center">Friday</div>
              </div>
              <div className="px-2 py-2 flex-1">
                <div className="text-gray-600 text-sm uppercase tracking-wide font-bold text-center">Saturday</div>
              </div>
            </div>

            {/*calendar header ends*/}

            {/*days start*/}
            <div className="flex flex-wrap border-t border-l">
              <div style={{width: "14.28%", height: "120px"}} className="day px-4 pt-2 border-r border-b relative overflow-y-scroll">
                <div
                  className="inline-flex w-6 h-6 items-center justify-center cursor-pointer text-center leading-none rounded-full transition ease-in-out duration-100 text-gray-700 hover:bg-blue-200">1
                </div>
                <div style={{height: "80px;"}} className="overflow-y-auto mt-1">
                  <div className="px-2 py-1 rounded-lg mt-1 overflow-hidden border">
                    <p className="text-sm truncate leading-tight">and this is l;ol</p>
                  </div>
                </div>
              </div>
            </div>

            {/*days end*/}

          </div>


        </div>
      </div>
    </div>
  );
}

export default App;
