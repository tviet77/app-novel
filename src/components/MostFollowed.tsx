import React from 'react';
import { Link } from 'react-router-dom';

interface Novel {
  id: number;
  title: string;
  cover: string;
  followers: number;
}

const mostFollowedNovels: Novel[] = [
  { id: 1, title: 'Đấu Phá Thương Khung', cover: 'https://i.pinimg.com/236x/01/82/54/018254ac690357e1f9d44165a343845f.jpg', followers: 100000 },
  { id: 2, title: 'Toàn Chức Pháp Sư', cover: 'https://i.pinimg.com/236x/01/82/54/018254ac690357e1f9d44165a343845f.jpg', followers: 95000 },
  { id: 3, title: 'Nguyên Tôn', cover: 'https://i.pinimg.com/236x/01/82/54/018254ac690357e1f9d44165a343845f.jpg', followers: 90000 },
  { id: 4, title: 'Đế Bá', cover: 'https://i.pinimg.com/236x/01/82/54/018254ac690357e1f9d44165a343845f.jpg', followers: 85000 },
  { id: 5, title: 'Vũ Động Càn Khôn', cover: 'https://i.pinimg.com/236x/01/82/54/018254ac690357e1f9d44165a343845f.jpg', followers: 80000 },
];

const MostFollowed: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Truyện theo dõi nhiều</h2>
      <ul className="space-y-4">
        {mostFollowedNovels.map((novel) => (
          <li key={novel.id} className="flex items-center space-x-4">
            <img
              src={novel.cover}
              alt={novel.title}
              className="w-10 h-15 object-cover rounded"
            />
            <div className="flex-1">
              <Link 
                to={`/truyen/${novel.id}`} 
                className="font-semibold text-gray-800 dark:text-white hover:text-primary dark:hover:text-primary transition-colors duration-200"
              >
                {novel.title}
              </Link>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {novel.followers.toLocaleString()} người theo dõi
              </p>
            </div>
          </li>
        ))}
      </ul>
      <Link 
        to="/xep-hang" 
        className="block text-center mt-6 text-primary hover:underline transition-colors duration-200"
      >
        Xem tất cả xếp hạng
      </Link>
    </div>
  );
};

export default MostFollowed;