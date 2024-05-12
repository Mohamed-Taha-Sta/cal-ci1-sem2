import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery',true)
    if (isConnected) {
        console.log('using existing connection');
        return;
    }
    try{
        await mongoose.connect(process.env.MONGODB_URI as string, {
            dbName: process.env.MONGODB_DB,
        })
        isConnected = true;
    }
    catch (err) {
        // console.log(err)
    }
}

export default connectToDB;