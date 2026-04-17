const ConnectDB = require('./config/db');
const app = require('./app');

ConnectDB();

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});