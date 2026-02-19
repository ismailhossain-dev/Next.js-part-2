//dynamic feedback single data
import { connect } from "@/app/lib/dbConnect";
import { feedback } from "../../route";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";
//getting database name from dbConnect
const feedbackCollection = connect("feedbacks");
export async function GET(request, { params }) {
  //this is folder id
  const { id } = await params;
  //id man 24 tar kom hoy
  if (id.length != 24) {
    return Response.json({
      status: 400,
      message: "send correct id",
    });
  }

  const query = { _id: new ObjectId(id) };
  const result = await feedbackCollection.findOne(query);

  // return DB data
  return Response.json(result || {});
}

//this is delete api
export async function DELETE(request, { params }) {
  const { id } = await params;
  //if id is less then 24 then function continue
  if (id.length != 24) {
    return Response.json({
      status: 200,
      message: "Please give me valid id",
    });
  }

  const query = { _id: new ObjectId(id) };
  //main work delete
  const result = await feedbackCollection.deleteOne(query);
  return Response.json({
    status: 200,

    result,
  });
}

//update api most important

export async function PATCH(request, { params }) {
  const { id } = await params;
  //data niye update korbo
  const { message } = await request.json();

  if (id.length != 24) {
    return Response.json({
      status: 400,
      message: "Please valid update id",
    });
  }

  //jodi use send na kore
  if (!message || typeof message !== "string") {
    return Response.json({
      status: 400,
      message: "Please send a update  message",
    });
  }

  const query = { _id: new ObjectId(id) };

  const newData = {
    $set: {
      message,
    },
  };
  const result = await feedbackCollection.updateOne(query, newData);
  // revalidatePath("/feedback");
  return Response.json(result);
}
