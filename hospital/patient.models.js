import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Patient name is required'],
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
    age: {
      type: Number,
      required: [true, 'Age is required'],
      min: [0, 'Age cannot be negative'],
    },
    gender: {
      type: String,
      enum: {
        values: ['M', 'F', 'O'],
        message: '{VALUE} is not a valid gender',
      },
      required: [true, 'Gender is required'],
    },
    bloodGroup: {
      type: String,
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      required: [true, 'Blood group is required'],
    },
    diagnosedWith: {
      type: String,
      required: [true, 'Diagnosis is required'],
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
    emergencyContact: {
      name: { type: String, required: [true, 'Emergency contact name is required'], trim: true },
      relation: { type: String, required: [true, 'Relation is required'], trim: true },
      phoneNumber: { type: String, required: [true, 'Emergency phone number is required'], trim: true },
    },
    admittedInHospital: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hospital',
      required: [true, 'Hospital reference is required'],
    },
    attendingDoctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Doctor',
    },
    admissionStatus: {
      type: String,
      enum: {
        values: ['Admitted', 'Discharged', 'Outpatient'],
        message: '{VALUE} is not a valid admission status',
      },
      default: 'Admitted',
    },
  },
  { timestamps: true }
);

export const Patient = mongoose.model('Patient', patientSchema);