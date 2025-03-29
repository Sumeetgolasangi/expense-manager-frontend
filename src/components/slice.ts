import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the state type
interface ExpenseState {
  value: number;
  loading: boolean;
  error: string | null;
}

const initialState: ExpenseState = {
  value: 0,
  loading: false,
  error: null,
};

// Async Thunk: Simulating an API Call
// export const fetchExpense = createAsyncThunk(
//   "expense/fetchExpense",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//       const data = await response.json();
//       return data.id; // Using `id` as expense value
//     } catch (error) {
//       return rejectWithValue("Failed to fetch");
//     }
//   }
// );

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setValuError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { setValue } = expenseSlice.actions;
export default expenseSlice.reducer;
