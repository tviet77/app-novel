import React from 'react';
import { Link } from 'react-router-dom';

const Banner: React.FC = () => {
  return (
    <div className="relative h-[200px] rounded-xl overflow-hidden mb-8">
      <img
        src="https://blog.tuchangioi.net/content/images/size/w600/2021/03/anh-dep-3d-kiem-hiep-12banner.jpg"
        alt="Banner quảng cáo"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-white text-2xl font-bold mb-2">Khám phá thế giới truyện mới</h2>
          <Link
            to="/kham-pha"
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors"
          >
            Xem ngay
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;