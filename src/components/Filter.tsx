import React, { useState } from 'react';

const Filter: React.FC = () => {
  const [genre, setGenre] = useState('');
  const [status, setStatus] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [search, setSearch] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search logic here
    console.log({ genre, status, sortBy, search });
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-4">Tìm kiếm nâng cao</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="space-y-2">
          <label htmlFor="genre" className="block text-sm font-medium">Thể loại</label>
          <select
            id="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="w-full p-2 rounded-md bg-gray-100 dark:bg-gray-700"
          >
            <option value="">Chọn thể loại</option>
            <option value="tien-hiep">Tiên Hiệp</option>
            <option value="kiem-hiep">Kiếm Hiệp</option>
            <option value="ngon-tinh">Ngôn Tình</option>
            <option value="do-thi">Đô Thị</option>
          </select>
        </div>
        <div className="space-y-2">
          <label htmlFor="status" className="block text-sm font-medium">Trạng thái</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full p-2 rounded-md bg-gray-100 dark:bg-gray-700"
          >
            <option value="">Chọn trạng thái</option>
            <option value="dang-ra">Đang ra</option>
            <option value="hoan-thanh">Hoàn thành</option>
            <option value="tam-dung">Tạm dừng</option>
          </select>
        </div>
        <div className="space-y-2">
          <label htmlFor="sort-by" className="block text-sm font-medium">Sắp xếp theo</label>
          <select
            id="sort-by"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full p-2 rounded-md bg-gray-100 dark:bg-gray-700"
          >
            <option value="">Sắp xếp theo</option>
            <option value="moi-nhat">Mới nhất</option>
            <option value="luot-xem">Lượt xem</option>
            <option value="danh-gia">Đánh giá</option>
          </select>
        </div>
        <div className="space-y-2">
          <label htmlFor="search" className="block text-sm font-medium">Tìm kiếm</label>
          <div className="flex space-x-2">
            <input
              id="search"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Nhập tên truyện..."
              className="flex-1 p-2 rounded-md bg-gray-100 dark:bg-gray-700"
            />
            <button type="submit" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors">
              Tìm
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Filter;