import React from "react";
import ReviewsPage from "./ReviewsPage";
export const metadata = {
  // title: "All Reviews",
  //moner motho tile ditesi and layout o dekabe na
  title: {
    absolute: "satiesfied users",
  },
  description: "Best FastFood in Rangamati",
};
const page = () => {
  return (
    <div>
      <ReviewsPage></ReviewsPage>
    </div>
  );
};

export default page;
