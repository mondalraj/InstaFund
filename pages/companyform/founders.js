import Head from "next/head";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { Confirm } from "notiflix";

export default function founders() {
  const [memberList, setMemberList] = useState([
    {
      fullName: "",
      designation: "",
      memberPhotoUrl: "",
      linkedin: "",
      twitter: "",
    },
  ]);

  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("formData")) {
      router.push("/companyform");
    } else if (localStorage.getItem("founders")) {
      router.push("/companyform/funding");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    Confirm.show(
      "Confirmation",
      "Are you really want to submit this form and move ahead as you would not be able to refill this again.",
      "Ok",
      "Cancel",
      () => {
        localStorage.setItem("founders", JSON.stringify(memberList));
        router.push("/companyform/funding");
      },
      {
        width: "350px",
        okButtonColor: "#fff",
        okButtonBackground: "#36D399",
        cancelButtonColor: "#fff",
        cancelButtonBackground: "#191D24",
      }
    );
  };

  const handleTeamInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...memberList];
    list[index][name] = value;
    setMemberList(list);
  };

  const handleTeamRemoveClick = (index) => {
    let ans = window.confirm("Are you sure you want to remove this founder?");
    if (ans) {
      const list = [...memberList];
      list.splice(index, 1);
      setMemberList(list);
    }
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
      },
    ]);
  };

  return (
    <>
      <Head>
        <title>Founders Details</title>
      </Head>
      <div className="justify-center flex p-10 h-full">
        <div className="card w-[80%] bg-base-300 shadow-xl">
          <div className="card-body w-full flex">
            <div className="flex justify-between items-center">
              <p className="text-2xl font-medium">Founders:</p>
              <button className="btn btn-primary" onClick={handleTeamAddClick}>
                <Icon
                  icon="ant-design:plus-outlined"
                  className="text-2xl mr-2"
                />{" "}
                Add new Founder
              </button>
            </div>
            <form className="flex flex-col px-10" onSubmit={handleSubmit}>
              {memberList.map((x, index) => {
                return (
                  <div className="flex flex-col" key={index}>
                    <p className="text-lg font-medium">Founder {index + 1}</p>
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
                          <span className="label-text">Linkedin username</span>
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
                          <span className="label-text">Twitter username</span>
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
                <button type="submit" className="btn btn-primary w-max px-10">
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
