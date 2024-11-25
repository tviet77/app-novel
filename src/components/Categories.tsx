import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  'Tiên Hiệp', 'Kiếm Hiệp', 'Ngôn Tình', 'Đô Thị', 'Huyền Huyễn', 
  'Dị Giới', 'Võng Du', 'Khoa Huyễn', 'Hệ Thống', 'Lịch Sử'
];

const Categories: React.FC = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Danh mục</h2>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Link
            key={category}
            to={`/the-loai/${category.toLowerCase().replace(' ', '-')}`}
            className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-primary hover:text-white transition-colors"
          >
            {category}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;