"use client";
import React from "react";
import { useRouter } from "next/navigation";
import ".././globals.css";
function FaceBook() {
  const router = useRouter();
  const handleNavigate = () => {
    router.push("/");
  };
  return (
    <div>
      <button className="buttonbtn" onClick={handleNavigate}>
        back
      </button>
      <div>FaceBook</div>
    </div>
  );
}

export default FaceBook;
