import React, { useState } from "react";
import axios from "axios";

function GetOriginalUrl() {
  const [shortUrl, setShortUrl] = useState("");
  const [originalUrl, setOriginalUrl] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    setShortUrl(event.target.value);
  };

  const handleButtonClick = async () => {
    try {
      const response = await axios.get(`http://localhost:8086/${shortUrl}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      console.log(response.data);
      setOriginalUrl(response.data);
      setError("");
    } catch (error) {
      console.log(error);
      setError("Invalid short URL!");
      setOriginalUrl("");
    }
  };

  return (
    <div className="container" style={{ backgroundColor: "violet" }}>
      <div className="header">
        <h1 className="fs-2">
          <u>Get Original URL from Short URL</u>
        </h1>
      </div>
      <div className="container center_box d-flex justify-content-center align-items-center">
        <input
          type="text"
          className="form-control form-control-lg mb-3"
          placeholder="Enter Short URL"
          value={shortUrl}
          onChange={handleInputChange}
        />
        <button
          className="btn btn-primary btn-lg"
          onClick={handleButtonClick}  >
          Get Original URL
        </button>
      </div>
      {originalUrl && (
        <div className="result mt-3">
          <h3>Original URL:</h3>
          <span>{originalUrl}</span>
        </div>
      )}
      {error && <div className="error mt-3">{error}</div>}
    </div>
  );
}

export default GetOriginalUrl;
