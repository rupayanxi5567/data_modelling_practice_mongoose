import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Doctor name is required'],
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
      unique: true,
      trim: true,
    },
    licenseNumber: {
      type: String,
      required: [true, 'Medical License Number is required'],
      unique: true,
      trim: true,
    },
    salary: {
      type: Number,
      required: [true, 'Salary is required'],
      min: [0, 'Salary cannot be negative'],
    },
    qualification: {
      type: String,
      required: [true, 'Qualification is required'],
    },
    specialization: {
      type: String,
      required: [true, 'Specialization is required'],
      index: true,
    },
    experienceInYears: {
      type: Number,
      default: 0,
      min: [0, 'Experience cannot be negative'],
    },
    consultationFee: {
      type: Number,
      required: [true, 'Consultation fee is required'],
      min: [0, 'Fee cannot be negative'],
    },
    gender: {
      type: String,
      enum: {
        values: ['M', 'F', 'O'],
        message: '{VALUE} is not a valid gender',
      },
      required: true,
    },
    worksInHospitals: [
      {
        hospital: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Hospital',
          required: true,
        },
        workingHours: {
          start: { type: String },
          end: { type: String },
        },
        availableDays: [
          {
            type: String,
            enum: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          },
        ],
      },
    ],
    isAvailable: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export const Doctor = mongoose.model('Doctor', doctorSchema);