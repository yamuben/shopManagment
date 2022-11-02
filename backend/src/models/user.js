import mongoose from "mongoose";

const Schema = new mongoose.Schema(
  {
    names: String,
    phone: String,
    picture: String,
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("user",Schema);
