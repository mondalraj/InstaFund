import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import {
  fundingTypes,
  industries,
  location,
} from "../../components/companyList/data";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

export default function Offer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  //   useEffect(() => {
  //     if (localStorage.getItem("formData")) {
  //       router.push("companyform/funding");
  //     }
  //   }, []);
  const onSubmit = (data) => {
    let ans = window.confirm(
      "Are you sure you want to submit this part of the form and move ahead as you would not be able to refill this again."
    );
    if (ans) {
      localStorage.clear("formData");
      localStorage.clear("fundingRound")
      router.push("/company");
    }
  };
  console.log(errors);
  return (
    <>
      <div className="justify-center flex p-10 h-full">
        <div className="card w-[60%] bg-base-300 shadow-xl">
          <div className="card-body w-full flex">
            <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
              <p>Offer Details:</p>

              <div className="lg:grid grid-cols-1 gap-y-5 w-full py-5">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Your Ask</span>
                  </label>
                  <label className="input-group">
                    <input
                      name="amountRaised"
                      type="number"
                      placeholder="0.01"
                      className="input input-bordered w-full"
                      required
                      {...register("ask")}
                    />
                    <span className="btn btn-accent">XTZ</span>
                  </label>
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Equity</span>
                  </label>
                  <label className="input-group">
                    <input
                      name="amountRaised"
                      type="number"
                      placeholder="10"
                      className="input input-bordered w-full"
                      required
                      {...register("equity")}
                    />
                    <span className="btn btn-accent">%</span>
                  </label>
                </div>
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Funding Type</span>
                  </label>
                  <select
                    name="fundingType"
                    className="select select-bordered"
                    required
                    {...register("fundingType")}
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
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Wallet address</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full "
                    maxLength={20}
                    required
                    {...register("wallet")}
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <input
                    type="submit"
                    value="Submit"
                    className="btn btn-primary w-max"
                />
                </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
