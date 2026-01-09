"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()
  const [text, settext] = useState("")
  const [current, setCurrent] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

  const createTree = () => {
  if (!text.trim()) return
  router.push(`/generate?handle=${text}`)
}

  useEffect(() => {
    const card = document.querySelector(".link-bio-animation");
    if (!card) return;

    // desktop only
    if (!window.matchMedia("(hover: hover)").matches) return;

    const handleMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateY = (x / rect.width - 0.5) * 18;
      const rotateX = (y / rect.height - 0.5) * -18;

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleLeave = () => {
      card.style.transform = "rotateX(10deg) rotateY(-12deg)";
    };

    card.addEventListener("mousemove", handleMove);
    card.addEventListener("mouseleave", handleLeave);

    return () => {
      card.removeEventListener("mousemove", handleMove);
      card.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  
    const colors = [
      "#FFD700", "#FF69B4", "#00BFFF", "#32CD32",
      "#FFA500", "#8A2BE2", "#FF4500", "#1E90FF", "#00CED1",
    ];

  // Initialize state with duplicated colors immediately
  const [bgColors, setBgColors] = useState([...colors, ...colors]);


 const slides = [
    {
      img: "/black.jpg",
      quote: `"Linktree simplifies the process for creators to share multiple parts of themselves in one inclusive link"`,
      name: "Black Goku",
      title: "Youtuber, Content Creator",
    },
    {
      img: "/porsche.jpg",
      quote: `"This simplifies the process for Anime fans to share multiple parts of themselves in one inclusive link"`,
      name: "Porsche GT",
      title: "Streamer, Gamer",
    },
    {
      img: "/madara.jpg",
      quote: `"Now car lovers simplifies the process for creators to share multiple parts of themselves in one inclusive link"`,
      name: "Madara Uchiha",
      title: "Developer, Designer",
    },
    {
      img: "/garou.jpg",
      quote: `"Cosmic Garou simplifies the process for creators to share multiple parts of themselves in one inclusive link"`,
      name: "Cosmic Garou",
      title: "Artist, Influencer",
    },
  ];

  

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

   const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

const faqs = [
    {
      question: "Do I need a website to use Linktree?",
      answer:
        "No, you don’t need a website. Linktree allows you to share multiple links through a single page hosted by Linktree.",
    },
    {
      question: "Is Linktree free?",
      answer: "Yes, Linktree has free and paid plans with additional features.",
    },
    {
      question: "Can I customize my Linktree page?",
      answer:
        "Yes, with free options and more advanced customization in the paid plan. Yes, You can made ur all links enclosed in one. This is the very important property of linktree and this is very useful that you will know in future that without it ur life will be difficult",
    },
    {
      question: "Is is beneficial?",
      answer: "Yes, You can made ur all links enclosed in one. This is the very important property of linktree and this is very useful that you will know in future that without it ur life will be difficult"
    },
     {
      question: "Is it International?",
      answer: "Yes, You can made ur all links enclosed in one. This is the very important property of linktree and this is very useful that you will know in future that without it ur life will be difficult"
    },
     {
      question: "Does everyone uses it?",
      answer: "Yes, You can made ur all links enclosed in one. This is the very important property of linktree and this is very useful that you will know in future that without it ur life will be difficult. Yes, You can made ur all links enclosed in one. This is the very important property of linktree and this is very useful that you will know in future that without it ur life will be difficult"
    },
     {
      question: "Tell me its Features.",
      answer: "Yes, You can made ur all links enclosed in one. This is the very important property of linktree and this is very useful that you will know in future that without it ur life will be difficult"
    }
  ];


  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


 


  return (
    <main>
    
      <section className="bg-lime-400 lg:min-h-screen lg:grid lg:grid-cols-2 flex flex-col">
        <div className="flex flex-col justify-center lg:ml-[5vw] gap-4 lg:mt-0 mt-40">
          <p className="text-green-800 font-bold lg:text-6xl text-3xl lg:text-start text-center px-3">
            A link in Bio built for you.
          </p>
          <p className="px-4 font-semibold text-green-800 text-lg my-4 lg:text-start text-center">
            Join 70M+ people using Linktree for their link in bio. One link to
            help you share everything you create, curate and sell from your
            Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>
          <div className="flex lg:gap-4 gap-2 lg:justify-start justify-center lg:px-0 px-2">
            <input
              className="bg-white rounded-lg p-4 px-3 w-1/2"
              type="text"
              value={text}
              onChange={(e)=>{settext(e.target.value)}}
              placeholder="link.tree"
            />
       
            <button onClick={createTree} className="rounded-full text-white bg-green-800 lg:p-4 p-1 px-6 font-semibold hover:cursor-pointer hover:bg-green-900 transition-all ease-in-out duration-200">
              Claim your Bittree
            </button>
       
          </div>
        </div>
        <div className="flex lg:justify-center  lg:mr-[7vw]">
          <section className="custom-floating-section py-10 pb-60">
            <div className="custom-floating-stack">
              {[
                "/bmw.jpg",
                "/black.mp4",
                "/porsche.jpg",
                "/landscape.jpg",
                "/nature.mp4",
                "/rtx.jpg",
                "/moon.jpg",
                "/hd.mp4",
                "/nature.jpg",
                // duplicate for seamless scroll
                "/bmw.jpg",
                "/black.mp4",
                "/porsche.jpg",
                "/landscape.jpg",
                "/nature.mp4",
                "/rtx.jpg",
                "/moon.jpg",
                "/hd.mp4",
                "/nature.jpg",
              ].map((src, i) =>
                src.endsWith(".mp4") ? (
                  <video
                     key={`${src}-${i}`}
                    className="custom-floating-card rounded-2xl"
                    src={src}
                    loop
                    muted
                    autoPlay
                    playsInline
                  />
                ) : (
                  <img
                    key={`${src}-${i}`}
                    className="custom-floating-card rounded-2xl"
                    src={src}
                    alt="card"
                  />
                )
              )}
            </div>
          </section>
        </div>
      </section>
      <section className="bg-blue-500 lg:min-h-screen lg:grid lg:grid-cols-2 items-center flex flex-col lg:gap-0 gap-10 py-10">
        <div className="img-100 lg:ml-[5vw] link-bio-animation w-embed flex justify-center items-center">
          <video
            id="customize-your-linktree"
            autoPlay
            muted
            loop
            playsInline
            poster="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/692eb9b488731835c528bb18_capture_1764669836574.webp"
          >
            <source
              src="https://assets.production.linktr.ee/static/curate/customise_your_linktree.webm"
              type="video/webm"
            />
            <source
              src="https://assets.production.linktr.ee/static/curate/customise_your_linktree.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="flex flex-col justify-center lg:mr-[5vw] gap-4">
          <p className="text-lime-400 font-bold lg:text-6xl text-3xl px-3 lg:text-start text-center">
            Create and customize your Linktree in minutes
          </p>
          <p className="px-4 text-white text-lg my-4 font-semibold lg:text-start text-center">
            Connect all your content across social media, websites, stores and
            more in one link in bio. Customize every detail or let Linktree
            automatically enhance it to match your brand and drive more clicks.
          </p>
          <div>
            <Link className="flex lg:justify-start justify-center" href={"/generate"}>
            <button className="rounded-full bg-lime-400 p-4 px-6 font-semibold hover:cursor-pointer hover:bg-lime-500 transition-all ease-in-out duration-200">
              Get Started for Free
            </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-red-700 lg:min-h-screen lg:grid lg:grid-cols-2 flex flex-col">
        <div className="flex flex-col  justify-center lg:ml-[5vw] gap-4 lg:my-0 my-10">
          <p className="text-fuchsia-300 font-bold lg:text-6xl text-3xl lg:text-start text-center px-3">
            Share your Linktree anywhere you like!
          </p>
          <p className="px-4 text-fuchsia-300 font-semibold text-lg my-4 lg:text-start text-center">
            Add your unique Linktree URL to all the platforms and places you
            find your audience. Then use your QR code to drive your offline
            traffic back to your link in bio.
          </p>

          <Link className="flex lg:justify-start justify-center" href={"/generate"}>
          <button className="rounded-full bg-fuchsia-300 p-4 px-6 font-semibold hover:cursor-pointer hover:bg-fuchsia-400 text-black transition-all ease-in-out duration-200">
            Get Started for Free
          </button>
          </Link>
        </div>

        <div className="lg:my-auto my-10 flex justify-center items-center ">
          <video className="md:h-100 md:w-100 h-70 w-70 px-auto rounded-4xl cursor-pointer hover:scale-105 transition ease-out transform" loop autoPlay muted playsInline src="/animation.mp4"></video>
        </div>
      </section>
      <section className="bg-[#e8efd6] lg:min-h-screen lg:grid lg:grid-cols-2 flex flex-col">
        <div className="flex lg:justify-start justify-center lg:mx-[5vw] gap-4 items-center">
          <img className="xl:h-150 lg:h-120 h-90"
            src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/68b80693934ab0ccd4bf7482_home-section-4.avif"
            alt="Analyze your audience and keep them engaged"
          />
        </div>

        <div className="flex flex-col justify-center items-center lg:mr-[5vw] gap-4">
          <p className="text-gray-800 font-bold lg:text-6xl text-3xl lg:text-start text-center px-3">
            Analyze your audience and keep them engaged
          </p>
          <p className="px-4 lg:text-start text-center text-gray-800 font-semibold text-lg my-4">
            Track your engagement over time, monitor revenue and learn what’s
            converting your audience. Make informed updates on the fly to keep
            them coming back.
          </p>
          <Link className="flex lg:justify-start justify-center" href={"/generate"}>
          <button className="rounded-full bg-fuchsia-300 p-4 px-6 font-semibold hover:cursor-pointer hover:bg-fuchsia-400 text-black transition-all ease-in-out duration-200 lg:mb-0 sm:mb-8 mb-5">
            Get Started for Free
          </button>
          </Link>
        </div>
      </section>

      <section className=" lg:pt-24 pt-10 text-center">
    <div>
      <span className="text-gray-800 font-bold lg:text-6xl text-3xl text-center px-4 flex flex-col">The only Link in Bio Trusted by 70M+  
        <span className="text-blue-500">
          Creators 
          </span>
      </span>
    </div>
    {/* ====== LINKTREE CAROUSEL ====== */}
  <div className="lg:mt-12 mt-8 overflow-hidden">
   <section className="carousel-horizontal">
  <div className="carousel-track">
    {[
      { src: "/bmw.jpg", username: "@BMW_guy" },
      { src: "/porsche.jpg", username: "@PORSCHE_boy" },
      { src: "/goku.jpg", username: "@goku_power" },
      { src: "/landscape.jpg", username: "@CHILL_guy" },
      { src: "/minecraft.jpg", username: "@GAMER_boy" },
      { src: "/black.jpg", username: "@goku_black" },
      { src: "/moon.jpg", username: "@MOON_itself" },
      { src: "/rtx.jpg", username: "@RTX_5090" },
      { src: "/nature.jpg", username: "@NATURE_spy" },
      // duplicate for seamless scroll
      { src: "/bmw.jpg", username: "@BMW_guy" },
      { src: "/porsche.jpg", username: "@PORSCHE_boy" },
      { src: "/goku.jpg", username: "@goku_power" },
      { src: "/landscape.jpg", username: "@CHILL_guy" },
      { src: "/minecraft.jpg", username: "@GAMER_boy" },
      { src: "/black.jpg", username: "@goku_black" },
      { src: "/moon.jpg", username: "@MOON_itself" },
      { src: "/rtx.jpg", username: "@RTX_5090" },
      { src: "/nature.jpg", username: "@NATURE_spy" },
    ].map((item, i) => (
      <div key={`${item.src}-${item.username}-${i}`}className="carousel-card-container">
        <div className="carousel-card-inner">
          <div className="carousel-card-front">
            <img
              className="carousel-card rounded-2xl cursor-pointer"
              src={item.src}
              alt={item.username}
            />
          </div>
          <div className="carousel-card-back cursor-pointer"
            style={{ background: bgColors[i] || "#ccc" }}  // fallback until client renders 
            >
            <p className="username_text">{item.username}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
  </div>
  </section>




<section className="grid grid-cols-2 gap-3 lg:py-20 py-10 lg:px-[5vw] px-[2vw]">
    
<div className="flex flex-col gap-2 "> 
  <video className="rounded-xl w-full object-cover aspect-square" autoPlay muted playsInline src="/garou.mp4"></video> 
  <video className="rounded-xl w-full object-cover  aspect-square" autoPlay muted playsInline src="/madara.mp4"></video> 
  </div>


<div className="flex flex-col gap-2">
<video className="rounded-xl w-full object-cover aspect-square"  muted playsInline autoPlay src="/aizen.mp4"></video>
<video className="rounded-xl w-full object-cover aspect-square" muted playsInline autoPlay src="/black.mp4"></video>
</div>


</section>


  
<section>
<div className="flex flex-col items-center gap-4">
  <span className="lg:text-6xl text-3xl font-bold lg:px-60 px-4 text-gray-900 lg:my-10 my-5 text-center">The fast, friendly and powerful link in bio tool.</span>
  <Link href={"/pricing"}>
    <button className="rounded-full bg-fuchsia-300 p-4 px-8 font-semibold hover:cursor-pointer hover:bg-fuchsia-400 text-black transition-all ease-in-out duration-200">
            Explore all Plans
          </button>
  </Link>
</div>
<div className="lg:mt-40 mt-15 lg:my-15 my-8"><p className="lg:text-6xl text-3xl text-center font-bold text-gray-900">As featured in...</p></div>
<div className="buttons flex flex-col gap-3 px-4">


  <div className="flex sm:gap-3 gap-2 items-center justify-center">
<button className="sm:w-55 w-70 rounded-2xl bg-gray-200 px-4 py-5"><img src="/btn1.avif" alt="img1" /></button>
<button className="sm:w-35 w-50 rounded-2xl bg-gray-200 px-4 py-2"><img className="w-45" src="/btn2.avif" alt="img2" /></button>
<button className="sm:w-35 w-50 rounded-2xl bg-gray-200 px-4 py-3"><img src="/btn3.avif" alt="img3" /></button>

  </div>

  <div className="justify-center flex items-center gap-3 mb-10">
<button className="sm:w-40 w-30 rounded-2xl bg-gray-200 px-4 py-5"><img src="/btn4.avif" alt="img4" /></button>
<button className="sm:w-40 w-30 rounded-2xl bg-gray-200 px-4 py-4"><img src="/btn5.avif" alt="img5" /></button>
   

  </div>
</div>



<div className="flex justify-center items-center py-10 flex-col "> 
  
<div className="relative lg:w-120 lg:h-120 h-80 w-80 ">
 {slides.map((slide, index) => (
   <div key={slide.img}>
          <img
            src={slide.img}
            alt={slide.name}
            className={`absolute inset-0 w-full h-full object-cover rounded-full transition-opacity duration-500 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            />
            </div>
        ))}
</div>

  <div className="text-center mt-6">
    <p className="lg:text-6xl text-3xl font-bold lg:px-30 text-center my-3 px-4 text-gray-900">{slides[current].quote}</p>
  <p className="text-gray-600 text-lg font-semibold">{slides[current].name}</p>
  <p className="text-gray-600 text-lg font-semibold">{slides[current].title}</p>

  </div>

<div className="flex items-center justify-between my-3 gap-3 lg:mb-20">
  <div onClick={prevSlide} className=" border py-3 rounded-lg px-3 hover:bg-gray-200 transition ease-in-out duration-200 cursor-pointer ">
<svg title="arrow" width="20px" height="20px" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m9.131 2-5.2 5.2H16.8v1.6H3.931l5.2 5.2L8 15.131.869 8 8 .869 9.131 2Z" fill="currentColor"></path></svg>
  </div>
  <div onClick={nextSlide} className="rotate-180 border py-3 rounded-lg px-3 hover:bg-gray-200 transition ease-in-out duration-200 cursor-pointer">
<svg title="arrow" width="20px" height="20px" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m9.131 2-5.2 5.2H16.8v1.6H3.931l5.2 5.2L8 15.131.869 8 8 .869 9.131 2Z" fill="currentColor"></path></svg>
  </div>
</div>
</div>
  </section>  


      <section className=" bg-red-700 py-10">
<p className="lg:text-6xl text-3xl text-fuchsia-200 font-bold text-center pt-10 ">Questions? Answered</p>

<div className="text-fuchsia-200 text-2xl font-semibold my-10 items-center flex flex-col gap-4 ">

  <div className="lg:w-[70%] w-[90%] mx-auto mt-10 space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={faq.question}
          className="bg-red-800 rounded-xl overflow-hidden transition-all duration-300"
        >
          {/* Question Row */}
          <div
            className="flex justify-between items-center px-8 py-1 pt-6.5 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <h4 className="text-fuchsia-200 text-2xl font-semibold">{faq.question}</h4>
            <div
              className={`text-fuchsia-200 transform transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            >
              <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 9l6 6 6-6" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Answer */}
          <div
            className={`px-8 py-1 pb-6 text-fuchsia-200 text-lg pr-12 transition-all duration-500 ${
              openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
</div>
      </section>
      <section className="bg-cyan-200 ">

        <div>
<div className="flex flex-col lg:gap-10 gap-5 lg:mb-30 mb-15">
  <p className="lg:text-6xl text-3xl font-bold text-gray-900 text-center lg:px-50 px-4 lg:mt-40 mt-15">Jumpstart your corner of the internet today</p>

<div className="flex items-center md:flex-row flex-col justify-center lg:gap-3 gap-2 px-2">
  <input onChange={(e)=>{settext(e.target.value)}} className="bg-white rounded-lg p-4 px-3 w-3/4 sm:w-2/4 lg:w-1/4" type="text" placeholder="link.tree" />
  
 <button onClick={createTree} className="rounded-full bg-lime-400 p-4 px-6 font-semibold hover:cursor-pointer hover:bg-lime-500 text-black transition-all ease-in-out duration-200 w-fit">
            Claim your Bittree
          </button>

</div>
</div>


</div>
<div className="bg-gray-500 w-full h-1"></div>
</section>
</main>
  )
}