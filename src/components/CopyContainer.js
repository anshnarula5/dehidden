import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard/lib/Component";

const CopyContainer = () => {
  const [link, setLink] = useState("");
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    const getUrl = async () => {
      fetch("https://run.mocky.io/v3/eecc7440-7aae-4b06-9dd1-7e063dfb5b96")
        .then((response) => response.json())
        .then((data) => setLink(data.url));
    };
    getUrl();
  }, []);
  const handledCopied = () => {
      setCopied(true)
  }
  useEffect(() => {
    copied && setTimeout(() => {
      setCopied(false)
    }, 2000)
  }, [copied])
  return (
    <div className="copy-container">
      <div className="copy">
        <div className="copy-text">{link}</div>
        <CopyToClipboard text={link}>
          <button className="copy-button" onClick={handledCopied}>
            <h4 className="copy-btn1">Copy</h4>
            <h4 className="copy-btn2">Share</h4>
          </button>
        </CopyToClipboard>
      </div>
      {copied && <div className="clipboard"><h4>Copied to clipboard</h4></div>}
    </div>
  );
};

export default CopyContainer;
