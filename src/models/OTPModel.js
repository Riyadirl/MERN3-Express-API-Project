const mongoose = require('mongoose');

const OPTSchema = new mongoose.Schema(
    {
        email: { type: String },
        otp: { type: String },
        status: { type: Number, default: 0 }
    },
    { timestamps: true, versionKey: false }
)

const OPTModel = mongoose.model('otps', OPTSchema);
module.exports = OPTModel;