const {Schema, model} = require('mongoose');

const userSchema = new Schema(
  {
    username: { type: String, required: true, min: 3, max: 50, unique: true },
    email: { type: String, required: true, max: 50, unique: true },
    password: { type: String, required: true, min: 6, },
    profilePicture: { type: String, default: '', },
    coverPicture: { type: String, default: '', },
    followers: { type: Array, default: [] },
    followings: { type: Array, default: [] },
    isAdmin: { type: Boolean, default: false },
    description: { type: String, max: 500 },
    city: { type: String, max: 50 },
    from: { type: String, max: 50 },
    realitionship: { type: Number, enum: [1, 2, 3] },
  },
  { timestamps: true }
);


module.exports = model('User', userSchema);