import React, {useState,useEffect} from 'react';
import { FaAngleUp} from "react-icons/fa";
import { TopBtn } from './styles';


const ScrollTop = () =>{

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 100){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 100){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };
  useEffect(()=>{
    window.addEventListener('scroll', checkScrollTop)
  },[showScroll])
 

  return (
        <TopBtn className="scrollTop" onClick={scrollTop} display= {showScroll ? 'flex' : 'none'}>
          <FaAngleUp size={30} color='white'/>
        </TopBtn>
  );
}

export default ScrollTop;