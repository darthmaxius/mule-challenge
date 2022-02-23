import React from "react";

export default function Textarea({ hanlderApp, className }) {
  function setValueInHandler(e) {
    hanlderApp(e.target.value);
  }

  return <textarea className={className} onChange={setValueInHandler} />;
}
