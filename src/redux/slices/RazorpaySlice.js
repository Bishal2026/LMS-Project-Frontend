import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosIntances from "../../helpers/axiosinstance";

const initialState = {
  key: "",
  subcription_id: "",
  isPaymentVerified: false,
  allPaymenyts: {},
  finalMonths: {},
  monthySalesRecord: [],
};

export const getRazorPayId = createAsyncThunk("/razorpay/getId", async () => {
  try {
    const res = await axiosIntances.get("/payments/razorpay-key");
    return res.data;
  } catch (error) {
    toast.error("failed to load data");
  }
});

export const purchseCourseBundle = createAsyncThunk(
  "/parchaseCourse",
  async () => {
    try {
      const res = await axiosIntances.post("/payments/subcribe");
      console.log(res.data);
      return res.data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);

export const verifyUserPayments = createAsyncThunk(
  "/razorpay/verify",
  async (data) => {
    try {
      const res = await axiosIntances.post("/payments/verify", {
        razorpay_payment_id: data.razorpay_payment_id,
        razorpay_subscription_id: data.razorpay_subscription_id,
        razorpay_signature: data.razorpay_signature,
      });
      return res.data;
    } catch (error) {
      toast.error("failed to load data");
    }
  }
);

export const getPaymentRecord = createAsyncThunk(
  "/payments/record",
  async () => {
    try {
      const res = axiosIntances.get("/payments?conut=100");

      toast.promise(res, {
        loading: "Getting the payments record ...",
        success: (data) => {
          return data?.data?.message;
        },
        error: "Faild to get payments record",
      });
      return (await res).data;
    } catch (error) {
      toast.error("opertions failed");
    }
  }
);

export const cancelCourseBundel = createAsyncThunk(
  "/payments/cancel",
  async () => {
    try {
      const res = axiosIntances.post("/payments/unsubcribe");

      toast.promise(res, {
        loading: "unsubcribe the bundel ....",
        success: (data) => {
          return data?.data?.message;
        },
        error: "Faild to unsubcribe",
      });
      return (await res).data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);

const razorpaySlice = createSlice({
  name: "razorpay",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRazorPayId.fulfilled, (state, action) => {
        state.key = action?.payload?.key;
      })
      .addCase(purchseCourseBundle.fulfilled, (state, action) => {
        state.subcription_id = action?.payload?.subcription_id;
      })
      .addCase(verifyUserPayments.fulfilled, (state, action) => {
        toast.success(action?.payload?.message);
        state.isPaymentVerified = action?.payload?.success;
      })
      .addCase(verifyUserPayments.rejected, (state, action) => {
        toast.success(action?.payload?.message);
        state.isPaymentVerified = action?.payload?.success;
      })
      .addCase(getPaymentRecord.fulfilled, (state, action) => {
        state.allPaymenyts = action?.payload?.allPaymenyts;
        state.finalMonths = action?.payload?.finalMonths;
        state.monthySalesRecord = action?.payload?.monthySalesRecord;
      });
  },
});

export default razorpaySlice.reducer;
