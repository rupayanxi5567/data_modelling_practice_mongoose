import mongoose from 'mongoose';

const medicalRecordSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Patient',
      required: [true, 'Patient reference is required'],
      index: true,
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Doctor',
      required: [true, 'Doctor reference is required'],
    },
    hospital: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hospital',
      required: [true, 'Hospital reference is required'],
    },
    diagnosis: {
      type: String,
      required: [true, 'Diagnosis details are required'],
      trim: true,
    },
    symptoms: [
      {
        type: String,
        trim: true,
      },
    ],
    prescriptions: [
      {
        medicineName: {
          type: String,
          required: [true, 'Medicine name is required'],
          trim: true,
        },
        dosage: {
          type: String,
          required: [true, 'Dosage is required'],
          trim: true,
        },
        duration: {
          type: String,
          required: [true, 'Duration is required'],
          trim: true,
        },
        instructions: {
          type: String,
          trim: true,
        },
      },
    ],
    testsRecommended: [
      {
        type: String,
        trim: true,
      },
    ],
    labResults: [
      {
        testName: { type: String, trim: true },
        resultUrl: { type: String, trim: true },
        testedAt: { type: Date },
      },
    ],
    admissionDate: {
      type: Date,
    },
    dischargeDate: {
      type: Date,
    },
    status: {
      type: String,
      enum: {
        values: ['Admitted', 'Discharged', 'Under Observation', 'Outpatient'],
        message: '{VALUE} is not a valid status',
      },
      default: 'Outpatient',
    },
  },
  { timestamps: true }
);

export const MedicalRecord = mongoose.model('MedicalRecord', medicalRecordSchema);