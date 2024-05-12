import {Schema, model, models} from 'mongoose';

const UserSchema = new Schema({
    ip: {
        type: String,
        required: true
    },
    avg: {
        type: Number,
        required: true
    },
});

const User = models.User || model('User', UserSchema);
export default User;