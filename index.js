const express = require('express');
const { ndown } = require('nayan-media-downloader');

const app = express();
const port = 8266;

app.get('/videodownloader', async (req, res) => {
    const { link } = req.query;

    if (!link) {
        return res.status(400).send('Link parameter is required.');
    }

    try {
        let URL = await ndown(link);
        res.send(URL);
    } catch (error) {
        console.error("Error downloading media:", error);
        res.status(500).send(`Error downloading media: ${error.message}`);
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

