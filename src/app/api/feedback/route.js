// step-3 feedback route

import { connect } from "@/app/lib/dbConnect";
import { revalidatePath } from "next/cache";
//create collection
const feedbackCollection = connect("feedbacks");
export async function GET(request) {
  //getting collection from dbConnect
  //step-1 db connect diye connect korbo and data ta thunder client hit korle ekta database create hobe
  const result = await feedbackCollection.find().toArray();
  return Response.json(result);
}

// feedback post api
export async function POST(request) {
  // thunder client post data access
  // thunder client ja kichu post korbo seta ekane access pabo

  const { message } = await request.json();

  if (!message || typeof message !== "string") {
    return Response.json(
      {
        message: "please send a message",
      },
      { status: 400 },
    );
  }

  const newFeedback = { message, date: new Date().toISOString() };
  const result = await feedbackCollection.insertOne(newFeedback);
  revalidatePath("/feedback");
  return Response.json(result);
}
