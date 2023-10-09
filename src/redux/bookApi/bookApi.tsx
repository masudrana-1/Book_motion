import { api } from "../api/appSlice";

const bookApi = api.injectEndpoints({
    endpoints:(builder) =>({
        getBooks: builder.query({
            query: ()=>'/books'
        })
    })
})

export const {
    useGetBooksQuery
} = bookApi;