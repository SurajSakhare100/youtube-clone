import React, { useState } from 'react'
import Product from './Product'
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faRightFromBracket, faRightLong, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

function Coursel({num}) {
    const cards = [
        {
            id: 1,
            title: "Introduction to Web Development",
            professorName: "Dr. Sarah Johnson",
            price: "$49.99",
            img: '/Coursel Img/img1.jpg'
        },
        {
            id: 2,
            title: "Data Science Fundamentals",
            professorName: "Prof. Michael Brown",
            price: "$39.99",
            img: '/Coursel Img/img2.jpg'
        },
        {
            id: 3,
            title: "Mobile App Development Workshop",
            professorName: "Dr. Alex Rodriguez",
            price: "$49.99",
            img: '/Coursel Img/img3.jpg'
        },
        {
            id: 4,
            title: "Algorithms and Data Structures",
            professorName: "Prof. Emily Williams",
            price: "$34.99",
            img:'/Coursel Img/img4.png'
        },
        {
            id: 5,
            title: "Machine Learning Masterclass",
            professorName: "Dr. David Lee",
            price: "$59.99",
            img:'/Coursel Img/img5.jpeg'
        },
        {
            id: 6,
            title: "Digital Marketing Strategies",
            professorName: "Prof. Karen Thompson",
            price: "$44.99",
            img:'/Coursel Img/img6.jpg'
        },
        {
            id: 7,
            title: "Cybersecurity Essentials",
            professorName: "Dr. Richard Miller",
            price: "$54.99",
            img:'/Coursel Img/img7.webp'
        },
        {
            id: 8,
            title: "Blockchain Technology Explained",
            professorName: "Prof. Christopher Turner",
            price: "$39.99",
            img: '/Coursel Img/img8.jpg'
        },
        {
            id: 9,
            title: "Game Development Workshop",
            professorName: "Dr. Jessica Martinez",
            price: "$49.99",
            img: '/Coursel Img/img9.avif'
        },
        {
            id: 10,
            title: "Artificial Intelligence Foundations",
            professorName: "Prof. Benjamin Davis",
            price: "$79.99",
            img:'/Coursel Img/img10.png'
        },
    ];
    const container=useRef();
    const angle=useRef();
    const [Coursel,setcoursel]=useState(faAngleRight);
    var a=true;
    const close=()=>{
        if(a){
            container.current.style.display='none';
            a=false;
            angle.current.class='rotate-90';
        }else{
            container.current.style.display='';
            a=true;
        }
    }
    return (
        <>
            <div className='my-4 lg:mx-24 md:mx-10 '>
                <div className='flex justify-between px-[10px] cursor-pointer' onClick={()=>{close(a)}}>
                    <h1 className='font-[600]'>Online Courses {num}</h1>
                    <p className=''><FontAwesomeIcon icon={Coursel} ref={angle} className='w-100 '/></p>
                </div>
                <div ref={container} className='flex items-center justify-between gap-4 overflow-hidden overflow-x-auto scroll-smooth w-100 p-[10px]'>
                    {cards.map((c) => (
                        <Product key={c.id} title={c.title} p_name={c.professorName} price={c.price} img={c.img} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Coursel
