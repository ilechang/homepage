import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState, useRef } from "react";
import flower from "/flower.avif";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Marquee.css'; // 自訂 CSS

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0); // ✅ 記得加這個
  const imgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // 🔻 往下滾 → 隱藏 nav
        setShowNav(false);
      } else {
        // 🔺 往上滾 → 顯示 nav
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);


  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    // 第一段：只旋轉
    tl.to(imgRef.current, { rotation: 90, opacity: 1, scale: 1, ease: "none" });

    // 第二段：繼續旋轉，同時放大並開始淡出
    tl.to(imgRef.current, { rotation: 180, opacity: 0, scale: 2, ease: "none" });
  }, []);


  return (
    <div className="w-100 text-center px-3 pt-5">

      {/* 🔝 Navigation */}
      <nav
        className={`navbar navbar-dark bg-black fixed-top transition-nav ${showNav ? "show" : "hide"
          } d-none d-md-flex`}  // ⬅️ 這裡加上 Bootstrap 響應式顯示控制
      >
        <div className="container">
          <div className="d-flex align-items-center mb-3">
            <img
              src="./profile.jpg"
              alt="Ilia Chang"
              className="rounded-circle me-3"
              style={{ width: "40px", height: "40px" }}
            />
            <h6 className="fw-bold mb-0 text-white">Ilia Chang</h6>
          </div>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link text-white" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>




      {/* Headline */}
      <h1 className="fw-light text-white lh-base mb-4 w-100 text-center display-2 mt-5">
        <span className="fw-bold text-white ">Designing for the physical world, <br />coding for the digital one
        </span>
      </h1>


      <div className="d-flex justify-content-center align-items-center">
        <img
          ref={imgRef}
          src={flower}
          alt="Abstract Flower"
          className="img-fluid"
          style={{
            maxWidth: "500px",
            height: "auto",
            filter: "drop-shadow(0 0 100px rgba(255,255,255,0.2))",
            position: "relative",
            zIndex: 0,
          }}
        />
      </div>

      <div className="text-center px-3 py-5 bg-black" >
        {/* 標題 */}
        <h2 className="fw-bold text-white mb-3 " style={{
          position: "relative",
          zIndex: 10,
        }}>
          Design × Code: <span className="text-info">From CAD to 3D Web</span>
        </h2>

        {/* 說明文字 */}
        <p className="text-white mx-auto" style={{
          maxWidth: "800px", fontSize: "1.1rem", position: "relative",
          zIndex: 10,
        }} >

          At the intersection of industrial design and web development, I don’t just build physical products — I create digital experiences. From CAD models to interactive 3D showcases, I help brands communicate their vision through design that engages, inspires, and sells.

        </p>
      </div>



    {/* Projects Section */}
<div className="container my-5" id="projects">
  <h2 className="text-white mb-4 fw-bold">My Best Projects</h2>

  <p className="text-white mb-3">
    Showcasing projects that blend industrial design and 3D web development — 
    combining product thinking with immersive digital experiences.
  </p>

  <div className="row g-4 mb-5">
    {/* Project 1 */}
    <div className="col-md-6" style={{ minHeight: "350px" }}>
      <a
        href="https://trinity-bice-one.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-decoration-none project-card"
      >
        <div className="p-4 bg-dark rounded shadow-sm h-100 d-flex flex-column justify-content-center align-items-center position-relative overflow-hidden">
          {/* 背景圖片 */}
          <div
            className="card-bg"
            style={{
              backgroundImage: "url('./trinity5.jpg')",
            }}
          ></div>

          {/* 文字 */}
          <h3 className="text-white fw-bold mb-2 position-relative">
            Trinity Hi-Capa
          </h3>
          <p className="text-white position-relative">Airsoft Product Design</p>
        </div>
      </a>
      <p className="text-secondary mt-2">
        Industrial Design × 3D Web Development
      </p>
    </div>

    {/* Project 2 */}
    <div className="col-md-6" style={{ minHeight: "350px" }}>
      <a
        href="https://mouse-henna.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-decoration-none project-card"
      >
        <div className="p-4 bg-dark rounded shadow-sm h-100 d-flex flex-column justify-content-center align-items-center position-relative overflow-hidden">
          {/* 背景圖片 */}
          <div
            className="card-bg"
            style={{
              backgroundImage: "url('./mouse.jpg')",
            }}
          ></div>

          {/* 文字 */}
          <h3 className="text-white fw-bold mb-2 position-relative">
            Xoskeleton
          </h3>
          <p className="text-white position-relative">Mouse Design</p>
        </div>
      </a>
      <p className="text-secondary mt-2">
        Industrial Design × 3D Web Development
      </p>
    </div>
  </div>
</div>





      <div className="container my-5 py-5" id="about">
        <div className="row align-items-stretch">
          {/* 左邊：圖片 */}
          <div className="col-12 col-md-4 d-flex">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-100 rounded shadow"
              style={{
                objectFit: "cover",
                height: "100%",       // 預設等高裁切
                maxHeight: "500px",   // ✅ 大螢幕時不會太大
              }}
            />
          </div>

          {/* 右邊：文字內容 */}
          <div className="col-12 ms-auto col-md-7 text-white d-flex flex-column justify-content-center p-4 text-center text-md-start">
            <div className="mb-3">
              <span className="px-3 py-1 rounded-pill bg-dark text-light small">
                About
              </span>
            </div>

            <h2 className="fw-light text-white  mb-3">
              I am a <span className="fw-bold text-white">Design/Developer Hybrid</span>
            </h2>
            <p className="text-white  mb-4">
              With a foundation in industrial design, interaction design and full-stack
              development, I bridge research, CAD modeling, rendering, and web
              technologies into one continuous workflow. My approach ensures ideas don’t
              just stay on paper — they evolve into manufacturable products and immersive
              3D experiences that deliver lasting impact.
            </p>


            {/* 統計數字 */}
            <div className="row text-center text-md-start">
              <div className="col-6 col-md-3 mb-4">
                <h4 className="fw-bold text-white">3</h4>
                <p className="small text-secondary mb-0">Design Patents</p>
              </div>
              <div className="col-6 col-md-3 mb-4">
                <h4 className="fw-bold text-white">4</h4>
                <p className="small text-secondary mb-0">Years of Experience</p>
              </div>
              <div className="col-6 col-md-3 mb-4">
                <h4 className="fw-bold text-white">10,000+</h4>
                <p className="small text-secondary mb-0">Hours of Designing</p>
              </div>
              <div className="col-6 col-md-3 mb-4">
                <h4 className="fw-bold text-white">10,000+</h4>
                <p className="small text-secondary mb-0">Hours of Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>





      <div className="container text-center my-5" >

        {/* 🔝 Summary / Headline */}
        <h4 className="fw-bold text-secondary  text-white ">

          From CAD to Code: Bringing Products into Interactive Web Experiences

        </h4>
        <hr className="border-secondary mb-3" />

        <div className="row">
          {/* Design Software */}
          <div className="col-md-6 mb-4">
            <h6 className="fw-bold text-secondary  mb-2">Design Software</h6>
            <div className="marquee-wrapper pb-0">
              <p className="text-white">
                SolidWorks · Fusion 360 · Rhino · KeyShot · Blender · Figma · Photoshop · Illustrator
              </p>
            </div>
          </div>

          {/* Prototyping & Fabrication */}
          <div className="col-md-6 mb-4">
            <h6 className="fw-bold text-secondary  mb-2">Prototyping & Fabrication</h6>
            <div className="marquee-wrapper pb-0">
              <p className="text-white">
                3D Printing · Laser Cutting · Clay Modeling · CNC Machining(Basic knowledge of G-code/M-code)
              </p>
            </div>
          </div>

          {/* Front-end Development */}
          <div className="col-md-6 mb-4">
            <h6 className="fw-bold text-secondary mb-2">Front-end Development</h6>
            <div className="marquee-wrapper pb-0">
              <p className="text-white">
                React.js · Next.js · Three.js / React Three Fiber · Tailwind / Bootstrap CSS · GSAP
              </p>
            </div>
          </div>

          {/* Back-end Development */}
          <div className="col-md-6 mb-4">
            <h6 className="fw-bold text-secondary  mb-2">Back-end Development</h6>
            <div className="marquee-wrapper pb-0">
              <p className="text-white">
                Node.js · Express.js · SQL · RESTful API · Firebase
              </p>
            </div>
          </div>

        </div>
      </div>



      <div className="container my-5 py-5">
        <h2 className="text-white mb-5 fw-bold text-start mt-5">My Career</h2>

        {/* Career Item: GoodCode Club */}
        <div className="row align-items-start mb-4">
          <div className="col-12 col-md-4 mb-2 mb-md-0 text-start">
            <h5 className="text-white mb-2 fw-bold">Full-stack Web Developer
            </h5>

            <h5 className="text-secondary mb-4"> GoodCode Club · Toronto</h5>
            <p className="text-secondary ">2024 – Present</p>
          </div>
          <div className="col-12 col-md-7 ms-auto text-start">
            <p className="text-secondary">
              At GoodCode Club, I bridge design and engineering as a full-stack web
              developer specializing in the PERN stack (PostgreSQL, Express, React,
              Node.js). Beyond building robust e-commerce platforms, I craft immersive
              3D web experiences with Three.js/React Three Fiber and extend ideas into
              mobile with React Native — delivering seamless, cross-platform digital
              solutions that engage users on every screen.
            </p>
          </div>
        </div>
        <hr className="border-secondary" />

        {/* Career Item: Modify Tech */}
        <div className="row align-items-start mb-4">
          <div className="col-12 col-md-4 mb-2 mb-md-0 text-start">
            <h5 className="text-white mb-2 fw-bold">Maker Lab Technician
            </h5>
            <h5 className="text-secondary mb-4">George Brown College · Toronto</h5>
            <p className="text-secondary">2023 – 2024</p>
          </div>
          <div className="col-12 col-md-7 ms-auto text-start">
            <p className="text-secondary">
              I operated, managed, and maintained FDM and SLA 3D printers as well as laser
              cutting machines in the Maker Lab. I also provided professional guidance to
              optimize 3D models, achieving lower printing costs, greater structural strength,
              and enhanced aesthetics.
            </p>
          </div> </div>
        <hr className="border-secondary" />

        {/* Career Item: Modify Tech */}
        <div className="row align-items-start mb-4">
          <div className="col-12 col-md-4 mb-2 mb-md-0 text-start">
            <h5 className="text-white mb-2 fw-bold">Industrial Designer
            </h5>
            <h5 className="text-secondary mb-4"> Modify Tech · Taiwan</h5>
            <p className="text-secondary">2020 – 2022</p>
          </div>
          <div className="col-12 col-md-7 ms-auto text-start">
            <p className="text-secondary ">
              At Modify Tech, I designed airsoft products with a focus on ergonomic
              optimization to ensure usability, mechanical design to ensure
              manufacturability, and cost control. I led a full-cycle pistol project
              from initial research and CAD modeling through 3D printing, CNC
              prototyping, and cost evaluation — successfully bringing the design
              into mass production. The pistol was ultimately awarded three design
              patents and exported to North American and European markets.
            </p>
          </div>
        </div>
        <hr className="border-secondary" />
      </div>



      <div className="container my-5">
        <h2 className="text-white mb-5 fw-bold text-start mt-5">My Educations</h2>

        {/* Education Item: George Brown College */}
        <div className="row align-items-start mb-4">
          <div className="col-12 col-md-4 mb-2 mb-md-0 text-start">
            <h5 className="text-white mb-2 fw-bold">Interaction Design</h5>
            <h5 className="text-secondary mb-4">George Brown College / Ontario College Advanced Diploma</h5>
            <p className="text-secondary">2023 – 2025</p>
          </div>
          <div className="col-12 col-md-7 ms-auto text-start">
            <p className="text-secondary">
              Studying at George Brown College with a focus on interaction design,
              user experience, and applied digital technologies — equipping me with
              the skills to bridge design and technology in real-world projects.
            </p>
          </div>
        </div>
        <hr className="border-secondary" />

        {/* Education Item: NTUST */}
        <div className="row align-items-start mb-4">
          <div className="col-12 col-md-4 mb-2 mb-md-0 text-start">
            <h5 className="text-white mb-2 fw-bold">Industrial Design</h5>
            <h5 className="text-secondary mb-4">
              National Taiwan University of Science and Technology / Bachelor's Degree
            </h5>
            <p className="text-secondary">2016 – 2020</p>
          </div>
          <div className="col-12 col-md-7 ms-auto text-start">
            <p className="text-secondary ">
              Completed a bachelor’s degree in Industrial Design, developing a strong
              foundation in product design, ergonomics, and CAD modeling while
              participating in hands-on studio and research projects.
            </p>
          </div>
        </div>
        <hr className="border-secondary" />

      </div>






      <footer className="bg-black text-white py-5 position-relative mt-5" id="contact">
        <h1
          className="fw-bold w-100 text-center"
          style={{
            fontSize: "clamp(4rem, 10vw, 9rem)",
            bottom: "20px",
            left: 0,
            pointerEvents: "none",
            background: "linear-gradient(180deg, #999, #333)", // 從灰到深灰
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          ILIA CHANG
        </h1>

        <div className="container mt-5">
          <div className="row">
            {/* Left Info */}
            <div className="col-md-6 mb-4">
              <div className="d-flex align-items-center mb-3">
                <img
                  src="./profile.jpg"
                  alt="Ilia Chang"
                  className="rounded-circle me-3"
                  style={{ width: "40px", height: "40px" }}
                />
                <h6 className="fw-bold mb-0">Ilia Chang</h6>
              </div>

              <p className="text-white text-start mb-0">changile010684@gmail.com</p>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ilechang/"
                target="_blank"
                rel="noopener noreferrer"
                className="d-block text-white  text-start mb-0 mt-3"
              >
                LinkedIn
              </a>

              {/* Projects Link */}
              <a
                href="#projects"
                className="d-block text-white  text-start mb-0 mt-2"
              >
                Projects
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div >
  );
}
