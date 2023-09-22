import React, { useEffect, useState } from "react";
import { Chat } from "./chat-support-widget/Chat";
import { ChatLogo } from "./chat-support-widget/ChatLogo";

export const ChatSupport = () => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    name: "",
    email: "",
  });
  const [status, setStatus] = useState({
    nameStatus: "success",
    emailStatus: "success",
  });
  const [content, setContent] = useState(0);

  const handleStep = (stp) => {
    setStep(stp);
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validateName = (name) => {
    return name.match(/^[a-zA-Z ]{2,30}$/);
  };

  const sanitizeOnChangeData = (callback, value, stts) => {
    if (!callback(value)) {
      setStatus({ ...status, [stts]: "error" });
      return;
    }
    setStatus({ ...status, [stts]: "success" });
  };

  const handleChangeData = (newData) => {
    switch (newData.target.name) {
      case "email":
        sanitizeOnChangeData(
          validateEmail,
          newData.target.value,
          "emailStatus"
        );
        break;
      case "name":
        sanitizeOnChangeData(validateName, newData.target.value, "nameStatus");
        break;
      default:
        break;
    }
  };

  const handleData = (newData) => {
    if (status.nameStatus !== "success" && status.emailStatus !== "success")
      return;
    setData(newData);
    setContent(2);
  };

  return (
    <div
      className={`${
        step === 0
          ? "w-auto m-4 md:m-8"
          : "h-screen md:h-auto md:w-auto w-full m-0 md:m-8 p-6 md:p-0"
      } fixed bottom-0 right-0 text-xl md:text-base`}
    >
      {(() => {
        switch (step) {
          case 1:
            return (
              <Chat
                handleStep={handleStep}
                content={content}
                data={data}
                status={status}
                handleData={handleData}
                handleChangeData={handleChangeData}
              />
            );
          default:
            return <ChatLogo handleStep={handleStep} />;
        }
      })()}
    </div>
  );
};
