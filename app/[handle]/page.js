import Link from "next/link"
import clientPromise from "@/lib/mongodb"
import { notFound } from "next/navigation";


export default async function Page({ params }) {
 const { handle } = await params

  if (!handle) {
    notFound()
  }

    const client = await clientPromise;
    const db = client.db("Bittree")
    const collection = db.collection("links")

  const item = await collection.findOne({ handle: handle.toLowerCase() })
if (!item){
  notFound()
}
 

  return <div className="flex min-h-screen bg-orange-500 justify-center items-start py-10">
    {item && <div className="photo flex flex-col items-center justify-center gap-3 "><img className="rounded-full h-50 w-50 cursor-pointer" src={item.pic} alt="" />
<span className="font-bold text-xl cursor-pointer">@{item.handle}</span>
<span className="desc text-lg sm:w-90 text-center  px-4">Linktree is a tool to help you share everything you are, in one simple link – making your online content more discoverable, easier to manage and more likely to convert.</span>
<div className="links flex flex-col justify-center items-center">
  {item.links.map((item, index)=>{
    return <Link key={index} href={item.link}><div className="py-4 px-2 bg-gray-100 rounded-lg my-3 sm:min-w-90 w-50 flex justify-center hover:bg-gray-200 transition ease-in-out duration-200 font-semibold shadow-lg"> 
      {item.linktext}
    </div></Link>
  })}
</div>

</div>}
  </div>
}
