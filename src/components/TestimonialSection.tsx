import { dummyTestimonialData, assets } from '../assets/assets';

const TestimonialSection = () => {

    return (
        <div className='px-4 sm:px-20 xl:px-32 py-24'>
            <div className='text-center'>
                <h2 className='text-slate-700 text-[42px] font-semibold'>Được yêu thích bởi các Nhà sáng tạo</h2>
                <p className='text-gray-500 max-w-lg mx-auto'>Đừng chỉ tin lời chúng tôi. Đây là những gì người dùng của chúng tôi đang nói.</p>
            </div>
            <div className='flex flex-wrap mt-10 justify-center'>
                {dummyTestimonialData.map((testimonial, index) => (
                    <div key={index} className='p-8 m-4 max-w-xs rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition duration-300 cursor-pointer h-75 flex flex-col'>
                        <div className="flex items-center gap-1">
                            {Array(5).fill(0).map((_, index) => (
                                <img 
                                    key={index} 
                                    src={index < testimonial.rating ? assets.star_icon : assets.star_dull_icon} 
                                    className='w-4 h-4' 
                                    alt='star' 
                                />
                            ))}
                        </div>
                        <p className='text-gray-500 text-sm my-5 flex-1 overflow-hidden'>"{testimonial.content}"</p>
                        <hr className='mb-5 border-gray-300' />
                        <div className='flex items-center gap-4'>
                            <img src={testimonial.image} className='w-12 object-contain rounded-full' alt='' />
                            <div className='text-sm text-gray-600'>
                                <h3 className='font-medium'>{testimonial.name}</h3>
                                <p className='text-xs text-gray-500'>{testimonial.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TestimonialSection
