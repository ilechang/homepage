import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState, useRef } from "react";
import flower from "/flower.webp";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Marquee.css'; // 自訂 CSS




gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0); // ✅ 記得加這個
  const imgRef = useRef(null);
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);
  const images = [
    { src: "./30.jpg", alt: "Godzilla sketch" },
    { src: "./29.jpg", alt: "Motorbike sketch" },
  ];

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

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


  const fullText = "Industrial Designer with Production Experience";
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);


  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 50); // 打字速度 (毫秒)

    return () => clearInterval(interval);
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
              src="./profile.webp"
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
        <span className="fw-bold text-white ">From Concept to Mass Production<br />
          <div className="text-info typing-text" style={{ fontSize: "50px" }}>
            <i>{displayedText}</i>
            {!isTypingDone && <span className="cursor"></span>}
          </div>
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

        {/* 說明文字 */}
        <p className="text-white mx-auto" style={{
          maxWidth: "1100px", fontSize: "1.1rem", position: "relative",
          zIndex: 10,
        }} >

          Led production-ready product development supported by <strong>three utility patents</strong>.
          Bridging aesthetics, ergonomics, engineering, and manufacturing.
        </p>
      </div>



      {/* Projects Section */}
      <div className="container my-5" id="projects">
        <h2 className="text-white mb-4 fw-bold">My Projects</h2>


        <div className="row g-4 mb-5">
          {/* Project 1 */}
          <div className="col-md-6 mt-5" style={{ minHeight: "350px" }}>
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
                    borderRadius: "10px",
                  }}
                ></div>

                {/* 文字 */}
                <h3 className="text-white fw-bold mb-2 position-relative">
                  Trinity Hi-Capa
                </h3>
                <p className="text-white position-relative">Production Airsoft Pistol · Designed for Market Release</p>
              </div>
            </a>
            <p className="text-secondary mt-2 ">
              Industrial Design Project
            </p>
          </div>


          {/* Project 1 */}
          <div className="col-md-6 mt-5" style={{ minHeight: "350px" }}>
            <a
              href="https://split-brown-nine.vercel.app/"
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
                    borderRadius: "10px",
                  }}
                ></div>

                {/* 文字 */}
                <h3 className="text-white fw-bold mb-2 position-relative">
                  Split Hi-Capa
                </h3>
                <p className="text-white position-relative">Concept Development Based on Trinity Hi-Capa Platform</p>
              </div>
            </a>
            <p className="text-secondary mt-2 ">
              Industrial Design Project
            </p>
          </div>


          {/* Project 2 */}
          <div className="col-md-6 mt-5" style={{ minHeight: "350px" }}>
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
                    borderRadius: "10px",
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
              Industrial Design Project
            </p>
          </div>

          {/* Project 1 */}
          <div className="col-md-6 mt-5" style={{ minHeight: "350px" }}>
            <a
              href="https://config-sandy.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none project-card"
            >
              <div className="p-4 bg-dark rounded shadow-sm h-100 d-flex flex-column justify-content-center align-items-center position-relative overflow-hidden">
                {/* 背景圖片 */}
                <div
                  className="card-bg"
                  style={{
                    backgroundImage: "url('./project3.jpg')",
                    borderRadius: "10px",
                  }}
                ></div>

                {/* 文字 */}
                <h3 className="text-white fw-bold mb-2 position-relative">
                  Interactive Product Customizer
                </h3>
                <p className="text-white position-relative">Demo: Real-time customization of Trinity Hi-Capa</p>
              </div>
            </a>
            <p className="text-secondary mt-2 ">
              Digital Product Design & Development
            </p>




          </div>

          {/* Project 1 */}
          <div className="col-md-6 mt-5" style={{ minHeight: "350px" }}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setShow(true);
                setIndex(0); // 預設從第一張開始
              }}
              className="text-decoration-none project-card"
            >
              <div className="p-4 bg-dark rounded shadow-sm h-100 d-flex flex-column justify-content-center align-items-center position-relative overflow-hidden">
                <div
                  className="card-bg"
                  style={{
                    backgroundImage: "url('./30.jpg')",
                    borderRadius: "10px",
                  }}
                ></div>

                {/* 預覽文字 */}
                <h3 className="text-white fw-bold mb-2 position-relative">
                  Hand Rendering
                </h3>
                <p className="text-white position-relative">
                  Marker × Colored Pencil × Pastel
                </p>
              </div>
            </a>

            {/* Overlay (浮動視窗) */}
            {show && (
              <div
                className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-75"
                style={{ zIndex: 1050 }}
                onClick={() => setShow(false)}
              >
                <div
                  className="position-relative d-flex justify-content-center align-items-center"
                  style={{ maxWidth: "90%", maxHeight: "90%" }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* 圖片容器 (讓文字可以疊在裡面) */}
                  <div className="position-relative">
                    <img
                      src={images[index].src}
                      alt={images[index].alt}
                      className="img-fluid"
                      style={{ maxHeight: "90vh", objectFit: "contain" }}
                    />

                    {/* 疊在圖片下方的文字 */}
                    <div
                      className="position-absolute bottom-0 start-50 translate-middle-x w-100 text-center py-2"
                      style={{

                        color: index === 0 ? "white" : "black",
                        fontWeight: "bold",
                        fontSize: "1.2rem",
                      }}
                    >
                      Marker × Colored Pencil × Pastel
                    </div>
                  </div>

                  {/* Prev 按鈕 */}
                  {/* Prev 按鈕 */}
                  <button
                    onClick={handlePrev}
                    className="btn btn-light border-dark fw-bold position-absolute top-50 start-0 translate-middle-y d-flex justify-content-center align-items-center"
                    style={{
                      opacity: 0.9,
                      fontSize: "2rem",
                      width: "60px",
                      height: "60px",
                      borderWidth: "2px",
                      borderRadius: "50%",
                      padding: 0, // 移除預設 padding
                    }}
                  >
                    ‹
                  </button>

                  {/* Next 按鈕 */}
                  <button
                    onClick={handleNext}
                    className="btn btn-light border-dark fw-bold position-absolute top-50 end-0 translate-middle-y d-flex justify-content-center align-items-center"
                    style={{
                      opacity: 0.9,
                      fontSize: "2rem",
                      width: "60px",
                      height: "60px",
                      borderWidth: "2px",
                      borderRadius: "50%",
                      padding: 0,
                    }}
                  >
                    ›
                  </button>


                </div>
              </div>
            )}

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
              <span className="px-3 py-1 rounded-pill bg-dark text-light small ">
                About
              </span>
            </div>

            <h2 className="fw-light text-white  mb-3">
              I am a <span className="fw-bold text-white">Design/Developer Hybrid</span>
            </h2>
            <p className="text-white mb-4">
            With four years of professional experience in industrial design, I have developed products involving 3D printing, laser cutting, metal casting and plastic injection molding, working closely with real manufacturing constraints, tooling considerations, and production requirements. My approach balances design intent with feasibility, ensuring concepts transition smoothly into manufacturable solutions.
</p>
            <p className="text-white mb-4">
             Beyond static renderings, I create high-quality product visualization animations and develop immersive online presentations by integrating AI tools and interactive technologies — extending physical products into compelling digital experiences.
            </p>

            {/* 統計數字 */}
            <div className="row mt-3 text-white">
              <div className="col-6 col-md-4 text-end">
                <h4 className="fw-bold">3</h4>
                <p className="small text-secondary mb-0">Utility Patents</p>
              </div>

              <div className="col-6 col-md-4 text-end">
                <h4 className="fw-bold">4</h4>
                <p className="small text-secondary mb-0">Years of Experience</p>
              </div>

              <div className="col-6 col-md-4 text-end">
                <h4 className="fw-bold">10,000+</h4>
                <p className="small text-secondary mb-0">Hours of Designing</p>
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
                SolidWorks · Fusion 360 · Rhino · KeyShot · PrusaSlicer · Figma · Photoshop · Illustrator
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

      
        </div>
      </div>


   <div className="container my-5 pb-5">
  <h2 className="text-white mb-5 fw-bold text-start mt-5">My Career</h2>

  <div className="row align-items-start mb-4">
    <div className="col-12 col-md-4 mb-2 mb-md-0 text-start">
      <h5 className="text-white mb-2 fw-bold">
        Product Engineer
      </h5>

      <h5 className="text-secondary mb-4">
        PCL Graphics · Markham
      </h5>

      <p className="text-secondary">
        2025/10 – 2026/02
      </p>
    </div>

    <div className="col-12 col-md-7 ms-auto text-start">
      <p className="text-secondary">
        At PCL Graphics, I primarily developed cosmetic retail displays for Estée Lauder. I created 3D models for prototyping and production, preparing files for 3D printing and optimizing print parameters in PrusaSlicer to balance quality, structural integrity, and production efficiency.

I also produced detailed engineering drawings for CNC routing and laser cutting processes to support fabrication.
      </p>
    </div>
  </div>
  {/* Career Item: GoodCode Club */}
  <div className="row align-items-start mb-4">
    <div className="col-12 col-md-4 mb-2 mb-md-0 text-start">
      <h5 className="text-white mb-2 fw-bold">
        Full-stack Web Developer
      </h5>

      <h5 className="text-secondary mb-4">
        GoodCode Club · Toronto
      </h5>

      <p className="text-secondary">
        2024/04 – 2025/10
      </p>
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

  {/* Career Item: Maker Lab */}
  <div className="row align-items-start mb-4">
    <div className="col-12 col-md-4 mb-2 mb-md-0 text-start">
      <h5 className="text-white mb-2 fw-bold">
        Maker Lab Technician
      </h5>

      <h5 className="text-secondary mb-4">
        George Brown College · Toronto
      </h5>

      <p className="text-secondary">
        2023 – 2024
      </p>
    </div>

    <div className="col-12 col-md-7 ms-auto text-start">
      <p className="text-secondary">
        I operated, managed, and maintained FDM and SLA 3D printers as well as laser cutters in the Maker Lab. I also provided professional guidance to
        optimize 3D models, achieving lower printing costs, greater structural strength,
        and enhanced aesthetics.
      </p>
    </div>
  </div>

  <hr className="border-secondary" />

  {/* Career Item: Modify Tech */}
  <div className="row align-items-start mb-4">
    <div className="col-12 col-md-4 mb-2 mb-md-0 text-start">
      <h5 className="text-white mb-2 fw-bold">
        Industrial Designer
      </h5>

      <h5 className="text-secondary mb-4">
        Modify Tech · Taiwan
      </h5>

      <p className="text-secondary">
        2020 – 2022
      </p>
    </div>

    <div className="col-12 col-md-7 ms-auto text-start">
      <p className="text-secondary">
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
