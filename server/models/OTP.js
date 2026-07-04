const mongoose = require('mongoose');
const schema = mongoose.Schema;

const otpSchema = new schema({
    otp: {type: String,required: true},
    email: {type: String,required: true},
    action: {type: String, enum: ['account_verification', 'event_booking'], required: true},
    createdAt: {type: Date, default: Date.now, expires: 300}  
})

module.exports = mongoose.model('OTP', otpSchema);

