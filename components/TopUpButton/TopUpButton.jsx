
"use client"
import { useState, useCallback, useEffect } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";





const TopUpButton = () =>{

    const [height, setHeight]=useState(0);
    const [scrollY, setScrollY]=useState(0);
    const [clientWindow, setClientWindow]=useState(0);

    const handleEvent= useCallback(()=>{
        setHeight(window.innerHeight);
        setScrollY(window.scrollY);
        setClientWindow(window);
    }, []);

    useEffect(()=>{
        window.addEventListener('scroll', handleEvent);
        handleEvent();
        return () =>{
            window.removeEventListener('scroll', handleEvent);
        }
    }, []);


    const showArrowTop = scrollY > height ? true: false;

    const handleClick = () =>{
          clientWindow?.scrollTo({
            top:0,
            behaviour : "smooth"
          })
    }





    return(
       <button
       onClick={handleClick}
       className={`${showArrowTop ? "fixed bottom-4  right-4 text-white  p-2 bg-blue-900 hover:bg-blue-950 rounded-full hover:-translate-y-1 hover:scale-105 z-50"  : "hidden" }`}>
             <MdKeyboardDoubleArrowUp  className="size-6 font-bold"/>

       </button>
    )
}

export default TopUpButton;