import React from 'react';

const CatCard = ({ cat }) => {
  const truncateContent = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  };

  const getFirstThreeWords = (text) => {
    return text.split(', ').slice(0, 3);
  };

  return (
    <div className="cat-card bg-white text-black rounded-lg shadow-lg min-w-[300px]">
      <div className="w-full h-48 overflow-hidden rounded-t-lg">
        <img
          src={cat.image}
          alt={cat.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="pl-2 font-sans">
        <h2 className="font-semibold mb-[2px] text-[28px]">{cat.name}</h2>
        <p className="text-sm mb-2">
          <strong>Description:</strong> {cat ? truncateContent(cat.description, 20) : ''}
        </p>
        <div className="gap-7 flex">
          <p className="text-[14px] font-normal mb-2 italic"><strong>Origin:</strong></p>
          <p className='text-[14px]'>{cat.origin}</p>
        </div>
        <p className="text-sm mb-2">
          <strong>Temperament:</strong>
          <br />
          <div className="flex gap-2 mt-2">
            {getFirstThreeWords(cat.temperament).map((word, index) => (
              <span
                key={index}
                className="inline-block bg-gray-200 text-black text-xs font-medium px-3 py-1 rounded-full hover:bg-[#D482DB] cursor-pointer transition-colors"
              >
                {word}
              </span>
            ))}
          </div>
        </p>
        <div className="gap-7 flex">
          <p className="text-[14px] font-normal mb-2 italic"><strong>Lifespan:</strong></p>
          <p className='text-[14px]'>{cat.life_span}Years</p>
        </div>
        <a
          href={cat.wikipedia_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default CatCard;
