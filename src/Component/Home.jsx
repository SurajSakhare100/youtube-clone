import React, { useRef,useState } from 'react'
import Choice from "./Choice.jsx"
import Coursel from "./Coursel.jsx"
import HeroInstructor from './HeroInstructor'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
function Home() {

  // const right=useRef();
  // const left=useRef();
  // const box=useRef();
  // const boxx=useRef();
  // function moveleft(){

  // }
  // function moveright(){
  //   let boxx=document.querySelectorAll('.boxx');
  //   // console.log("object")
  //   // let img=document.createElement('img');
  //   // img.src='./Hero Img/c1.jpg'
  //   box.transform='translateX(-1000px)'
  //   // box.current.append(img)
  // }
  const [currentIndex, setCurrentIndex] = useState(0);
  const images=['./Hero Img/c1.jpg','./Hero Img/c2.jpeg']
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };
  return (
    <div>
      <div className='my-4 lg:mx-24 md:mx-10 p-6 '>
        <div className='flex flex-row items-center justify-between w-100 overflow-hidden relative '>
        {images.map((image, index) => (
        <div
          key={index}
          className={index === currentIndex ? 'slide active' : 'slide'}
        >
          {index === currentIndex && (
            <img src={image} alt={`Slide ${index + 1}`} />
          )}
        </div>
      ))}
          <div className='w-[35px] h-[35px] rounded-full flex items-center justify-center shadow-lg bg-slate-100 left-2 absolute' onClick={()=>{prevSlide()}}><FontAwesomeIcon icon={faAngleLeft} /></div>
          <div  className='w-[35px] h-[35px] rounded-full flex items-center justify-center shadow-lg bg-slate-100 right-2 absolute' onClick={()=>{nextSlide()}}><FontAwesomeIcon icon={faAngleRight} /></div>
        </div>
      </div>
      <Coursel num={1} />
      <Coursel num={2} />
      <Choice />
      <HeroInstructor />
    </div>
  )
}

export default Home
