import React from "react";
import { ValidateProfile } from "./chat/ValidateProfile";

export const Chat = ({ handleStep, content,data, handleData, handleChangeData, status }) => {
  return (
    // Header
    <div className="w-auto md:w-96 h-full max-h-full md:h-[500px] shadow-xl z-50 bg-white">
      <div className="w-auto h-20 md:h-11 bg-green-700 flex p-6 md:p-3 px-4">
        <div className="w-full flex justify-between items-center">
          <strong>Chat Support</strong>
          <div className="flex h-full">
            <div
              className="h-full cursor-pointer mx-1"
              onClick={() => {
                handleStep(0);
              }}
            >
              <svg
                className="h-full w-full"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path d="M6 11H18V13H6V11Z" fill="#000000"></path>{" "}
                </g>
              </svg>
            </div>
            <div
              className="h-full cursor-pointer"
              onClick={() => {
                handleStep(0);
              }}
            >
              <svg
                className="h-full w-full"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill="#000000"
                    d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[90%] p-4 overflow-y-auto flex flex-col justify-between">
        {(() => {
          switch (content) {
            case 1:
              return;
            default:
              return <ValidateProfile handleData={handleData} handleChangeData={handleChangeData}  status={status}/>;
          }
        })()}
      </div>
    </div>
  );
};
