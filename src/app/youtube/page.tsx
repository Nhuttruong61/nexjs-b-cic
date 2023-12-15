"use client";
import { useRouter } from "next/navigation";
import React from "react";
import ".././globals.css";
function Youtobe() {
  const router = useRouter();
  const handleNavigate = () => {
    router.push("/");
  };
  return (
    <div>
      <button className="buttonbtn" onClick={handleNavigate}>
        back
      </button>
      <div>Youtobe</div>
    </div>
  );
}

export default Youtobe;
