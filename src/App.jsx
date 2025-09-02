import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useRef } from "react";
import flower from "/flower.avif";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Marquee.css'; // 自訂 CSS

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { rotation: 0 },
      {
        rotation: 180,
        ease: "none",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 w-100 text-center px-3">
      {/* Badge */}
      <div className="mb-4">
        <span className="px-3 py-1 rounded-pill text-white small">
          Hello, I'm Ilia 👋
        </span>
      </div>

      {/* Headline */}
      <h1 className="fw-light text-secondary lh-base mb-4 w-100 text-center display-3">
        <span className="fw-bold text-white">Designing for the physical world, <br />coding for the digital one
        </span>
      </h1>

      {/* Button */}
      <div className="mb-5">
        <a
          href="mailto:yourmail@example.com"
          className="btn btn-outline-light rounded-pill px-4 py-2"
        >
          Email me ↗
        </a>
      </div>

      <div className="text-center">
        <img
          ref={imgRef}
          src={flower}
          alt="Abstract Flower"
          className="img-fluid d-inline-block"
          style={{
            maxWidth: "500px",
            height: "auto",
            filter: "drop-shadow(0 0 100px rgba(255,255,255,0.1))",
          }}
        />
      </div>


      <div className="text-center px-3 py-5 bg-black">
        {/* 標題 */}
        <h2 className="fw-bold text-white mb-3">
          Design × Code: <span className="text-info">From CAD to 3D Web</span>
        </h2>

        {/* 說明文字 */}
        <p className="text-secondary mx-auto" style={{ maxWidth: "800px", fontSize: "1.1rem" }}>

          At the intersection of industrial design and web development, I don’t just build physical products — I create digital experiences. From CAD models to interactive 3D showcases, I help brands communicate their vision through design that engages, inspires, and sells.

        </p>
      </div>



      {/* Projects Section */}
      <div className="container my-5">
        <h2 className="text-white mb-4 fw-bold">My Best Projects</h2>

        <p className="text-secondary mb-5">
          Showcasing projects that blend industrial design and 3D web development —
          combining product thinking with immersive digital experiences.
        </p>

        <div className="row g-4 mb-5">
          <div className="col-md-6">
            <a href="https://trinity-bice-one.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
              <div className="p-4 bg-dark rounded shadow-sm h-100 d-flex flex-column justify-content-center align-items-center">
                <h5 className="text-white mb-2">Trinity Hi-Capa</h5>
                <p className="text-secondary">Airsoft Product Design</p>
              </div>
            </a>
            <p className="text-secondary mt-2">Industrial Design × 3D Web Development</p>
          </div>

          <div className="col-md-6">
            <a href="https://mouse-henna.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
              <div className="p-4 bg-dark rounded shadow-sm h-100 d-flex flex-column justify-content-center align-items-center">
                <h5 className="text-white mb-2">Xoskeleton</h5>
                <p className="text-secondary">Mouse Design</p>
              </div>
            </a>
            <p className="text-secondary mt-2">Industrial Design × 3D Web Development</p>
          </div>
        </div>
      </div>






      <div className="container my-5">
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

            <h2 className="fw-light text-secondary mb-3">
              I am a <span className="fw-bold text-white">Design/Developer Hybrid</span>
            </h2>
            <p className="text-secondary mb-4">
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





      <div className="marquee-wrapper container">
        <div>
          <span>
            Industrial Design · Web Design · UI/UX Design · Full-Stack Development · Creative 3D Web Development · React Native Mobile App Development
          </span>
        </div>
      </div>
      <div className="container text-center">

      <h5 className="fw-bold text-secondary">Development</h5>
  <div className="row">
    {/* Design Tools */}
    <div className="col-md-6 mb-4">
    <div className="marquee-wrapper container">
      <p className="text-white">
        SolidWorks · Rhino · KeyShot · Blender · Figma · Photoshop · Illustrator
      </p>
    </div>
    </div>

    {/* Development Tools */}
    <div className="col-md-6 mb-4">
      <h5 className="fw-bold text-secondary">Development</h5>
      <p className="text-white">
        React.js · Three.js / React Three Fiber · Node.js · Express.js · React Native · SQL
      </p>
    </div>
  </div>
</div>


      <div className="container my-5">
        <h2 className="text-white mb-5 fw-bold text-start mt-5">My Career</h2>

        {/* Career Item: GoodCode Club */}
        <div className="row align-items-start mb-4">
          <div className="col-12 col-md-4 mb-2 mb-md-0 text-start">
            <h5 className="text-white mb-2 fw-bold">Full-stack Web Developer
            </h5>

            <h5 className="text-secondary mb-4"> GoodCode Club</h5>
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
            <h5 className="text-white mb-2 fw-bold">Industrial Designer
            </h5>
            <h5 className="text-secondary mb-4"> Modify Tech</h5>
            <p className="text-secondary">2020 – 2022</p>
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
            <p className="text-secondary">
              Completed a bachelor’s degree in Industrial Design, developing a strong
              foundation in product design, ergonomics, and CAD modeling while
              participating in hands-on studio and research projects.
            </p>
          </div>
        </div>
        <hr className="border-secondary" />

      </div>



    </div >
  );
}
