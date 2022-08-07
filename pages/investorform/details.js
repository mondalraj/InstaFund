import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import { supabase } from "../../utils/supabaseClient";
import { useRouter } from "next/router";
import { Notify } from "notiflix";

export default function funding() {
  const submitRef = useRef();
  const [isCompany, setIsCompany] = useState(false);
  const [inputList, setInputList] = useState([
    {
      companyName: "",
      dateOfInvestment: "",
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

  useEffect(() => {
    const investorData = JSON.parse(localStorage.getItem("investorData"));
    if (!investorData) router.push("/investorform");
    else if (investorData.userType === "company") setIsCompany(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const investorData = JSON.parse(localStorage.getItem("investorData"));
    const photoName = investorData.name.trim().split(" ").join("_");
    investorData["isCompany"] = isCompany;
    delete investorData.userType;

    // Convert the proper Base64 encoding to recognize as image in database
    const type = investorData.photo.split(";")[0].split("/")[1]; // To get the image type
    const imageBase64Str = investorData.photo.replace(/^.+,/, "");
    const image = Buffer.from(imageBase64Str, "base64");
    delete investorData.photo;

    try {
      const { pic, picError } = await supabase.storage
        .from("investor-avatars")
        .upload(`${photoName}.${type}`, image, {
          cacheControl: "1800",
          upsert: true,
          contentType: `image/${type}`,
        });

      if (picError) throw new Error("Something wrong with upload photo");

      const { data, error } = await supabase.from("Investors").insert([
        {
          ...investorData,
          picUrl: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/investor-avatars/${photoName}.${type}`,
        },
      ]);

      if (error) throw new Error("Something went wrong with user");

      if (isCompany) {
        memberList = memberList.map((item) => {
          return { ...item, user_id: data[0].id };
        });

        const { teamData, teamError } = await supabase
          .from("Team_members")
          .insert(memberList);

        if (teamError) throw new Error("Something went wrong with team");
      }

      inputList = inputList.map((item) => {
        return { ...item, user_id: data[0].id };
      });

      const { investData, investError } = await supabase
        .from("Investments")
        .insert(inputList);

      if (investError) throw new Error("Something went wrong with investments");

      const { user, updateError } = await supabase.auth.update({
        data: { profile_id: data[0].id },
      });

      if (updateError) throw new Error("Something went wrong with auth");

      localStorage.removeItem("investorData");
      router.push(`/investor/${data[0].id}`);
    } catch (error) {
      Notify.failure(error.message, { position: "top-right" });
    }
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const handleTeamInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...memberList];
    list[index][name] = value;
    setMemberList(list);
  };

  const handleRemoveClick = (index) => {
    let ans = window.confirm(
      "Are you sure you want to delete this investment?"
    );
    if (ans) {
      const list = [...inputList];
      list.splice(index, 1);
      setInputList(list);
    }
  };

  const handleTeamRemoveClick = (index) => {
    let ans = window.confirm("Are you sure you want to remove this member?");
    if (ans) {
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
            <form className="flex flex-col px-10" onSubmit={handleSubmit}>
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
                          max={new Date().toISOString().split("T")[0]}
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
                        <p className="text-xs m-1.5 text-gray-500">
                          Upload photo{" "}
                          <a
                            href="https://imgur.com/upload"
                            target="_blank"
                            className="underline"
                          >
                            here
                          </a>{" "}
                          and submit a link
                        </p>
                      </div>
                      <div className="form-control w-full max-w-xs">
                        <label className="label">
                          <span className="label-text">Amount Invested</span>
                        </label>
                        <label className="input-group">
                          <input
                            name="amountInvested"
                            type="number"
                            placeholder="1000"
                            min={1000}
                            step=".01"
                            className="input input-bordered w-full max-w-xs"
                            onChange={(e) => handleInputChange(e, i)}
                            value={
                              x.amountInvested == null ? "" : x.amountInvested
                            }
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
                            min={1}
                            step=".01"
                            className="input input-bordered w-full max-w-xs"
                            onChange={(e) => handleInputChange(e, i)}
                            value={x.equityOwned == null ? "" : x.equityOwned}
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
              <div className="flex justify-end">
                <button
                  type="submit"
                  ref={submitRef}
                  className={`btn btn-primary w-max px-10 ${
                    isCompany ? "hidden" : "block"
                  }`}
                >
                  Submit
                </button>
              </div>
            </form>
            {isCompany && (
              <>
                <div className="divider mt-0"></div>
                <div className="flex justify-between items-center">
                  <p className="text-2xl font-medium">Team Members:</p>
                  <button
                    className="btn btn-primary"
                    onClick={handleTeamAddClick}
                  >
                    <Icon
                      icon="ant-design:plus-outlined"
                      className="text-2xl mr-2"
                    />{" "}
                    Add new Member
                  </button>
                </div>
                <form
                  className="flex flex-col px-10"
                  onSubmit={(e) => e.preventDefault()}
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
                              <span className="label-text">
                                Member Photo URL
                              </span>
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
                            <p className="text-xs m-1.5 text-gray-500">
                              Upload photo{" "}
                              <a
                                href="https://imgur.com/upload"
                                target="_blank"
                                className="underline"
                              >
                                here
                              </a>{" "}
                              and submit a link
                            </p>
                          </div>
                          <div className="form-control w-full max-w-xs">
                            <label className="label">
                              <span className="label-text">
                                Linkedin username
                              </span>
                            </label>
                            <input
                              type="text"
                              name="linkedin"
                              onChange={(e) => handleTeamInputChange(e, index)}
                              value={x.linkedin}
                              placeholder="Type here"
                              className="input input-bordered w-full"
                            />
                          </div>
                          <div className="form-control w-full max-w-xs">
                            <label className="label">
                              <span className="label-text">
                                Twitter username
                              </span>
                            </label>
                            <input
                              type="text"
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
                              required
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
                    <button
                      type="submit"
                      onClick={() => submitRef.current.click()}
                      className="btn btn-primary w-max px-10"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
