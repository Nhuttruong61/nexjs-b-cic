"use client";
import React from "react";
import { useRouter } from "next/navigation";
import "../../style/app.css";
function Tiktok() {
  const router = useRouter();
  const handleNavigate = () => {
    router.push("/");
  };
  return (
    <div>
      <button className="buttonbtn" onClick={handleNavigate}>
        back
      </button>
      <div>Tiktok</div>
    </div>
  );
}

export default Tiktok;
