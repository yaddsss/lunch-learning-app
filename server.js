const express = require('express');
const path = require('path');
const app = express();

// Get port from environment variable or default to 3000
const PORT = process.env.PORT || 3000;

// Serve static files from current directory
app.use(express.static(path.join(__dirname)));

// Route for main application
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'lunch_course_website.html'));
});

// Route for admin panel
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin_panel.html'));
});

// Handle 404 - redirect to main page
app.get('*', (req, res) => {
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Lunch Learning Hub server running on port ${PORT}`);
    console.log(`Main app: http://localhost:${PORT}`);
    console.log(`Admin panel: http://localhost:${PORT}/admin`);
});