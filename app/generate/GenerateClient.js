"use client"

import React from 'react'
import { useState, useEffect } from 'react';
 import { ToastContainer, toast } from 'react-toastify';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

const Generate = () => {
const searchParams = useSearchParams()
  
const router = useRouter();
  const [links, setlinks] = useState([{link: "", linktext: "", isSaved: false}])
const [handle, sethandle] = useState("")
const [pic, setpic] = useState("")
  const [showProfileOption, setShowProfileOption] = useState(false) // NEW

const handlechange = (index, link, linktext) => { 
setlinks((initiallinks)=>{
 return initiallinks.map((item, i)=>{
  if (i ===index){
return {...item, link, linktext}
  }
  else{
    return item
  }
})
})}

  // Pre-fill handle from search params
  useEffect(() => {
    const h = searchParams.get("handle")
    if (h) sethandle(h)
  }, [searchParams])

// React.useEffect(() => {
//   const h = searchParams.get("handle")
//   if (h) sethandle(h)
// }, [searchParams])



const toggleSave = (index) => {
  const item = links[index] // read from state directly

  if (!item.isSaved && (!item.link.trim() || !item.linktext.trim())) {
    toast.error("Fill both fields before saving")
    return // do not update state
  }

  // Now safe to update state
  setlinks(prev =>
    prev.map((it, i) =>
      i === index
        ? { ...it, isSaved: !it.isSaved }
        : it
    )
  )
}


const deletelink = (index) => {
  setlinks(prev => {
    if (prev.length === 1) {
      // reset last remaining row
      return [{ link: "", linktext: "", isSaved: false }]
    }
    return prev.filter((_, i) => i !== index)
  })
}


const addlink = () => { 
  setlinks(links.concat([{link: "", linktext: "", isSaved: false}]))
}


  const submitlinks = async (links, handle, pic)=>{
 const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");


// Check handle and pic
if (!handle.trim()) {
    toast.error("Please enter your handle!")
    return
  }
if (!pic.trim()) {
    toast.error("Please enter your picture!")
    return
  }


  // Check links: no empty fields allowed
  const hasEmpty = links.some(
    item => !item.link.trim() || !item.linktext.trim()
  )

  if (hasEmpty) {
    toast.error("Please fill in all link and link text fields before submitting")
    return
  }

  const cleanedLinks = links.map(({ link, linktext }) => ({
  link,
  linktext
}))
  // If everything is fine, send to backend
const raw = JSON.stringify({
  "links": cleanedLinks,
  "handle": handle,
  "pic": pic
});

console.log(raw)

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

  try {
    const r = await fetch("/api/generate", requestOptions)
    const result = await r.json()


    if (result.success) {
      toast.success(result.message)

      // Show the "View Profile" button
      setShowProfileOption(true)

      
  
      // Optional: clear form
      setpic("")
      setlinks([{ link: "", linktext: "", isSaved: false }])
    } else {
      toast.error(result.message)
    }
  } catch (err) {
  console.error("FETCH ERROR:", err)
  toast.error(err.message || "Something went wrong")
}

  }
  

  return (
    <div className='bg-lime-400 min-h-screen lg:grid lg:grid-cols-2 flex flex-col'>
        
      <div className="col1 flex justify-center items-center flex-col gap-10 text-gray-900">
<h1 className='md:text-5xl text-3xl font-bold mt-30 text-center px-10'>Create your Bittree</h1>
<div className='flex flex-col gap-4 items-start'>


<div className='flex flex-col gap-2 mx-auto lg:mx-0 lg:w-full w-80'>
    <h2 className='text-xl font-semibold'>Step 1: Claim your Handle</h2>
    <div className="mx-4">
     <input value={handle || ""} onChange={e=>{sethandle(e.target.value)}} className='bg-white rounded-full px-4 py-3 lg:w-auto w-[90%]' type="text" placeholder='Choose a Handle'/>
    </div>
</div>
  

<div className='flex flex-col gap-2 lg:mx-0 mx-auto lg:w-full w-80'>
     <h2 className='text-xl font-semibold'>Step 2: Add Links</h2>
     {links && links.map((item, index)=>{
      return <div key={index} className="lg:mx-4 flex gap-2 flex-col xl:flex-row">

        <div className='flex gap-2 flex-col lg:flex-row'>
  <input value={item.link || ""} disabled={item.isSaved} onChange={e=>{handlechange(index, e.target.value, item.linktext)}} className={`rounded-full lg:w-auto w-[90%] px-4 py-3 ${
    item.isSaved ? "bg-gray-200" : "bg-white"
  }`} type="text" placeholder='Enter link'/>
    <input value={item.linktext || ""} disabled={item.isSaved} onChange={e=>{handlechange(index,item.link, e.target.value)}} className={`rounded-full px-4 lg:w-auto w-[90%] py-3 ${
      item.isSaved ? "bg-gray-200" : "bg-white"
    }`} type="text" placeholder='Enter link text'/>
    </div>
      
            {/* Save / Edit — ALWAYS visible */}
            <div className='flex gap-2'>
    <button
      onClick={() => toggleSave(index)}
      disabled={!item.link.trim() || !item.linktext.trim()}
      className={`px-4 py-2 rounded-lg font-semibold ${item.isSaved ? "bg-green-500 cursor-pointer hover:bg-green-600" : "bg-cyan-400 cursor-pointer hover:bg-cyan-500"}`}      
      >
      {item.isSaved ? "Edit" : "Save"}
    </button>

    {/* Delete — allowed unless it's the only row */}
    <button
      onClick={() => deletelink(index)}
      disabled={links.length === 1}
      className={`px-4 py-2 rounded-lg font-semibold ${
        links.length === 1
        ? "bg-gray-300 cursor-not-allowed"
        : "bg-red-400 cursor-pointer hover:bg-red-500"
      }`}
      >
      Delete
    </button>
      </div>

   
     </div>
     })}

     <button onClick={()=>{addlink()}} className='rounded-lg p-3 bg-fuchsia-300 w-fit lg:mx-4 hover:bg-fuchsia-400 cursor-pointer font-semibold transition ease-in-out duration-200 px-6 mx-auto'>+ Add Link</button>
</div>
 
<div className='flex flex-col gap-2 lg:mx-0 mx-auto lg:w-auto w-80'>
    <h2 className='text-xl font-semibold'>Step 3: Add Profile picture & Finalize</h2>
    <div className="mx-4 flex flex-col gap-2">
    <input value={pic} onChange={e=>{setpic(e.target.value)}} className='bg-white rounded-full px-4 lg:w-auto w-[90%] py-3' type="text" placeholder='Enter link to your Picture'/>
    <button disabled={handle ==="" || pic==="" || links[0].linktext===""} onClick={()=>{submitlinks(links, handle, pic)}} className='disabled:bg-gray-400 rounded-lg p-3 bg-fuchsia-300 hover:bg-fuchsia-400 cursor-pointer w-fit font-semibold transition ease-in-out duration-200 px-6'>Create your Bittree</button>
{showProfileOption && (
  <button
    onClick={() => router.push(`/${handle.toLowerCase()}`)}
    className="rounded-lg p-3 cursor-pointer bg-green-500 hover:bg-green-600 w-fit mt-4 text-white font-semibold"
  >
    View Profile
  </button>
)}
</div>

    </div>
  <ToastContainer />
   
  
</div>

      </div>



      <div className="col2 lg:w-[95%] w-[80%] h-[90%] lg:my-auto my-10 mx-auto ">
<img className='h-full object-cover rounded-lg ' src="/koen.jpg" alt="generate ur links" />
      </div>




    </div>
  )
}

export default Generate
