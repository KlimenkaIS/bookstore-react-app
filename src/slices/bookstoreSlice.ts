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
    async function (searchStr, {rejectWithValue}) {
        try {
            const response = await fetch(`https://api.itbook.store/1.0/search/${searchStr}}`)

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


const bookstoreSlice = createSlice({
    name: 'bookstore',
    initialState: {
        newBooks: [],
        allBooks: [],
        bookSearch: '',
        status: null,
        error: null,
    },

    reducers: {
        setBookSearch: (state, action) => {
            state.bookSearch = action.payload;
        }
    },

    extraReducers: (builder) => {
        builder.addCase(fetchNewBooks.fulfilled, (state, action) => {
            state.newBooks = action.payload
        })

        .addCase(fetchAllBooks.fulfilled, (state, action) => {
            state.allBooks = action.payload
        })
    },
})


export const { setBookSearch } = bookstoreSlice.actions;

export default bookstoreSlice.reducer