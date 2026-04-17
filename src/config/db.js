const mongoose = require('mongoose');

const ConnectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/Notesapp");
        console.log("Connected to DB");
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = ConnectDB;