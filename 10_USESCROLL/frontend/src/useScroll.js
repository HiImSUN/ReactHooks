import { useEffect, useState } from "react";

const useScroll = () => {
  const [state, setState] = useState({ x: 0, y: 0 });

  const onScroll = () => {
    setState({ y: window.scrollY, x: window.scrollX });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    // Cleanup function to remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return state;
};

export default useScroll;
