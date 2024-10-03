
import  mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,  // Ensure email is unique across all users
      lowercase: true,
      trim: true,
    },
    email_verified:{
      type: Boolean,
      default: false,  // User has not verified their email yet
    },
    picture: {
      type: String,
      default: '',  // Profile image (optional)
    },
    provider: {
      type: String,
      enum: ['local', 'google', 'hybrid'],  // Add more as needed
      default: 'local',
    },
    user_provider_id: {
      type: String,  // OAuth provider's unique user ID
    },
    password: {
      type: String,  // Store hashed passwords for local authentication
    },
  },{timestamps:true});

  export interface IUser {
    name: string;
    email: string;
    email_verified: boolean;
    picture: string;
    provider: 'local' | 'google' | 'hybrid';
    user_provider_id?: string;
    password?: string;
    createdAt: Date;
    updatedAt: Date;
}

export const User = mongoose.model('User', userSchema);
