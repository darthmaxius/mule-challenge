import React, { useState } from "react";
import ReactFlow from "react-flow-renderer";
import TextArea from "./components/textarea";
import Button from "./components/button";

import "./App.scss";

export default function App() {
  const [elements, setElements] = useState([]);
  const [textAreaValue, setTextAreaValue] = useState("");
  const [resume, setResume] = useState([]);

  return (
    <div className="layout">
      <div className="layout-panel">
        <div className="layout-panel__inputs">
          <TextArea
            className="layout-panel__inputs layout-panel__inputs-textarea"
            hanlderApp={setTextAreaValue}
          />
          <Button
            className="layout-panel__inputs layout-panel__inputs-button"
            textAreaValue={textAreaValue}
            setElementsHandler={setElements}
            setResumeHandler={setResume}
          >
            Draw
          </Button>
        </div>
        {resume.length > 0 && (
          <div className="layout-panel__resume">
            <h2 className="layout-panel__resume-title">Resume</h2>
            <ul className="layout-panel__resume-list">
              {resume.map((line, key) => (
                <li key={key}>
                  {line.text} <b>{line.validated}</b>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="layout-graph">
        <ReactFlow elements={elements} />
      </div>
    </div>
  );
}
