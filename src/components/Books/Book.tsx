import React from 'react';
import { IBooks } from '../../types/globaltypes';

interface BookProps extends IBooks {
  // Define any additional props specific to the Book component, if needed
}

const Book: React.FC<BookProps> = ({ tittle, author, image, publication_date, genre }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden m-4 w-80">
      <img className="w-full h-32 object-cover" src={image} alt={tittle} />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{tittle}</h2>
        <p className="text-gray-600 mb-2">Author: {author}</p>
        <p className="text-gray-600 mb-2">Publication Date: {publication_date}</p>
        <p className="text-gray-600">Genre: {genre}</p>
      </div>
    </div>
  );
};

export default Book;