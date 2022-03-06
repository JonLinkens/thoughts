import React, { useRef } from "react";

import useScript from "../lib/use-script";

const Comments = ({ title }) => {
  const comment = useRef(null);

  const status = useScript({
    url: "https://utteranc.es/client.js",
    theme: "github-light",
    issueTerm: title,
    repo: "JonLinkens/thoughts",
    ref: comment,
    label: "comment",
  });

  return <div className="w-full">{<div ref={comment}></div>}</div>;
};

export default Comments;
