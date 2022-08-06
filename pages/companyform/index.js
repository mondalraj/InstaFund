import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { industries, location } from "../../components/companyList/data";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { Confirm, Notify } from "notiflix";

export default function Companyform() {
  const [photo, setPhoto] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("formData")) {
      router.push("companyform/funding");
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
        localStorage.setItem("formData", JSON.stringify(data));
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

  return (
    <>
      <div className="justify-center flex p-10 h-full">
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
              <div className="lg:grid grid-cols-2 gap-y-5 justify-items-center py-5">
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Company name</span>
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
                    <span className="label-text">Company email</span>
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
                    <span className="label-text">Company found year</span>
                  </label>
                  <input
                    type="number"
                    placeholder="1997"
                    className="input input-bordered w-full max-w-xs"
                    required
                    {...register("founded")}
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Team Size</span>
                  </label>
                  <input
                    type="number"
                    placeholder="approx no. of employees"
                    className="input input-bordered w-full max-w-xs"
                    required
                    {...register("size")}
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Location</span>
                  </label>
                  <select
                    className="select select-bordered"
                    {...register("location")}
                  >
                    <option disabled selected>
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
                    <span className="label-text">Industry Category</span>
                  </label>
                  <select
                    className="select select-bordered"
                    {...register("category")}
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
                </div>
              </div>
              <div className="lg:grid grid-cols-1 gap-y-5 w-full py-5 ">
                <div className="form-control w-full mx-auto">
                  <label className="label">
                    <span className="label-text">Website URL</span>
                  </label>
                  <input
                    type="url"
                    placeholder="www.example.com"
                    className="input input-bordered w-full "
                    required
                    {...register("website")}
                  />
                </div>
                <div className="form-control w-full mx-auto">
                  <label className="label">
                    <span className="label-text">
                      Facebook Page URL (Optional)
                    </span>
                  </label>
                  <input
                    type="url"
                    className="input input-bordered w-full "
                    {...register("facebook")}
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
                    <span className="label-text">
                      LinkedIn Company URL (Optional)
                    </span>
                  </label>
                  <input
                    type="url"
                    className="input input-bordered w-full"
                    {...register("linkedIn")}
                  />
                </div>
                <div className="form-control w-full mx-auto">
                  <label className="label">
                    <span className="label-text">
                      Short description about your company
                    </span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full "
                    maxLength={100}
                    required
                    {...register("bio")}
                  />
                </div>
                <div className="form-control w-full mx-auto">
                  <label className="label">
                    <span className="label-text">
                      What customer problem do you solve?
                    </span>
                  </label>
                  <textarea
                    {...register("problem")}
                    className="textarea"
                    placeholder="Elaborate how customers see you as a problem solver "
                    required
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-end">
                <input
                  type="submit"
                  value="Next"
                  className="btn btn-primary  w-max"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
