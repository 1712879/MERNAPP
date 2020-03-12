const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
const PORT = process.env.PORT || 8080; // Step 1

app.use('/', require('./Controllers/indexC'));
const path = require('path');
if (process.env.NODE_ENV === 'production') {
    app.use(express.static( './client/build' ));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path
    });
}
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})