import { data } from "autoprefixer";
import axios from "../../api/axios";
//import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const userRegister = createAsyncThunk(
  "user/register",
  async (
    { email, password, password_confirm, firstname, lastname },
    { rejectWithValue }
  ) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };

      const { data } = await axios.post(
        "user/register",
        {
          email,
          password,
          password_confirm,
          firstname,
          lastname,
        },
        config
      );
      //localStorage.setItem("UEMAIL", email);
      localStorage.setItem("REG_SUCCESS", true);
      localStorage.setItem("REG_USER_EMAIL", email);
      return data;
    } catch (error) {
      if (!error?.response) {
        return rejectWithValue("No Server Response");
      }
      if (error?.response?.status === 400) {
        //Not valid Email or Mismatched password;
        return rejectWithValue(error.response.data.error);
      }
      if (error?.response?.status === 403) {
        //Not valid Email or Mismatched password;
        return rejectWithValue(error.response.data.error);
      }
      if (error?.response?.status === 401) {
        //return rejectWithValue("User Already taken");
        return rejectWithValue(error.response.data.error);
      }
      if (error?.response?.status === 409) {
        //return rejectWithValue("User Already taken");
        return rejectWithValue(error.response.data.error);
      }
      if (error?.response?.status === 500) {
        //return rejectWithValue("User Already taken");
        return rejectWithValue(error.response.data.error);
      }
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const userEmailVerify = createAsyncThunk(
  "user/verify",
  async ({ id, veri_key }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };

      const { data } = await axios.post(
        `user/verify/${id}/${veri_key}`,
        { id, veri_key },
        config
      );
      // store user's token in local storage
      localStorage.setItem("EMAIL_VERIFIED", true);
      return data;
    } catch (error) {
      // return custom error message from API if any
      if (!error?.response) {
        return rejectWithValue("No Server Response");
      }
      if (error?.response?.status === 401) {
        // some or more pre conditions failed;
        return rejectWithValue(error.response.data.error);
      }
      if (error?.response?.status === 412) {
        // some or more pre conditions failed;
        return rejectWithValue(error.response.data.error);
      }
      if (error?.response?.status === 500) {
        // some or more pre conditions failed;
        return rejectWithValue(error.response.data.error);
      }
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const jobApplication = createAsyncThunk(
  "job/application",
  async (
    { firstname, lastname, email, phone, resume },
    { rejectWithValue }
  ) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };

      const { data } = await axios.post(
        "application",
        {
          firstname,
          lastname,
          email,
          phone,
          resume,
        },
        config
      );
      localStorage.setItem("APPLICATION_SUCCESS", true);
      return data;
    } catch (error) {
      if (!error?.response) {
        return rejectWithValue("No Server Response");
      }
      if (error?.response?.status === 400) {
        //Not valid Email or Mismatched password;
        return rejectWithValue(error.response.data.error);
      }
      if (error?.response?.status === 403) {
        //Not valid Email or Mismatched password;
        return rejectWithValue(error.response.data.error);
      }
      if (error?.response?.status === 401) {
        //return rejectWithValue("User Already taken");
        return rejectWithValue(error.response.data.error);
      }
      if (error?.response?.status === 409) {
        //return rejectWithValue("User Already taken");
        return rejectWithValue(error.response.data.error);
      }
      if (error?.response?.status === 500) {
        //return rejectWithValue("User Already taken");
        return rejectWithValue(error.response.data.error);
      }
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const userLogin = createAsyncThunk(
  "user/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        // auth: {
        //   //username: "vitalcare_api_v1",
        //   //password: "vitalcare_api_secret_v1",
        //   username: "admin",
        //   password: "admin1234",
        // },
      };

      const { data } = await axios.post(
        "user/login",
        //"jwt-auth/v1/token",
        //{ username: email, password, grant_type },
        { email, password },
        config
      );
      localStorage.setItem("LOGIN_TEST", true);
      return data;
    } catch (error) {
      if (!error?.response) {
        return rejectWithValue("No Server Response");
      }
      if (error?.response?.status === 400) {
        //Not valid Email or Mismatched password;
        return rejectWithValue(error.response.data.error);
      }
      if (error?.response?.status === 403) {
        //Not valid Email or Mismatched password;
        return rejectWithValue(error.response.data.error);
      }
      if (error?.response?.status === 401) {
        //return rejectWithValue("User Already taken");
        return rejectWithValue(error.response.data.error);
      }
      if (error?.response?.status === 409) {
        //return rejectWithValue("User Already taken");
        return rejectWithValue(error.response.data.error);
      }
      if (error?.response?.status === 500) {
        //return rejectWithValue("User Already taken");
        return rejectWithValue(error.response.data.error);
      }
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const sendMessage = createAsyncThunk(
  "message/create",
  async ({ name, email, message }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };

      await axios.post("message/create", { name, email, message }, config);
      localStorage.setItem("MSG_SENT", true);
      return data;
    } catch (error) {
      if (!error?.response) {
        return rejectWithValue("No Server Response");
      }
      if (error?.response?.status === 400) {
        return rejectWithValue(error.response.data.error);
      }
      if (error?.response?.status === 403) {
        //Not valid Email or Mismatched password;
        return rejectWithValue(error.response.data.error);
      }
      if (error?.response?.status === 401) {
        //return rejectWithValue("User Already taken");
        return rejectWithValue(error.response.data.error);
      }
      if (error?.response?.status === 409) {
        //return rejectWithValue("User Already taken");
        return rejectWithValue(error.response.data.error);
      }
      if (error?.response?.status === 500) {
        //return rejectWithValue("User Already taken");
        return rejectWithValue(error.response.data.error);
      }
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const postJob = createAsyncThunk(
  "job/create",
  async (
    {
      user_id,
      job_title,
      job_responsibility,
      job_summary,
      job_location,
      job_qualification,
    },
    { rejectWithValue }
  ) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };

      await axios.post(
        "job/create",
        {
          user_id,
          job_title,
          job_responsibility,
          job_summary,
          job_location,
          job_qualification,
        },
        config
      );
      localStorage.setItem("POSTED", true);
      return data;
    } catch (error) {
      if (!error?.response) {
        return rejectWithValue("No Server Response");
      }
      if (error?.response?.status === 400) {
        return rejectWithValue(error.response.data.error);
      }
      if (error?.response?.status === 403) {
        //Not valid Email or Mismatched password;
        return rejectWithValue(error.response.data.error);
      }
      if (error?.response?.status === 401) {
        //return rejectWithValue("User Already taken");
        return rejectWithValue(error.response.data.error);
      }
      if (error?.response?.status === 409) {
        //return rejectWithValue("User Already taken");
        return rejectWithValue(error.response.data.error);
      }
      if (error?.response?.status === 500) {
        //return rejectWithValue("User Already taken");
        return rejectWithValue(error.response.data.error);
      }
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const postBlog = createAsyncThunk(
  "blog/create",
  async (
    { cat_id, user_id, blob, blog_title, blog_body, blog_image },
    { rejectWithValue }
  ) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };

      await axios.post(
        "blog/create",
        { cat_id, user_id, blob, blog_title, blog_body, blog_image },
        config
      );
      localStorage.setItem("POSTED", true);
      return data;
    } catch (error) {
      if (!error?.response) {
        return rejectWithValue("No Server Response");
      }
      if (error?.response?.status === 400) {
        return rejectWithValue(error.response.data.error);
      }
      if (error?.response?.status === 403) {
        //Not valid Email or Mismatched password;
        return rejectWithValue(error.response.data.error);
      }
      if (error?.response?.status === 401) {
        //return rejectWithValue("User Already taken");
        return rejectWithValue(error.response.data.error);
      }
      if (error?.response?.status === 409) {
        //return rejectWithValue("User Already taken");
        return rejectWithValue(error.response.data.error);
      }
      if (error?.response?.status === 500) {
        //return rejectWithValue("User Already taken");
        return rejectWithValue(error.response.data.error);
      }
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const blogCategory = createAsyncThunk(
  "blogcategory/create",
  async ({ user_id, cat_name }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };

      await axios.post("blogcategory/create", { user_id, cat_name }, config);
      localStorage.setItem("POSTED", true);
      return data;
    } catch (error) {
      if (!error?.response) {
        return rejectWithValue("No Server Response");
      }
      if (error?.response?.status === 400) {
        return rejectWithValue(error.response.data.error);
      }
      if (error?.response?.status === 403) {
        //Not valid Email or Mismatched password;
        return rejectWithValue(error.response.data.error);
      }
      if (error?.response?.status === 401) {
        //return rejectWithValue("User Already taken");
        return rejectWithValue(error.response.data.error);
      }
      if (error?.response?.status === 409) {
        //return rejectWithValue("User Already taken");
        return rejectWithValue(error.response.data.error);
      }
      if (error?.response?.status === 500) {
        //return rejectWithValue("User Already taken");
        return rejectWithValue(error.response.data.error);
      }
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const passwordLink = createAsyncThunk(
  "password/link",
  async ({ email }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };

      await axios.post("password/link", { email }, config);
      localStorage.setItem("POSTED", true);
      return data;
    } catch (error) {
      if (!error?.response) {
        return rejectWithValue("No Server Response");
      }
      if (error?.response?.status === 400) {
        return rejectWithValue(error.response.data.error);
      }
      if (error?.response?.status === 403) {
        //Not valid Email or Mismatched password;
        return rejectWithValue(error.response.data.error);
      }
      if (error?.response?.status === 401) {
        //return rejectWithValue("User Already taken");
        return rejectWithValue(error.response.data.error);
      }
      if (error?.response?.status === 409) {
        //return rejectWithValue("User Already taken");
        return rejectWithValue(error.response.data.error);
      }
      if (error?.response?.status === 500) {
        //return rejectWithValue("User Already taken");
        return rejectWithValue(error.response.data.error);
      }
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
