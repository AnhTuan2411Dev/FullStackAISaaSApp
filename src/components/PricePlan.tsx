import React from 'react';
import { PricingTable } from '@clerk/clerk-react';

const PricePlan: React.FC = () => {
    return (
        <div className="max-w-2xl mx-auto z-20 my-30">
            <div className="text-center">
                <h2 className="text-slate-700 text-[42px] font-semibold">Chọn Gói Của Bạn</h2>
                <p className="text-gray-500 max-w-lg mx-auto">
                    Bắt đầu miễn phí và mở rộng quy mô khi bạn phát triển. Tìm gói hoàn hảo cho
                    nhu cầu tạo nội dung của bạn.
                </p>
            </div>
            <div className='mt-14 max-sm:mx-8'>
                <PricingTable />
            </div>
        </div>
    );
};

export default PricePlan;
