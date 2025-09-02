const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.json({
        version: 'v2',
        message: 'Welcome to Canary Version!',
        timestamp: new Date().toISOString(),
        features: ['new-ui', 'enhanced-performance']
    });
});

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'healthy', version: 'v2' });
});

app.listen(port, () => {
    console.log(`App v2 listening on port ${port}`);
});
