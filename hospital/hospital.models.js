import mongoose from 'mongoose';

const hospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Hospital name is required'],
      trim: true,
      index: true,
    },
    registrationNumber: {
      type: String,
      required: [true, 'Hospital registration number is required'],
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
    },
    emergencyContact: {
      type: String,
      required: [true, 'Emergency contact number is required'],
      trim: true,
    },
    address: {
      addressLine1: {
        type: String,
        required: [true, 'Address Line 1 is required'],
        trim: true,
      },
      addressLine2: {
        type: String,
        trim: true,
      },
      city: {
        type: String,
        required: [true, 'City is required'],
        trim: true,
        index: true,
      },
      state: {
        type: String,
        required: [true, 'State is required'],
        trim: true,
      },
      pincode: {
        type: String,
        required: [true, 'Pincode is required'],
        trim: true,
      },
    },
    specializations: [
      {
        type: String,
        trim: true,
      },
    ],
    totalBeds: {
      type: Number,
      required: [true, 'Total bed capacity is required'],
      min: [1, 'Hospital must have at least 1 bed'],
    },
    availableBeds: {
      type: Number,
      default: 0,
      min: [0, 'Available beds cannot be negative'],
    },
    hasEmergencyServices: {
      type: Boolean,
      default: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export const Hospital = mongoose.model('Hospital', hospitalSchema);