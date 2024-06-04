import React from 'react';
import img1 from '../images/img3.avif';

const Features = () => {
    return (
        <div className='bg-white flex m-auto min-h-screen my-16'>
            <div className='m-auto w-11/12 max-w-screen-xl mt-[100px]'>
                <div className='flex flex-col md:flex-row'>
                    <div className='flex flex-col w-full md:w-[500px] mb-8 md:mb-0'>
                        <div className='flex justify-center'>
                            <img src={img1} alt="" className="h-[300px] md:h-[500px] w-[300px] md:w-[450px] rounded-[20px]" />
                        </div>
                        <div className='flex flex-col md:flex-row gap-2 md:gap-6 mt-6 mx-7'>
                            <div className='text-teal-600 text-3xl md:text-5xl font-semibold'>20% OFF</div>
                            <div className='text-black text-xl md:text-2xl'>lorem ipsum</div>
                        </div>
                    </div>
                    <div className='m-auto max-w-full md:max-w-[700px]'>
                        <div className='flex flex-col md:flex-row gap-4 md:gap-10'>
                            <div className='text-black text-4xl md:text-6xl font-semibold'>UNLEASH</div>
                            <div className='text-black text-sm md:text-[15px] max-w-full md:max-w-[500px] m-auto'>Lorem ipsumamet consectetur, adipisicing elit. Illo maiores officia dolore consequatur aspernatur.</div>
                        </div>
                        <div className='text-black text-4xl md:text-6xl font-semibold mt-4 md:mt-[20px]'>WANDERLUST WITH</div>
                        <div className='flex flex-col md:flex-row gap-4 md:gap-10 mt-4 md:mt-[20px]'>
                            <div className='text-black text-sm md:text-[15px] max-w-full md:max-w-[500px] m-auto'>Lorem ipsumamet consectetur, adipisicing elit. Illo maiores officia dolore consequatur aspernatur.</div>
                            <div className='text-black text-4xl md:text-6xl font-semibold'>UNLEASH</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;
