import React, { useEffect, useState } from 'react'

export const useWindowResize = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        // Cleanup function to remove the event listener
        return () => {
          window.removeEventListener('resize', handleResize);
        };
     }, [windowWidth]);

     const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

  return {windowWidth , handleResize};  
}

