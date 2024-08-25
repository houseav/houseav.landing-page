"use client";
import { useEffect, useRef } from "react";
import LegalLayout from "./LegalLayout";

const Privacy = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null); // Specify HTMLDivElement

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop =
        scrollContainerRef.current.scrollHeight;
    }
  }, []);

  return (
    <LegalLayout>
      <div className="p-8 text-center space-y-5 h-screen">
        <h1 className="text-2xl font-bold">Privacy Policy</h1>
        <p className="text-xl text-bold text-gray-500">Termini e Condizioni</p>
        <div
          className="flex justify-start items-start p-10 overflow-y-auto max-h-[500px]"
          ref={scrollContainerRef}
        >
          {/* Privacy policy content */}
          Si prega di leggere attentamente i seguenti termini e condizioni di
          servizio. ...
        </div>
      </div>
    </LegalLayout>
  );
};

export default Privacy;
