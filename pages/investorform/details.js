import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";
import Head from "next/head";

export default function funding() {
  const [inputList, setInputList] = useState([
    {
      companyName: "",
      dateOfFunding: "",
      amountInvested: null,
      equityOwned: null,
      investorPhotoUrl: "",
    },
  ]);

  const [memberList, setMemberList] = useState([
    {
      fullName: "",
      designation: "",
      memberPhotoUrl: "",
      linkedin: "",
      twitter: "",
      description: "",
    },
  ]);

  const router = useRouter();

  const handleSubmit = (data) => {
    // localStorage.setItem("investorData", JSON.stringify(inputList));
    router.push("/investor");
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
    console.log(inputList);
  };

  const handleTeamInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...memberList];
    list[index][name] = value;
    setMemberList(list);
  };

  const handleRemoveClick = (index) => {
    if (window.confirm("Are you sure you want to delete this?")) {
      const list = [...inputList];
      list.splice(index, 1);
      setInputList(list);
    }
  };

  const handleTeamRemoveClick = (index) => {
    if (window.confirm("Are you sure you want to delete this?")) {
      const list = [...memberList];
      list.splice(index, 1);
      setMemberList(list);
    }
  };

  const handleAddClick = () => {
    setInputList([
      ...inputList,
      {
        companyName: "",
        dateOfInvestment: "",
        amountInvested: null,
        equityOwned: null,
        investorPhotoUrl: "",
      },
    ]);
  };

  const handleTeamAddClick = () => {
    setMemberList([
      ...memberList,
      {
        fullName: "",
        designation: "",
        memberPhotoUrl: "",
        linkedin: "",
        twitter: "",
        description: "",
      },
    ]);
  };

  return (
    <>
      <Head>
        <title>Investments</title>
      </Head>
      <div className="justify-center flex p-10 h-full">
        <div className="card w-[80%] bg-base-300 shadow-xl">
          <div className="card-body w-full flex">
            <div className="flex justify-between">
              <p className="text-2xl font-medium">Past Investments:</p>
              <button className="btn btn-primary" onClick={handleAddClick}>
                <Icon
                  icon="ant-design:plus-outlined"
                  className="text-2xl mr-2"
                />{" "}
                Add new Investment
              </button>
            </div>
            <form
              className="flex flex-col px-10"
              onSubmit={() => handleSubmit()}
            >
              {inputList.map((x, i) => {
                return (
                  <div className="flex flex-col" key={i}>
                    <p className="text-lg font-medium">Investment {i + 1}</p>
                    <div className="lg:grid grid-cols-3 gap-5 py-2 w-full">
                      <div className="form-control w-full max-w-xs">
                        <label className="label">
                          <span className="label-text">Company Name</span>
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          onChange={(e) => handleInputChange(e, i)}
                          value={x.companyName}
                          placeholder="Type here"
                          className="input input-bordered w-full max-w-xs"
                          required
                        />
                      </div>
                      <div className="form-control w-full max-w-xs">
                        <label className="label">
                          <span className="label-text">Date of Funding</span>
                        </label>
                        <input
                          type="date"
                          name="dateOfInvestment"
                          onChange={(e) => handleInputChange(e, i)}
                          value={x.dateOfInvestment}
                          placeholder="Type here"
                          className="input input-bordered w-full max-w-xs"
                          required
                        />
                      </div>
                      <div className="form-control w-full max-w-xs">
                        <label className="label">
                          <span className="label-text">Investor Photo URL</span>
                        </label>
                        <input
                          type="url"
                          name="investorPhotoUrl"
                          onChange={(e) => handleInputChange(e, i)}
                          value={x.investorPhotoUrl}
                          placeholder="www.example.com"
                          className="input input-bordered w-full "
                          required
                        />
                      </div>
                      <div className="form-control w-full max-w-xs">
                        <label className="label">
                          <span className="label-text">Amount Invested</span>
                        </label>
                        <label className="input-group">
                          <input
                            name="amountInvested"
                            type="number"
                            placeholder="0.1"
                            className="input input-bordered w-full max-w-xs"
                            onChange={(e) => handleInputChange(e, i)}
                            value={x.amountInvested}
                            required
                          />
                          <span className="btn btn-accent">TEZ</span>
                        </label>
                      </div>
                      <div className="form-control w-full max-w-xs">
                        <label className="label">
                          <span className="label-text">Equity Owned</span>
                        </label>
                        <label className="input-group">
                          <input
                            name="equityOwned"
                            type="number"
                            placeholder="10"
                            className="input input-bordered w-full max-w-xs"
                            onChange={(e) => handleInputChange(e, i)}
                            value={x.equityOwned}
                            required
                          />
                          <span className="btn btn-accent">%</span>
                        </label>
                      </div>
                      <div></div>
                      <div>
                        {inputList.length !== 1 && (
                          <button
                            className="flex justify-center items-center  text-sm font-medium text-[#F38585] hover:bg-[#F38585] hover:text-slate-700 p-4 rounded-full"
                            onClick={() => handleRemoveClick(i)}
                          >
                            Remove Investment Info
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
              {/* <div className="flex justify-end">
                  <input
                    type="submit"
                    value="Submit"
                    className="btn btn-primary w-max px-10"
                  />
              </div> */}
            </form>
            <div className="divider mt-0"></div>
            <div className="flex justify-between items-center">
              <p className="text-2xl font-medium">Team Members:</p>
              <button className="btn btn-primary" onClick={handleTeamAddClick}>
                <Icon
                  icon="ant-design:plus-outlined"
                  className="text-2xl mr-2"
                />{" "}
                Add new Member
              </button>
            </div>
            <form
              className="flex flex-col px-10"
              onSubmit={() => handleSubmit()}
            >
              {memberList.map((x, index) => {
                return (
                  <div className="flex flex-col" key={index}>
                    <p className="text-lg font-medium">Team {index + 1}</p>
                    <div className="lg:grid grid-cols-3 gap-5 py-2 w-full">
                      <div className="form-control w-full max-w-xs">
                        <label className="label">
                          <span className="label-text">Person Name</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          onChange={(e) => handleTeamInputChange(e, index)}
                          value={x.fullName}
                          placeholder="Enter full name"
                          className="input input-bordered w-full max-w-xs"
                          required
                        />
                      </div>
                      <div className="form-control w-full max-w-xs">
                        <label className="label">
                          <span className="label-text">Designation</span>
                        </label>
                        <input
                          type="text"
                          name="designation"
                          onChange={(e) => handleTeamInputChange(e, index)}
                          value={x.designation}
                          placeholder="Enter Designation"
                          className="input input-bordered w-full max-w-xs"
                          required
                        />
                      </div>
                      <div className="form-control w-full max-w-xs">
                        <label className="label">
                          <span className="label-text">Member Photo URL</span>
                        </label>
                        <input
                          type="url"
                          name="memberPhotoUrl"
                          onChange={(e) => handleTeamInputChange(e, index)}
                          value={x.memberPhotoUrl}
                          placeholder="www.example.com"
                          className="input input-bordered w-full "
                          required
                        />
                      </div>
                      <div className="form-control w-full max-w-xs">
                        <label className="label">
                          <span className="label-text">Linkedin username</span>
                        </label>
                        <input
                          type="url"
                          name="linkedin"
                          onChange={(e) => handleTeamInputChange(e, index)}
                          value={x.linkedin}
                          placeholder="Type here"
                          className="input input-bordered w-full"
                        />
                      </div>
                      <div className="form-control w-full max-w-xs">
                        <label className="label">
                          <span className="label-text">Twitter username</span>
                        </label>
                        <input
                          type="url"
                          name="twitter"
                          onChange={(e) => handleTeamInputChange(e, index)}
                          value={x.twitter}
                          placeholder="Type here"
                          className="input input-bordered w-full"
                        />
                      </div>
                      <div></div>
                      <div className="form-control col-span-3 w-full mx-auto">
                        <label className="label">
                          <span className="label-text">
                            Small Description here
                          </span>
                        </label>
                        <textarea
                          name="description"
                          onChange={(e) => handleTeamInputChange(e, index)}
                          value={x.description}
                          className="textarea h-16 resize-none"
                          minLength={40}
                          maxLength={120}
                          placeholder="Write description..."
                        ></textarea>
                      </div>
                      <div>
                        {memberList.length !== 1 && (
                          <button
                            className="flex justify-center items-center text-sm font-medium text-[#F38585] hover:bg-[#F38585] hover:text-slate-700 p-4 rounded-full"
                            onClick={() => handleTeamRemoveClick(index)}
                          >
                            Remove Member
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="flex justify-end">
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-primary w-max px-10"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
