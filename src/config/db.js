const mongoose = require('mongoose');

const ConnectDB = async () => {
    try {
        console.log("Attempting to connect to DB...");
        console.log("MONGO_URI exists:", !!process.env.MONGO_URI);
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to DB successfully");
    } catch (error) {
        console.error("DB Connection Error:", error.message);
        console.error("Full error:", error);
        process.exit(1); // crash fast so Render restarts the service
    }
};

module.exports = ConnectDB;