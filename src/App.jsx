import React from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  useGSAP(() => {
    gsap.to(".box", {
      x: 350,
      rotation: 180,
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div className="flex-center h-screen">
      <h1>hello gsap</h1>
    </div>
  );
};

export default App;
