import React from 'react';
import { Link } from 'react-router-dom';
// import { FacebookIcon, TwitterIcon, InstagramIcon } from '@heroicons/react/24/outline';
import { AcademicCapIcon } from '@heroicons/react/24/outline';


const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">NovelNest</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Trang web đọc truyện novel online hàng đầu Việt Nam.
            </p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Liên kết nhanh</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-primary">Trang chủ</Link></li>
              <li><Link to="/the-loai" className="text-sm hover:text-primary">Thể loại</Link></li>
              <li><Link to="/xep-hang" className="text-sm hover:text-primary">Xếp hạng</Link></li>
              <li><Link to="/truyen-moi" className="text-sm hover:text-primary">Truyện mới</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Điều khoản</h4>
            <ul className="space-y-2">
              <li><Link to="/dieu-khoan-su-dung" className="text-sm hover:text-primary">Điều khoản sử dụng</Link></li>
              <li><Link to="/chinh-sach-bao-mat" className="text-sm hover:text-primary">Chính sách bảo mật</Link></li>
              <li><Link to="/dmca" className="text-sm hover:text-primary">DMCA</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Kết nối với chúng tôi</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary">
                <AcademicCapIcon className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <AcademicCapIcon className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <AcademicCapIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} NovelNest. Tất cả quyền được bảo lưu.
        </div>
      </div>
    </footer>
  );
};

export default Footer;