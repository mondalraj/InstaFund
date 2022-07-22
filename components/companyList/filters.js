/* eslint-disable react/no-unescaped-entities */
import React from "react";

export default function Filters() {
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
          <div className="modal-box">
            <h3 className="font-bold text-lg">
              Filter by:
            </h3>
            <p className="py-4">
              You've been selected for a chance to get one year of subscription
              to use Wikipedia for free!
            </p>
            <div className="modal-action">
              <label htmlFor="my-modal" className="btn">
                Yay!
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
