import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { cpp } from "@codemirror/lang-cpp";
import "codemirror/theme/monokai.css";
import "./Trick.css";
import axios from "axios";
import moment from "moment";

function Trick(props) {
  const [code, setCode] = useState(props.code);
  const [output, setOutput] = useState("");
  //const [language,setLanguage] = useState("py");
  const [status, setStatus] = useState("");
  const [jobId, setJobId] = useState("");
  const [jobDetails, setJobDetails] = useState(null);

  const trick_heading = props.trick_heading;
  const trick_desc = props.trick_desc;

  const renderTimeDetails = () => {
    if (!jobDetails) {
      return "";
    }
    let result = "";
    let { submittedAt, completedAt, startedAt } = jobDetails;
    submittedAt = moment(submittedAt).toString();

    // Uncomment the below line to display submitted time in output.
    //result += `Submitted At: ${submittedAt}`;
    if (!completedAt || !startedAt) {
      return result;
    }
    const start = moment(startedAt);
    const end = moment(completedAt);
    const executionTime = end.diff(start, "seconds", true);
    result += `Execution Time: ${executionTime}s`;

    return result;
  };

  const handleSubmit = async () => {
    const payload = {
      language: "cpp",
      code,
    };
    try {
      setJobId("");
      setStatus("");
      setOutput("");
      setJobDetails(null);
      const { data } = await axios.post("http://localhost:5000/run", payload);
      //console.log(data);
      setJobId(data.jobId);
      let intervalId;

      intervalId = setInterval(async () => {
        const { data: dataRes } = await axios.get(
          "http://localhost:5000/status",
          { params: { id: data.jobId } }
        );
        const { success, job, error } = dataRes;
        if (success) {
          const { status: jobStatus, output: jobOutput } = job;
          setStatus(jobStatus);
          setJobDetails(job);
          if (jobStatus === "pending") return;
          setOutput(jobOutput);
          clearInterval(intervalId);
        } else {
          setStatus("Error: Please retry!");
          console.error(error);
          clearInterval(intervalId);
          setOutput(error);
        }
        //console.log(dataRes);
      }, 1000);
    } catch ({ response }) {
      if (response) {
        const errMsg = response.data.err.stderr;
        setOutput(errMsg);
      } else {
        setOutput("Error connecting to the server.");
      }
    }
  };
  return (
    <>
      <div className="editor-container">
        <h3>{trick_heading}</h3>
        <p>{trick_desc}</p>
        <CodeMirror
          value={code}
          height="200px"
          width="80%"
          theme="dark"
          //options={{ lineNumbers: false, theme: "monokai" }}
          extensions={[python(), cpp()]}
          onChange={(value, viewUpdate) => {
            setCode(value);
          }}
        />
      </div>
      <div className="run-btn">
        <button onClick={handleSubmit}>Run</button>
        <p>{status}</p>
        <p>{jobId && `JobID: ${jobId}`}</p>
        <p>{renderTimeDetails()}</p>
        <p>{output}</p>
      </div>
    </>
  );
}

export default Trick;
