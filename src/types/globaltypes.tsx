export interface IBooks {
    _id: string;
    tittle: string;
    author: string;
    image: string;
    genre: string;
    publication_date: string;
    reviews?: string[];
}