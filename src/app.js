const express = require('express');
const path = require('path');
const { evaluateChecklist } = require('./controllers/checklistController');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', evaluateChecklist);

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
