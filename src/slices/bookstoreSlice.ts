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
            const response = await fetch(`https://api.itbook.store/1.0/search/${searchStr}/${pageNmb}}`)

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
        currentPage: '1',
        status: '',
        errors: '',
    },

    reducers: {
        setBookSearch: (state: any, action) => {
            state.bookSearch = action.payload;
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
    },
})


export const { setBookSearch } = bookstoreSlice.actions;

export default bookstoreSlice.reducer