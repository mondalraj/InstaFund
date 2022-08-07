import React, { useEffect } from "react";
import { fundingTypes } from "../../components/companyList/data";
import { useForm } from "react-hook-form";
import { supabase } from "../../utils/supabaseClient";
import { useRouter } from "next/router";
import { Notify } from "notiflix";

export default function Offer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("formData")) {
      router.push("/companyform");
    }
  }, []);

  const onSubmit = async (data) => {
    const formData = JSON.parse(localStorage.getItem("formData"));
    const fundingData = JSON.parse(localStorage.getItem("fundingRound"));
    const photoName = formData.name.trim().split(" ").join("_");

    const type = formData.photo.split(";")[0].split("/")[1]; // To get the image type
    const imageBase64Str = formData.photo.replace(/^.+,/, "");
    const image = Buffer.from(imageBase64Str, "base64");
    delete formData.photo;

    const companyData = { ...formData, ...data };

    try {
      const { pic, picError } = await supabase.storage
        .from("company-logos")
        .upload(`${photoName}.${type}`, image, {
          cacheControl: "1800",
          upsert: true,
          contentType: `image/${type}`,
        });

      if (picError) throw new Error("Something wrong with upload photo");

      const { data, error } = await supabase.from("Company").insert([
        {
          ...companyData,
          logoUrl: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/company-logos/${photoName}.${type}`,
        },
      ]);

      if (error) throw new Error("Something wrong with user");

      fundingData = fundingData.map((item) => {
        return { ...item, company_id: data[0].id };
      });

      const { funds, fundError } = await supabase
        .from("Fundings")
        .insert(fundingData);

      if (fundError) throw new Error("Something went wrong with funding");

      const { user, updateError } = await supabase.auth.update({
        data: { profile_id: data[0].id },
      });

      if (updateError) throw new Error("Something went wrong with auth");

      localStorage.removeItem("formData");
      localStorage.removeItem("fundingRound");
      // router.push(`/company/${data[0].id}`);
    } catch (error) {
      Notify.failure(error.message, { position: "top-right" });
    }
  };

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
                      name="raised"
                      type="number"
                      placeholder="0.01"
                      className="input input-bordered w-full"
                      required
                      {...register("ask")}
                    />
                    <span className="btn btn-accent">tez</span>
                  </label>
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">
                      Why do you want to raise ? (Optional)
                    </span>
                  </label>
                  <textarea
                    {...register("reason")}
                    className="textarea"
                    placeholder="Elaborate your reason for raising..."
                  ></textarea>
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">
                      How much equity want to dilute ?
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      name="equity"
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
                    name="type"
                    className="select select-bordered"
                    required
                    {...register("type")}
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
