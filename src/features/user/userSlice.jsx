import { createSlice } from "@reduxjs/toolkit";
import {
  userRegister,
  userEmailVerify,
  userLogin,
  sendMessage,
  postBlog,
  blogCategory,
  passwordLink,
  jobApplication,
  postJob,
} from "./userAction";
//initialize UEMAIL from local storage
const REG_INFO = localStorage.getItem("REG_INFO")
  ? localStorage.getItem("REG_INFO")
  : null;
const initialState = {
  loading: false,
  isLoading: false,
  error: null,
  USER_INFO: null,
  LOGIN: null,
  REG_INFO,
  EMAIL_VERIFIED: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.clear();
      //revert state to default
      state.error = null;
      state.loading = false;
      state.isLoading = false;
      state.USER_INFO = null;
      state.LOGIN = null;
      state.REG_SUCCESS = null;
      state.REG_INFO = null;
      state.POSTED = null;
      state.MSG_SUCCESS = null;
      state.EMAIL_VERIFIED = null;
    },
  },
  extraReducers(builder) {
    builder
      // register user
      .addCase(userRegister.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userRegister.fulfilled, (state, { payload }) => {
        state.loading = false;
        //state.REG_SUCCESS = true; // registration successful
        state.REG_INFO = payload;
      })
      .addCase(userRegister.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      }) // login user
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.USER_INFO = null;
        state.LOGIN = null;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.USER_INFO = payload; // Login successful
        state.LOGIN = true;
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.USER_INFO = null;
        state.LOGIN = null;
        state.error = payload;
      }) // user email verify

      .addCase(userEmailVerify.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.EMAIL_VERIFIED = false;
      })
      .addCase(userEmailVerify.fulfilled, (state) => {
        state.loading = false;
        state.EMAIL_VERIFIED = true; // email verification successful
        state.REG_USER_EMAIL = null;
      })
      .addCase(userEmailVerify.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.EMAIL_VERIFIED = false;
      }) // send message
      .addCase(sendMessage.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.MSG_SENT = null;
      })
      .addCase(sendMessage.fulfilled, (state, { payload }) => {
        state.loading = false;
        //state.LOGIN = true;
        state.MSG_SENT = payload; // sent success
      })
      .addCase(sendMessage.rejected, (state, { payload }) => {
        state.loading = false;
        state.MSG_SENT = null;
        state.error = payload;
      }) // post blog
      .addCase(postBlog.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.POSTED = null;
      })
      .addCase(postBlog.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.POSTED = payload; // post success
      })
      .addCase(postBlog.rejected, (state, { payload }) => {
        state.loading = false;
        state.POSTED = null;
        state.error = payload;
      }) // post job
      .addCase(postJob.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.POSTED = null;
      })
      .addCase(postJob.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.POSTED = payload; // post success
      })
      .addCase(postJob.rejected, (state, { payload }) => {
        state.loading = false;
        state.POSTED = null;
        state.error = payload;
      }) // create blog category
      .addCase(blogCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.POSTED = null;
      })
      .addCase(blogCategory.fulfilled, (state) => {
        state.loading = false;
        //state.POSTED = payload; // created
        state.cat_msg = "Category addedd";
      })
      .addCase(blogCategory.rejected, (state, { payload }) => {
        state.loading = false;
        state.POSTED = null;
        state.error = payload;
      }) // password link
      .addCase(passwordLink.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.POSTED = null;
      })
      .addCase(passwordLink.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.POSTED = payload; // created
      })
      .addCase(passwordLink.rejected, (state, { payload }) => {
        state.loading = false;
        state.POSTED = null;
        state.error = payload;
      }) // job application
      .addCase(jobApplication.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.POSTED = null;
      })
      .addCase(jobApplication.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.POSTED = payload; // created
      })
      .addCase(jobApplication.rejected, (state, { payload }) => {
        state.loading = false;
        state.POSTED = null;
        state.error = payload;
      });
  },
});
export const { logout } = userSlice.actions;
export default userSlice.reducer;
