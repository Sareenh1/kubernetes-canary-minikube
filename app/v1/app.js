const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.json({
        version: 'v1',
        message: 'Welcome to Stable Version!',
        timestamp: new Date().toISOString()
    });
});

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'healthy', version: 'v1' });
});

app.listen(port, () => {
    console.log(`App v1 listening on port ${port}`);
});
