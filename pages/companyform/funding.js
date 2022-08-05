/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head";
import { useEffect, useState } from "react";
import { fundingTypes } from "../../components/companyList/data";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";

export default function funding() {
  const [inputList, setInputList] = useState([
    {
      raised: null,
      type: "",
      dateOfFunding: "",
      valuation: null,
      investor: "",
      photo_url: "",
    },
  ]);

  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("fundingRound")) {
      router.push("/companyform/offer");
    }
  }, []);

  const handleSubmit = (data) => {
    let ans = window.confirm(
      "Are you sure you want to submit this part of the form and move ahead as you would not be able to refill this again."
    );
    if (ans) {
      localStorage.setItem("fundingRound", JSON.stringify(inputList));
      router.push("/companyform/funding");
    }
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const handleRemoveClick = (index) => {
    if (window.confirm("Are you sure you want to delete this?")) {
      const list = [...inputList];
      list.splice(index, 1);
      setInputList(list);
    }
  };

  const handleAddClick = () => {
    setInputList([
      ...inputList,
      {
        raised: null,
        type: "",
        dateOfFunding: "",
        valuation: null,
        investor: "",
        photo_url: "",
      },
    ]);
  };

  return (
    <>
      <div className="justify-center flex p-10 h-full">
        <div className="card w-[80%] bg-base-300 shadow-xl">
          <div className="card-body w-full flex">
            <div className="flex justify-between">
              <p>Past Funding Rounds:</p>
              <button className="btn btn-primary" onClick={handleAddClick}>
                <Icon icon="ant-design:plus-outlined" className="text-2xl" />
              </button>
            </div>
            <form className="flex flex-col" onSubmit={() => handleSubmit()}>
              {inputList.map((x, i) => {
                return (
                  <div className="flex flex-col" key={i}>
                    <p className="flex items-center">Round {i + 1}</p>
                    <div className="lg:grid grid-cols-3 gap-5  py-3">
                      <div className="form-control w-full max-w-xs">
                        <label className="label">
                          <span className="label-text">Amount Raised</span>
                        </label>
                        <label className="input-group">
                          <input
                            name="raised"
                            type="number"
                            value={x.raised}
                            placeholder="0.01"
                            className="input input-bordered w-full max-w-xs"
                            onChange={(e) => handleInputChange(e, i)}
                            required
                          />
                          <span className="btn btn-accent">tez</span>
                        </label>
                      </div>
                      <div className="form-control w-full max-w-xs">
                        <label className="label">
                          <span className="label-text">Funding Type</span>
                        </label>
                        <select
                          name="type"
                          className="select select-bordered w-full max-w-xs"
                          onChange={(e) => handleInputChange(e, i)}
                          required
                          value={x.type}
                        >
                          <option disabled selected>
                            Pick one
                          </option>
                          {fundingTypes.map((data, index) => {
                            return (
                              <option value={data} key={index}>
                                {data}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div className="form-control w-full max-w-xs">
                        <label className="label">
                          <span className="label-text">Date of Funding</span>
                        </label>
                        <input
                          type="date"
                          name="dateOfFunding"
                          value={x.dateOfFunding}
                          onChange={(e) => handleInputChange(e, i)}
                          placeholder="Type here"
                          className="input input-bordered w-full max-w-xs"
                          required
                        />
                      </div>
                      <div className="form-control w-full max-w-xs">
                        <label className="label">
                          <span className="label-text">Company Valuation</span>
                        </label>
                        <input
                          type="number"
                          name="valuation"
                          value={x.valuation}
                          onChange={(e) => handleInputChange(e, i)}
                          placeholder="10,000 tez"
                          className="input input-bordered w-full max-w-xs"
                          required
                        />
                      </div>
                      <div className="form-control w-full max-w-xs">
                        <label className="label">
                          <span className="label-text">
                            Investor Name & Designation
                          </span>
                        </label>
                        <input
                          type="text"
                          name="investor"
                          value={x.investor}
                          onChange={(e) => handleInputChange(e, i)}
                          placeholder="John Doe (CEO)"
                          className="input input-bordered w-full max-w-xs"
                          required
                        />
                      </div>
                      <div className="form-control w-full mx-w-xs">
                        <label className="label">
                          <span className="label-text">Investor Photo URL</span>
                        </label>
                        <input
                          type="url"
                          value={x.photo_url}
                          name="photo_url"
                          onChange={(e) => handleInputChange(e, i)}
                          placeholder="www.example.com"
                          className="input input-bordered w-full max-w-xs"
                          required
                        />
                      </div>
                      <div className="my-4">
                        {inputList.length !== 1 && (
                          <button
                            className="flex justify-center items-center  text-sm font-medium text-[#F38585]"
                            onClick={() => handleRemoveClick(i)}
                          >
                            Remove Funding Round
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="flex justify-end gap-3">
                <div className="flex justify-end">
                  <a href="offer" className="btn btn-ghost w-max">
                    {" "}
                    Skip{" "}
                  </a>
                </div>
                <div className="flex justify-end">
                  <input
                    type="submit"
                    value="Next"
                    className="btn btn-primary  w-max"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
