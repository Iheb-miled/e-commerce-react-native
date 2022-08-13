import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { Product } from "../../Type/ProductType";

interface ProductState {
    products: Product[] | null;
    productsCount: number,
    resultPerPage:number
    Loading: boolean,
    singeProduct: Product | null
    errors: any,
}

const initialState: ProductState = {
    products: [],
    singeProduct: null,
    Loading: false,
    errors: null,
    productsCount: 0,
    resultPerPage:0
}

//actions are process that get data from backend


// w hathom les actions
export const getProduct = createAsyncThunk<ProductState>(
    "products/getProducts",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('http://mern-ecommerce-stores.herokuapp.com/api/v2/products');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const createProduct = createAsyncThunk<Product, Object>(
    "Products/CreateProduct",
    async (data, thunkAPI) => {
        try {
            const response= await axios.get('http://mern-ecommerce-stores.herokuapp.com/api/v2/addProduct', data);
            console.log(response)
            thunkAPI.dispatch(getProduct());
            return response.data.products;
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

//reducers -> reduce to specific state -> changes state
// hethom les reducer
export const ProductSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<ProductState>) => {
            state.products = action.payload.products
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProduct.pending, (state) => {
            state.Loading = true
        })
        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.products = action.payload.products;
            state.productsCount=action.payload.productsCount
            state.resultPerPage=action.payload.resultPerPage
            state.Loading = false;
        })
        builder.addCase(getProduct.rejected, (state, action) => {
            state.Loading = false;
            state.errors = action.payload;
        })

    }
})
export default ProductSlice.reducer;
export const { setProducts } = ProductSlice.actions;