import React, { useState, useEffect } from 'react';
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { AcademicCapIcon } from '@heroicons/react/24/outline';

const slides = [
  {
    id: 1,
    title: 'Đấu La Đại Lục',
    description: 'Hành trình trở thành Đấu Thánh của Đường Tam',
    image: '/placeholder.svg?height=400&width=800',
  },
  {
    id: 2,
    title: 'Tôi Thăng Cấp Một Mình',
    description: 'Cuộc phiêu lưu của người chơi cô độc trong game thực tế ảo',
    image: '/placeholder.svg?height=400&width=800',
  },
  {
    id: 3,
    title: 'Đế Bá',
    description: 'Hành trình của Mạc Phàm trong thế giới phép thuật',
    image: '/placeholder.svg?height=400&width=800',
  },
];

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[400px] overflow-hidden rounded-xl mb-8">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={slide.image} alt={slide.title} className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
          <div className="absolute bottom-8 left-8 text-white max-w-lg">
            <h2 className="text-3xl font-bold mb-2">{slide.title}</h2>
            <p className="mb-4">{slide.description}</p>
            <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors">
              Đọc ngay
            </button>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
      >
        <AcademicCapIcon className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
      >
        <AcademicCapIcon className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Slider;