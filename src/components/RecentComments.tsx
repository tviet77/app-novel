import React from 'react';
import { Link } from 'react-router-dom';

const recentComments = [
  { id: 1, user: 'NguyenVanA', avatar: '/placeholder.svg?height=40&width=40', novel: 'Đấu Phá Thương Khung', comment: 'Chương mới hay quá!', time: '5 phút trước' },
  { id: 2, user: 'TranThiB', avatar: '/placeholder.svg?height=40&width=40', novel: 'Toàn Chức Pháp Sư', comment: 'Mong chờ phần tiếp theo.', time: '10 phút trước' },
  { id: 3, user: 'LeVanC', avatar: '/placeholder.svg?height=40&width=40', novel: 'Nguyên Tôn', comment: 'Tình tiết hấp dẫn quá.', time: '15 phút trước' },
];

const RecentComments: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4">Bình luận gần đây</h2>
      {/* Rest of the component code */}
    </div>
  );
};

export default RecentComments;