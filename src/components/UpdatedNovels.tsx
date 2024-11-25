import React from 'react';
import { Link } from 'react-router-dom';

const updatedNovels = [
  { id: 1, title: 'Vũ Động Càn Khôn', chapter: 'Chương 1500', updatedAt: '5 phút trước' },
  { id: 2, title: 'Đế Tôn', chapter: 'Chương 800', updatedAt: '10 phút trước' },
  { id: 3, title: 'Thánh Khư', chapter: 'Chương 2000', updatedAt: '15 phút trước' },
  { id: 4, title: 'Phàm Nhân Tu Tiên', chapter: 'Chương 3000', updatedAt: '20 phút trước' },
  { id: 5, title: 'Thần Đạo Đan Tôn', chapter: 'Chương 1200', updatedAt: '25 phút trước' },
];

const UpdatedNovels: React.FC = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Truyện mới cập nhật</h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        {updatedNovels.map((novel, index) => (
          <Link
            key={novel.id}
            to={`/truyen/${novel.id}`}
            className={`flex justify-between items-center p-4 ${
              index !== updatedNovels.length - 1 ? 'border-b border-gray-200 dark:border-gray-700' : ''
            }`}
          >
            <div>
              <h3 className="font-semibold">{novel.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{novel.chapter}</p>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">{novel.updatedAt}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default UpdatedNovels;