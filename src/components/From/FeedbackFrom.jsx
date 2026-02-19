"use client";
import React from "react";
// most important feedback add work
const FeedbackFrom = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = e.target.message.value;
    const res = await fetch("http://localhost:3000/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });
    const data = await res.json();

    if (data.insertedId) {
      alert("success");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-5 text-center ">
        <textarea
          required
          name="message"
          className="w-xl border border-dashed "
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button className="btn block mx-auto w-md" type="submit ">
          Add
        </button>
      </form>
    </div>
  );
};

export default FeedbackFrom;
