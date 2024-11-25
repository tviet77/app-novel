import React from 'react';
import { Link } from 'react-router-dom';

const topNovels = [
  { id: 1, title: 'Đấu Phá Thương Khung', author: 'Thiên Tàm Thổ Đậu', cover: '/placeholder.svg?height=300&width=200', rating: 4.8 },
  { id: 2, title: 'Toàn Chức Pháp Sư', author: 'Mặc Thương Trần Đồ', cover: '/placeholder.svg?height=300&width=200', rating: 4.7 },
  { id: 3, title: 'Nguyên Tôn', author: 'Thiên Tằm Thổ Đậu', cover: '/placeholder.svg?height=300&width=200', rating: 4.6 },
  { id: 4, title: 'Đế Bá', author: 'Yếm Bút Tiêu Sinh', cover: '/placeholder.svg?height=300&width=200', rating: 4.5 },
];

const TopNovels: React.FC = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Truyện đọc nhiều</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {topNovels.map((novel) => (
          <Link key={novel.id} to={`/truyen/${novel.id}`} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <img src={novel.cover} alt={novel.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1 truncate">{novel.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{novel.author}</p>
              <div className="flex items-center mt-1">
                <span className="text-yellow-400 mr-1">★</span>
                <span className="text-sm">{novel.rating}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TopNovels;