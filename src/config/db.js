import mongoose from 'mongoose';

const connectDB = async () => {
  const connection = await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(
    `Connected to Mongodb Database ${connection.connection.host}`.bgMagenta
      .white
  );
  try {
  } catch (error) {
    console.log(`Error in Mongodb ${error}`.bgRed.white);
  }
};
export default connectDB;
