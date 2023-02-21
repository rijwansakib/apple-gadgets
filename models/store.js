const mongoose = require('mongoose')
const {Schema}=mongoose;


const storeSchema = new Schema({

    name: {
        type: String,
        trim: true,
        require: [true, 'please provide a store name'],
        lowercase: true,
        enum: {
            values: [
                'dhaka',
                'chattrogram',
                'rajshahi',
                'khulna',
                'rangpur',
                'mymenshing',
                'barishal',
                'sylhet'],
            message: '{VALUE} is not valid name'
        }
    },
    description: String,
    manager: {
        name: String,
        contactNumber: String,
        id: {
            type: ObjectId,
            ref: 'user'
        }
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    }

}, {
    timestamps: true,
});

const Store = mongoose.model("Store", storeSchema)

module.exports = Store;