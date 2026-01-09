import clientPromise from "@/lib/mongodb";

export async function POST(request) {
    const body = await request.json()
 const { handle, links, pic } = body

    const client = await clientPromise;
    const db = client.db("Bittree")
    const collection = db.collection("links")
const normalizedHandle = handle.toLowerCase()
  // 1. Check first
  const existing = await collection.findOne({ handle: normalizedHandle})
  if (existing) {
    return Response.json({
      success: false,
      result: null,
      message: "This Bittree already exists!",
      error: true
    })
  }

   const result = await collection.insertOne ({
    handle,
    links,
    pic,
    createdAt: new Date()
   })
    
   
  return Response.json({success: "true",result: result, message: 'Your Bittree has been Generated. Enjoy!', error: false })
}
