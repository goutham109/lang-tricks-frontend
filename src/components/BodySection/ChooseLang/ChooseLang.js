import React from "react";
import "./ChooseLang.css";
import { useNavigate } from "react-router-dom";

function ChooseLang() {
  let navigate = useNavigate();
  return (
    <>
      <div className="box">
        <button
          onClick={() => {
            navigate("/");
          }}
          className="btn btn-secondary"
        >
          Python
        </button>
        <button
          onClick={() => {
            navigate("/C++");
          }}
          className="btn btn-secondary"
        >
          C++
        </button>
        <button
          onClick={() => {
            navigate("/Java");
          }}
          className="btn btn-secondary"
        >
          Java
        </button>
        <button
          onClick={() => {
            navigate("/Javascript");
          }}
          className="btn btn-secondary"
        >
          Javascript
        </button>
      </div>
    </>
  );
}

export default ChooseLang;
