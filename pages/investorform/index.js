import { useEffect, useState } from "react";
import Head from "next/head";
import { Icon } from "@iconify/react";
import { industries, location } from "../../components/companyList/data";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { Confirm, Notify } from "notiflix";
import { supabase } from "../../utils/supabaseClient";

export default function Investorform() {
  const [photo, setPhoto] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  useEffect(() => {
    const userData = supabase.auth.user();
    if (!userData) router.push("/auth?type=login");
    else if (userData.user_metadata.type === "company") {
      router.push("/companyform");
    } else if (userData.user_metadata.profile_id) {
      router.push(
        `/${userData.user_metadata.type}/${userData.user_metadata.profile_id}`
      );
    } else if (localStorage.getItem("investorData")) {
      router.push("/investorform/details");
    }
  }, []);

  const getBase64 = async () => {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.readAsDataURL(photo);
      reader.onload = () => {
        resolve(reader.result);
      };
    });
  };

  const onSubmit = async (data) => {
    if (!photo) {
      Notify.failure("Please provide a photo", { position: "top-right" });
      return;
    }

    const pic = await getBase64();
    data = { ...data, photo: pic };
    Confirm.show(
      "Confirmation",
      "Are you really want to submit this form and move ahead as you would not be able to refill this again.",
      "Ok",
      "Cancel",
      () => {
        localStorage.setItem("investorData", JSON.stringify(data));
        router.push("/investorform/details");
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

  return (
    <>
      <div className="justify-center flex p-10 h-full">
        <Head>
          <title>Investor Form</title>
        </Head>
        <div className="card w-[60%] bg-base-300 shadow-xl">
          <div className="card-body w-full flex">
            <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex relative justify-center">
                <div
                  className="tooltip  tooltip-top"
                  data-tip="Add company logo / your photo here"
                >
                  <label htmlFor="file-input">
                    {photo ? (
                      <div className="relative">
                        <img
                          src={URL.createObjectURL(photo)}
                          alt="Investor Pic"
                          className="w-32 h-32 rounded-full object-cover"
                        />
                        <Icon
                          icon="entypo:cross"
                          className="absolute top-0 -right-5 text-xl cursor-pointer"
                          onClick={() => setPhoto()}
                        />
                      </div>
                    ) : (
                      <Icon
                        icon="ic:round-account-circle"
                        className="text-9xl cursor-pointer"
                      />
                    )}
                  </label>
                  <input
                    type="file"
                    id="file-input"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => setPhoto(e.target.files[0])}
                  />
                </div>
              </div>
              <div className="lg:grid grid-cols-2 gap-y-5 justify-end items-center py-5">
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                    required
                    {...register("name")}
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Email Address</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                    required
                    {...register("email")}
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Date of Birth</span>
                  </label>
                  <input
                    type="date"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                    required
                    max={new Date().toISOString().split("T")[0]}
                    {...register("dob")}
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Designation</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                    required
                    {...register("designation")}
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Location</span>
                  </label>
                  <select
                    className="select select-bordered"
                    defaultValue=""
                    {...register("location")}
                  >
                    <option disabled value="">
                      Pick one
                    </option>
                    {location.map((data, index) => {
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
                    <span className="label-text">Choose user type:</span>
                  </label>
                  <div className="form-control flex-row gap-x-10">
                    <label className="label gap-x-5 cursor-pointer">
                      <span className="label-text font-medium">Company</span>
                      <input
                        type="radio"
                        name="radio-6"
                        className="radio checked:bg-red-500"
                        value="company"
                        {...register("userType")}
                      />
                    </label>
                    <label className="label gap-x-5  cursor-pointer">
                      <span className="label-text font-medium">Indiviual</span>
                      <input
                        type="radio"
                        name="radio-6"
                        className="radio checked:bg-blue-500"
                        value="indiviual"
                        checked
                        {...register("userType")}
                      />
                    </label>
                  </div>
                </div>
                {/* <div className="form-control w-full max-w-xs">
                    <label className="label">
                    <span className="label-text">Industry Category</span>
                    </label>
                    <select
                    className="select select-bordered"
                    {...register("industry")}
                    >
                    <option disabled selected>
                        Pick one
                    </option>
                    {industries.map((data, index) => {
                        return (
                        <option value={data} key={index}>
                            {data}
                        </option>
                        );
                    })}
                    </select>
                </div> */}
              </div>
              <div className="lg:grid grid-cols-1 gap-y-5 w-full py-5">
                <div className="form-control w-full mx-auto">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <textarea
                    {...register("description")}
                    className="textarea h-16"
                    minLength={100}
                    maxLength={300}
                    placeholder="Tell me about yourself..."
                    required
                  ></textarea>
                </div>
                <div className="form-control w-full mx-auto">
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
                <div className="form-control w-full mx-auto">
                  <label className="label">
                    <span className="label-text">LinkedIn URL (Optional)</span>
                  </label>
                  <input
                    type="url"
                    className="input input-bordered w-full"
                    {...register("linkedin")}
                  />
                </div>
                <div className="form-control w-full mx-auto">
                  <label className="label">
                    <span className="label-text">Twitter URL (Optional)</span>
                  </label>
                  <input
                    type="url"
                    className="input input-bordered w-full"
                    {...register("twitter")}
                  />
                </div>
                <div className="form-control w-full mx-auto">
                  <label className="label">
                    <span className="label-text">Discord URL (Optional)</span>
                  </label>
                  <input
                    type="url"
                    className="input input-bordered w-full "
                    {...register("discord")}
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <input
                  type="submit"
                  value="Next"
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
