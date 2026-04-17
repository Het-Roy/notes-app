require('dotenv').config();
const ConnectDB = require('./config/db');
const app = require('./app');

ConnectDB();

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});