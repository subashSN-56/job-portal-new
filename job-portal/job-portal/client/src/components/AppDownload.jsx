<<<<<<< HEAD
// import React from 'react'
// import { assets } from '../assets/assets'

// const AppDownload = () => {
//   return (
//     <div className='container mx-auto px-4 2xl:px-20 py-20 my-8'>
//         <div className='relative bg-gradient-to-r from-violet-50 to-purple-50 p-12  sm:p-24 lg:p-32 rounded-lg'>
//             <div>
//                 <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold mb-4'>Download Mobile App For Better Experience</h1>
//                 <div className='flex gap-4 items-center mb-8'>
//                     <a className='inline-block' href='#'>
//                         <img className='h-12' src={assets.play_store} />
//                     </a>
//                     <a className='inline-block' href='#'>
//                         <img className='h-12' src={assets.app_store} />
//                     </a>
//                 </div>
//             </div>

//             <img className='absolute w-80 right-0 bottom-0 mr-32 max-lg:hidden' src={assets.app_main_img} alt="mobile app" />
//         </div>
//     </div>
//   )
// }

// export default AppDownload


import React from 'react';
import subash from '../assets/me1.png';
import Roshan from '../assets/Rosan.png';
=======
import React from 'react';
import subash from '../assets/subash.png';
import Roshan from '../assets/Roshan.png';
>>>>>>> 8ebdb71bff096b95520acdeff529e05b48ba39d9

const AppDownload = () => {
    const [tooltip, setTooltip] = React.useState({
        visible: false,
        x: 0,
        y: 0,
        text: '',
    });

    const wrapperRef = React.useRef(null);

    const testimonials = [
        {
            name: 'SUBASH D',
            title: 'Full Stack Engineer , Founder of QuickAI',
           message:
  'I am a Full Stack Engineer who loves turning ideas into real-world applications with seamless user experience and powerful backend logic.',
            image: subash,
        },
        {
            name: 'Kiruthick Roshan A',
            title: 'Frontend Developer , Co-Founder of QuickAI',
            message:
  'Frontend Developer skilled in building responsive, user-friendly interfaces using modern technologies and best UI/UX practices.',
            image: Roshan,
        },
<<<<<<< HEAD
   
=======
>>>>>>> 8ebdb71bff096b95520acdeff529e05b48ba39d9
    ];

    const handleMouseMove = (e, index) => {
        if (!wrapperRef.current) return;
        const bounds = wrapperRef.current.getBoundingClientRect();
        setTooltip({
            visible: true,
            x: e.clientX - bounds.left + 8,
            y: e.clientY - bounds.top + 8,
            text: testimonials[index].name,
        });
    };

    const handleMouseLeave = () => {
        setTooltip({ ...tooltip, visible: false });
    };

    return (
        <div ref={wrapperRef} className="relative">
            <h1 className="text-center text-4xl font-bold text-gray-900">QuickAI Founder's</h1>
            <p className="text-center text-gray-500 mt-1">
                QuickAI is a powerful platform designed to simplify development and deliver intelligent, scalable solutions.
            </p>

            {/* Global Tooltip */}
            {tooltip.visible && (
                <span
                    className="absolute px-2.5 py-1 text-sm rounded bg-indigo-500 text-white pointer-events-none z-50"
                    style={{
                        top: tooltip.y,
                        left: tooltip.x,
                        transition: 'all 0.2s ease-out',
                    }}
                >
                    {tooltip.text}
                </span>
            )}

            <div className="flex flex-wrap items-center justify-center gap-6 py-16">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        onMouseMove={(e) => handleMouseMove(e, index)}
                        onMouseLeave={handleMouseLeave}
                        className="relative border border-gray-200 rounded-lg overflow-hidden max-w-sm hover:shadow-lg transition-shadow duration-300"
                    >
                        <div className="flex flex-col items-center justify-center p-8 text-center">
                            <div className="mb-4 text-gray-500">
                                <h3 className="text-lg font-semibold text-gray-900"> 💫 Passionate about coding 💛</h3>
                                <p className="my-4 text-sm line-clamp-3">{testimonial.message}</p>
                            </div>
                            <div className="flex items-center justify-center">
                                <img
                                    className="rounded-full w-9 h-9"
                                    src={testimonial.image}
                                    alt={`${testimonial.name} profile`}
                                    aria-label={`${testimonial.name}, ${testimonial.title}`}
                                />
                                <div className="space-y-0.5 font-medium text-left ml-3">
                                    <p>{testimonial.name}</p>
                                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AppDownload;