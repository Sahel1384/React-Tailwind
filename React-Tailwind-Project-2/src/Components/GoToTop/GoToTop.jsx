import { useEffect, useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleBtn = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleBtn);
    return () => window.removeEventListener("scroll", toggleBtn);
  }, []);

  const Top = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={Top}
        style={{
          position: "fixed",
          bottom: "50px",
          right: "30px",
          padding: "10px 15px",
          fontSize: "16px",
          backgroundColor: "#8b5cf6",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        <FaArrowAltCircleUp />
      </button>
    )
  );
}

export default GoToTop;
