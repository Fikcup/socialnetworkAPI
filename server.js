const express = require('express');
const db = require('./config/connection');

const PORT = process.env.port || 3001;
const app = express();

app.use(express.json());

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});