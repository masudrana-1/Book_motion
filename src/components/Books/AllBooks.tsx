import { useGetBooksQuery } from "../../redux/bookApi/bookApi";
import { IBooks } from "../../types/globaltypes";
import Book from "./Book";

const AllBooks = () => {

// Redux RTK 
const {data, isLoading, isError} = useGetBooksQuery(undefined)

console.log(data?.data)


if (isLoading) {
  return <div>Loading...</div>;
}

if (isError) {
  return <div>Error occurred while fetching data.</div>;
}

  return (
    <div className='my-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {
                data?.data && data.data.map((book: IBooks)=> <Book
                key={book._id}
                _id= {book._id}
                tittle={book.tittle}
                author={book.author}
                image={book.image}
                publication_date={book.publication_date}
                genre={book.genre}
                />)
              }
            </div>
        </div>
  );
};

export default AllBooks;
