
import  mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    // Common fields for both OAuth and local users
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
    image: {
      type: String,
      default: '',  // Profile image (optional)
    },
    role: {
      type: String,
      enum: ['user', 'admin'],  // Define user roles
      default: 'user',
    },
    // Fields specifically for OAuth providers
    provider: {
      type: String,
      enum: ['local', 'google', 'github', 'facebook'],  // Add more as needed
      default: 'local',
    },
    providerId: {
      type: String,  // OAuth provider's unique user ID
      default: null,
    },
    password: {
      type: String,  // Store hashed passwords for local authentication
      select: false,  // Do not return passwordHash when fetching user by default
    },
    
  },{timestamps:true});


const User = mongoose.model('User', userSchema);
module.exports = User;
