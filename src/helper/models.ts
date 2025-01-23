import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please provide a userName'],
      trim: true,
      minLength: [5, 'Name must be larger than  5 character'],
      maxlength: [13, 'Name must be smaller than 12 character'],
    },
    email: {
      type: String,
      required: [true, 'Please provide a email'],
      match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, 'Invalid email address'],
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
    },
    cpassword: {
      type: String,
      required: [true, 'Please provide a cpassword'],
    },
  },
  //   gender: {
  //     type: String,
  //     required: [true, "Please provide a gender"],
  //     validate: {
  //       validator: (value: string) => {
  //         return ["male", "female", "other"].includes(value.toLowerCase());
  //       },
  //       message: 'Gender must be "male", "female", or "other".',
  //     },
  //   },
  //   subject: {
  //     type: String,
  //     required: [true, "Please provide a subject"],
  //   },
  //   message: {
  //     type: String,
  //     required: [true, "Please provide a message"],
  //   },
  // },
  { timestamps: true },
)

export const User = mongoose.models?.users || mongoose.model('users', userSchema)
