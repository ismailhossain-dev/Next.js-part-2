//step-2-root route
//now I wil used as database
export const feedback = [
  {
    id: 1,
    message: "খাবার খুব মজা",
  },
  {
    id: 2,
    message: "ওয়েটার এর ব্যবহার ভাল করতে ভাল করতে হবে",
  },
];

export async function GET(request) {
  return Response.json({
    status: 200,
    message: "Yahoo. API created",
  });
}
