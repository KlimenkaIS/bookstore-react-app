import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchNewBooks = createAsyncThunk(
    'bookstore/fetchNewBooks',
    async function () {
        const response = await fetch('https://api.itbook.store/1.0/new')
        const data = await response.json()

        return data
    }
)

export const fetchAllBooks = createAsyncThunk (
    'bookstore/fetchAllBooks',
    async function ({searchStr, pageNmb}: {searchStr: string, pageNmb: string}, {rejectWithValue}) {
        try {
            const response = await fetch(`https://api.itbook.store/1.0/search/${searchStr}/${pageNmb}`)

            if (!response.ok) {
                throw new Error("Ошибочка вышла")
            }

            const data = await response.json()
            console.log(data)
            return data

        } catch (error) {
            return rejectWithValue((error as Error).message)
        }

    }

)

export const fetchSelectedBook = createAsyncThunk (
    'bookstore/fetchSelectedBook',
    async function (id: string | undefined, {rejectWithValue}) {
        try {
            const response = await fetch(`https://api.itbook.store/1.0/books/${id}`)

            if (!response.ok) {
                throw new Error("Ошибка выбора книги")
            }

            const data = await response.json()
            console.log(data)
            return data

        } catch (error) {
            return rejectWithValue((error as Error).message)
        }

    }

)


const bookstoreSlice = createSlice({
    name: 'bookstore',
    initialState: {
        newBooks: [],
        allBooks: [],
        selectedBook: {},
        bookSearch: '',
        currentPage: '1',
        tab: 1,
        cart: [],
        favorites: [],
        status: '',
        errors: '',
    },

    reducers: {
        setBookSearch: (state: any, action) => {
            state.bookSearch = action.payload;
        },
        setPage: (state: any, action) => {
            state.currentPage = action.payload
        },
        setTabStore: (state: any, action) => {
            state.tab = action.payload
        },
        addToCartRedux: (state: any, actinon) => {
            state.cart.push(actinon.payload)
        },
        removeFromCartRedux: (state: any, action) => {
            state.cart = state.cart.filter((item: any) => item.isbn13 !== action.payload.id)
        },
        addToFavoritesRedux: (state: any, actinon) => {
            state.favorites.push(actinon.payload)
        },
        removeFromFavoriteRedux: (state: any, action) => {
            state.favorites = state.favorites.filter((item: any) => item.isbn13 !== action.payload.id)
        }

    },

    extraReducers: (builder) => {
        builder.addCase(fetchNewBooks.fulfilled, (state: any, action) => {
            state.newBooks = action.payload
        })

        
        .addCase(fetchAllBooks.fulfilled, (state: any, action) => {
            state.status = 'resolved'
            state.allBooks = action.payload
        })
        .addCase(fetchAllBooks.rejected, (state: any, action) => {
            state.status = 'rejected'
            state.errors = action.payload
        })


        .addCase(fetchSelectedBook.fulfilled, (state: any, action) => {
            state.status = 'resolved'
            state.selectedBook = action.payload
        })
        .addCase(fetchSelectedBook.rejected, (state: any, action) => {
            state.status = 'rejected'
            state.errors = action.payload
        })
    },
})


export const { setBookSearch, setPage, setTabStore, addToCartRedux, removeFromCartRedux, addToFavoritesRedux, removeFromFavoriteRedux } = bookstoreSlice.actions;

export default bookstoreSlice.reducer