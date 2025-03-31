import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the state type
interface ExpenseState {
  type: string;
  loading: boolean;
  error: string | null;
}

const initialState: ExpenseState = {
  type: '',
  loading: false,
  error: null,
};

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    setType: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setValuError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { setType, setLoading, setValuError } = expenseSlice.actions;
export default expenseSlice.reducer;
