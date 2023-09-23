import React, { useEffect, useState } from "react";
import { Chat } from "./chat-support-widget/Chat";
import { ChatLogo } from "./chat-support-widget/ChatLogo";
import { StaticConversation } from "./chat-support-widget/chat/StaticConversation";

export const ChatSupport = () => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    name: "",
    email: "",
  });
  const [status, setStatus] = useState({
    nameStatus: null,
    emailStatus: null,
  });
  const [conversation, setConversation] = useState([]);
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
    setData({ ...data, [stts.replace("Status", "")]: value });
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
    if (
      status.emailStatus === "error" ||
      status.nameStatus === "error" ||
      status.nameStatus === null ||
      status.emailStatus === null
    ) {
      setStatus({
        emailStatus: status.emailStatus === null ? "error" : status.emailStatus,
        nameStatus: status.nameStatus === null ? "error" : status.nameStatus,
      });
      return;
    }

    setContent(1);
    setConversation([
      {
        id: "0",
        answer: [
          `Hi ${data.name || "Anonymous"}! Welcome to `,
          <i>The Favis Car Rentals</i>,
          " what can i do for you?",
        ],
      },
    ]);
  };

  const handleClose = () => {
    // Reset All the values
    setData({
      name: "",
      email: "",
    });
    setStatus({
      nameStatus: "success",
      emailStatus: "success",
    });
    setContent(0);
    setStep(0);
    setConversation([]);
  };

  const handlePushConversation = (id) => {
    const newConversation = StaticConversation.find((sc) => sc.id === id);
    setConversation([...conversation, newConversation]);
  };

  useEffect(() => {
    updateScroll();
  }, [conversation]);

  function updateScroll() {
    const element = document.getElementById("content");
    if (element) {
      element.scrollTop = element.scrollHeight;
    }
  }

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
                convQandA={StaticConversation}
                conversation={conversation}
                handleData={handleData}
                handlePushConversation={handlePushConversation}
                handleChangeData={handleChangeData}
                handleClose={handleClose}
                updateScroll={updateScroll}
              />
            );
          default:
            return <ChatLogo handleStep={handleStep} />;
        }
      })()}
    </div>
  );
};
