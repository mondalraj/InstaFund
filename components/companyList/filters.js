/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import Search from "./search";
import { industries, location } from "./data";

export default function Filters() {
  const [category, setCategory] = useState(industries);

  return (
    <>
      <div className="flex justify-center items-center gap-5">
        <label htmlFor="my-modal" className="btn modal-button">
          Filters
        </label>
        <div className="dropdown">
          <label tabIndex="0" className="btn m-1">
            Sort by
          </label>
          <ul
            tabIndex="0"
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Company Name</a>
            </li>
          </ul>
        </div>

        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box w-11/12 h-[500px]  max-w-5xl overflow-y-hidden">
          <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <div className="grid grid-cols-[min-content_auto] gap-5 divide-x w-full h-full mt-5">
              <div className="flex flex-col space-y-5 bg-base-300 p-5 justify-between h-max ">
                <h3 className="font-bold text-lg">Filter by:</h3>
                <div className="flex flex-col gap-3 justify-evenly">
                  <button
                    className="w-max btn btn-active"
                    onClick={() => setCategory(industries)}
                  >
                    Industry
                  </button>
                  <button
                    className="w-max  btn btn-active"
                    onClick={() => setCategory(location)}
                  >
                    Location
                  </button>
                  <button className="w-max  btn btn-active">
                    Company Valuation
                  </button>
                </div>
                <div className="modal-action">
                  <label htmlFor="my-modal" className="btn btn-primary w-full">
                    Save Changes
                  </label>
                </div>
              </div>
              <div className="w-full px-5 flex flex-col overflow-y-scroll">
                <Search width="w-full" />
                <div className="mt-5 p-5 bg-base-200 space-y-3 ">
                  {category.map((data, index) => {
                    return (
                      <div key={index}>
                        <button className="btn btn-secondary w-full">{data}</button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
