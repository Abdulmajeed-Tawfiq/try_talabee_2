// BackToTop

import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { FaArrowUp } from "react-icons/fa6";

const BackToTopButton = () => {
 const [showButton, setShowButton] = useState(false);

 useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
 }, []);

 const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
 };

 return (
    <Button className={`back-to-top ${showButton ? 'show' : 'hide'}`} onClick={scrollToTop}>
      <FaArrowUp />
    </Button>
 );
};

export default BackToTopButton;