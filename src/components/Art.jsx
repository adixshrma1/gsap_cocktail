import { useMediaQuery } from "react-responsive";
import { featureLists, goodLists } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Art = () => {

  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(()=>{
    const start = isMobile ? 'top 20%' : 'top -10%';

    const maskTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: '#art',
        start,
        end: 'bottom center',
        scrub: 1.5,
        pin: true
      }
    })

    maskTimeLine.to('.will-fade', {
      opacity: 0, stagger: 0.2, ease: 'power1.inOut'
    })
    maskTimeLine.to('.masked-img', {
      scale: 1.3, maskPosition: 'center', maskSize: '400%', duration: 1, ease: 'power1.inOut'
    })
    maskTimeLine.to('#masked-content', {
      opacity: 1, duration: 1, ease: 'power1.inOut'
    })

  })

  return (
    <div id="art" className="lg:px-[10%]">
      <div className="container mx-auto h-full pt-20">
        <h2 className="will-fade">The ART</h2>

        <div className="content">
          <ul className="will-fade space-y-4">
            {goodLists.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <img src="/images/check.png" alt="check" />
                <p>{feature}</p>
              </li>
            ))}
          </ul>

          <div className="cocktail-img">
            <img
              className="abs-center masked-img size-full object-contain"
              src="/images/under-img.jpg"
              alt="cocktail"
            />
          </div>

          <ul className="will-fade space-y-4">
            {featureLists.map((feature, index) => (
              <li key={index} className="flex items-center justify-start gap-2">
                <img src="/images/check.png" alt="check" />
                <p className="md:w-fit w-60">{feature}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="masked-container">
          <h2 className="will-fade">Sip-Worthy Perfection</h2>
          <div id="masked-content">
            <h3>Made with Craft, Poured with Passion</h3>
            <p>This isn't just a drink. It's carefully crafted moment made just for you.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
