import FeedbackCard from "@/components/cards/FeedbackCard";
import Link from "next/link";
import React from "react";
//show feed feedback id data
//feedback data load
const getFeedback = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_server}/api/feedback`, {
    cache: "force-cache",
    next: { revalidate: 60 },
  });
  return await res.json();
};
const FeedbackPage = async () => {
  const feedback = await getFeedback();
  // console.log(feedback);
  return (
    <div>
      <h2 className="text-2xl font-bold">{feedback.length} : feedbacks found</h2>
      <div className="my-7">
        <Link href={"/feedback/add"} className="btn ">
          Add Feedback
        </Link>
      </div>
      <div className="my-3 -space-y-52 w-full">
        {feedback.map((fd) => (
          <FeedbackCard key={fd._id} feedback={fd}></FeedbackCard>
        ))}
      </div>
    </div>
  );
};

export default FeedbackPage;
