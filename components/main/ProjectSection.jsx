
"use client"; 
import ProjectCard from "./ProjectCard"; 
import gemini from "@/components/assets/gemini-clone.png";
import aircanvas from "@/components/assets/aircanvas.png";
import facedet from "@/components/assets/face-detection.png";

const projects = [
  {
    title: "Gemini Clone",
    description: [
      <span key="123">
        <strong>Gemini Clone:</strong> Developed user friendly replica of the original
        platform having several functionalities.
        <br />
      </span>,
      
    ],
    link: "https://github.com/deepanshigautam/Gemini-clone",
    demo: "#",
    image: gemini,
  },
  {
    title: "Air Canvas",
    description: [
      <span key="129">
        <strong>AirCanvas Project:</strong> Developed an interactive drawing
        application utilizing OpenCV in Python.
        <br />
      </span>,
      
    ],
    link: "https://github.com/deepanshigautam/Air-canvas",
    demo: "#",
    image: aircanvas,
  },
  {
    title: "Face Detection",
    description: [
      <span key="1234">
        <strong>Face Detection App:</strong> Developed a real-time application
        using OpenCV for accurate face detection.
        <br />
      </span>,
      
    ],
    link: "#",
    demo: "#",
    image: facedet,
  },
];

export default function ProjectSection() {
  return (
    <section className="py-12 bg-gray-100 mx-4 md:mx-8 lg:mx-16">
      <div className="container mx-auto">
        <div className="flex justify-center my-5 lg:py-8">
          <div className="flex items-center">
            <span className="w-20 lg:w-24 h-[2.5px] bg-[#c0c0c0]"></span>
            <span className="relative text-black text-4xl font-bold p-2 px-5 rounded-lg">
              Projects
            </span>
            <span className="w-20 lg:w-24 h-[2.5px] bg-[#c0c0c0]"></span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-14">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <style jsx>{`
          .neuromorphic {
            background: #f0f0f0; /* Light background for neuromorphism */
            box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.2),
              /* Outer shadow */ -8px -8px 15px rgba(255, 255, 255, 0.7); /* Inner shadow */
            border-radius: 15px; /* Rounded corners */
            transition: all 0.3s ease; /* Smooth transition */
          }

          .neuromorphic:hover {
            box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2),
              /* Slight change on hover */ -4px -4px 10px
                rgba(255, 255, 255, 0.5); /* Inner shadow */
          }
        `}</style>
      </div>
    </section>
  );
}