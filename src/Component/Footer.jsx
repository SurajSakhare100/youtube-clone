import React from 'react'

function Footer() {
    return (

        <div className='w-full h-[280px] bg-black py-8 px-14 shadow-xl'>
            <footer className="w-full h-full text-white flex flex-col justify-between">
                <ul className='w-full flex flex-row'>
                    <div className='w-1/2 h-full flex flex-row justify-between'>
                        <div className='flex flex-col'>
                            <li><a href="#">Udemy Business</a></li>
                            <li><a href="#">Teach on Udemy</a></li>
                            <li><a href="#">Get the app</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Contact us</a></li>
                        </div>
                        <div className='flex flex-col'>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Help and Support</a></li>
                            <li><a href="#">Affiliate</a></li>
                            <li><a href="#">Investors</a></li>
                        </div>
                        <div className='flex flex-col'>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Privacy policy</a></li>
                            <li><a href="#">Cookie Settings</a></li>
                            <li><a href="#">Sitemap</a></li>
                            <li><a href="#">Accessibility statement</a></li>
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <div className='w-full flex flex-row justify-end'>
                            <li className=''><a href="">
                                <button className='w-full h-full bg-white rounded-sm text-black font-bold py-1 px-2 shadow-md'>English</button></a>
                            </li>
                        </div>
                    </div>
                </ul>
                <ul className='flex flex-row justify-between items-center'>
                    <li><a href="#">Udemy</a></li>
                    <p>© 2024 Udemy, Inc.</p>
                </ul>
            </footer>
        </div>

    )
}

export default Footer
