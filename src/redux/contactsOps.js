import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://67bc750ced4861e07b3a9cc5.mockapi.io/";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async ({signal}, thunkAPI) => {
        try {
            const { data } = await axios.get("/contacts", {signal});
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (contact, thunkAPI) => {
        try {
            const { data } = await axios.post("/contacts", contact);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (id, thunkAPI) => {
        try {
            await axios.delete(`/contacts/${id}`);
            return id;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const editContact = createAsyncThunk(
    "contacts/editContact",
    async (body, thunkAPI) => {
        try {
            const { data } = await axios.put(`/contacts/${body.id}`, body);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
