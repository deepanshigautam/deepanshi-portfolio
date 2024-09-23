// CustomCursor.jsx
import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [cursorStyle, setCursorStyle] = useState({ top: "0px", left: "0px" });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorStyle({
        top: `${e.clientY}px`,
        left: `${e.clientX}px`,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div
        className={`custom-cursor ${isHovered ? "hovered" : ""}`}
        style={{
          position: "fixed",
          top: cursorStyle.top,
          left: cursorStyle.left,
          width: "15px",
          height: "15px",
          borderRadius: "50%",
          backgroundColor: "rgba(86, 228, 238, 0.8)", // Bright turquoise color
          boxShadow: "0 0 30px rgba(86, 228, 238, 0.5)",
          pointerEvents: "none",
          transition: "transform 0.3s ease, background-color 0.3s ease",
          transform: "translate(-50%, -50%)",
          filter: isHovered ? "blur(2px)" : "none", // Blurry effect on hover
          zIndex: 9999,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <style jsx>{`
        .custom-cursor {
          animation: cursorGlow 1.5s infinite alternate;
        }

        .custom-cursor.hovered {
          background-color: rgba(255, 62, 0, 0.9); // Change color on hover
          box-shadow: 0 0 40px rgba(255, 62, 0, 0.7); // Glow effect on hover
        }

        /* Optional: Hide default cursor on interactive elements */
        a,
        button {
          cursor: none;
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
