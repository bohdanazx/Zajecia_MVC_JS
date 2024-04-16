const express = require('express');
const app = express();
const PORT = 3001;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('In progress...');
});

app.use((req, res) => {
    res.status(404).send('404 Not Found');
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
