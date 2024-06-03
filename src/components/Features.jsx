import React from 'react';
import img1 from '../images/img3.avif';

const Features = () => {
    return (
        <div className='bg-white flex m-auto h-screen my-16'>
            <div className='m-auto w-10/12 max-w-screen mt-[100px]'>
                <div className='flex'>
                    <div className='flex flex-col w-[500px]'>
                        <div>
                            <img src={img1} alt="" className="h-[500px] w-[450px] rounded-[20px]" />
                        </div>
                        <div className='flex gap-6 mt-6 mx-7'>
                            <div className='text-teal-600 text-5xl font-semibold'> 20% OFF</div>
                            <div className='text-black text-2xl'>lorem ipsum</div>
                        </div>
                    </div>
                    <div className='m-auto max-w-[700px]'>
                        <div className='flex gap-10'>
                            <div className='text-black text-6xl font-semibold'>UNLEASH</div>
                            <div className='text-black text-[15px] max-w-[500px] m-auto'>Lorem ipsumamet consectetur, adipisicing elit. Illo maiores officia dolore consequatur aspernatur.</div>
                        </div>
                        <div className='text-black text-6xl font-semibold mt-[20px]'>WANDERLUST WITH</div>
                        <div className='flex gap-10 mt-[20px]'>
                            <div className='text-black text-[15px] max-w-[500px] m-auto'>Lorem ipsumamet consectetur, adipisicing elit. Illo maiores officia dolore consequatur aspernatur.</div>
                            <div className='text-black text-6xl font-semibold'>UNLEASH</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;
