"use client";
import { useRouter } from "next/navigation";
import React from "react";
import "../../style/app.css";
function Youtube() {
  const router = useRouter();
  const handleNavigate = () => {
    router.push("/");
  };
  return (
    <div>
      <button className="buttonbtn" onClick={handleNavigate}>
        back
      </button>
      <div>Youtube</div>
    </div>
  );
}

export default Youtube;
