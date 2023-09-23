import React from "react";

export const ValidateProfile = ({ handleData, handleChangeData, status }) => {
  return (
    // Change React fragment to form if you there was a api involved
    <>
      <div className="flex flex-col w-full h-full">
        <i>
          Before anything else... Can we get your information so we may email
          the answers in case we are not able to respond immediately? By filling
          out this form, you are agreeing to <strong>The Favis's </strong>Terms
          of Service and Privacy Policy.
        </i>
        <div className="my-2 mt-4  flex flex-col ">
          <label className="font-semibold">
            Name{" "}
            <span className="font-light text-sm text-gray-500">(Optional)</span>
          </label>

          <input
            name="name"
            className={`w-full text-2xl p-2.5 md:text-base text-black border-2 ${
              status.nameStatus === "error" ? "border-red-700 outline-red-700" : "border-black"
            }`}
            onChange={handleChangeData}
            type="text"
          />
          {status.nameStatus === "error" ? (
            <span className="text-red-700 text-sm">Invalid Name</span>
          ) : null}
        </div>
        <div className="my-2">
          <label className="font-semibold">
            Email<span className="text-red-500">*</span>
          </label>

          <input
            name="email"
            className={`w-full text-2xl p-2.5 md:text-base text-black border-2 ${
              status.emailStatus === "error"
                ? "border-red-700 outline-red-700"
                : "border-black outline-black"
            }`}
            onChange={handleChangeData}
            type="text"
          />
          {status.emailStatus === "error" ? (
            <span className="text-red-700 text-sm">Invalid Email</span>
          ) : null}
        </div>
      </div>
      <button
        onClick={handleData}
        className="w-full rounded-lg bg-green-700 p-4 font-bold "
      >
        I Accept and Start Chat
      </button>
    </>
  );
};
