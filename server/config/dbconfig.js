import mongoose from 'mongoose';

mongoose.set('strictQuery', false);

const mongoConnection = async () => {
    try {
        await mongoose.connect(process.env.MongoURL, {
            socketTimeoutMS: 60000,
        });
    } catch (error) {
        console.log('an error occured while connecting db', error);
    }
};

export default mongoConnection;
