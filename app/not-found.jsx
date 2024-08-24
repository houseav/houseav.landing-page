"use client";
import React from "react";
import Button from "../components/Button";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-col space-y-4">
        <p className="text-2xl text-bold animate-pulse">404 not found</p>
        <p className="text-sm text-gray-500">
          Oh oh, the page you are searching for doesn't exist
        </p>
        <div className=" pr-5">
          <Button text="home" />
        </div>
      </div>
    </div>
  );
}
