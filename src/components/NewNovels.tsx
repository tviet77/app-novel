import React from 'react';
import { Link } from 'react-router-dom';

const newNovels = [
  { id: 1, title: 'Vạn Cổ Thần Đế', author: 'Phi Thiên Ngư', cover: '/placeholder.svg?height=300&width=200', genre: 'Tiên Hiệp' },
  { id: 2, title: 'Đô Thị Chí Tôn', author: 'Mặc Hương Đồng Khứu', cover: '/placeholder.svg?height=300&width=200', genre: 'Đô Thị' },
  { id: 3, title: 'Trọng Sinh Đô Thị Tu Tiên', author: 'Lục Đạo Trọng Sinh', cover: '/placeholder.svg?height=300&width=200', genre: 'Tu Tiên' },
  { id: 4, title: 'Tối Cường Thần Thoại Đế Hoàng', author: 'Thần Đọa Trần Uyên', cover: '/placeholder.svg?height=300&width=200', genre: 'Huyền Huyễn' },
];

const NewNovels: React.FC = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Truyện mới đăng</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {newNovels.map((novel) => (
          <Link key={novel.id} to={`/truyen/${novel.id}`} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <img src={novel.cover} alt={novel.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1 truncate">{novel.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{novel.author}</p>
              <span className="text-xs bg-primary text-white px-2 py-1 rounded-full mt-2 inline-block">{novel.genre}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default NewNovels;