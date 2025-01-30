import nodemailer from 'nodemailer';
import http from 'http';
import fs from 'fs';
import path from 'path';

// Create a simple HTTP server
const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/send-email') {
        let data = '';

        req.on('data', chunk => {
            data += chunk;
        });

        req.on('end', () => {
            const parsedData = JSON.parse(data);
            sendEmail(parsedData)
                .then((result) => {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(result));  // Send success result as JSON
                })
                .catch((error) => {
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ success: false, error: error.message }));  // Send error message as JSON
                });
        });
    } else {
        // Serve static files (CSS, JS, etc.)
        const filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
        const extname = path.extname(filePath);
        let contentType = 'text/html';

        switch (extname) {
            case '.js':
                contentType = 'application/javascript';
                break;
            case '.css':
                contentType = 'text/css';
                break;
            case '.png':
            case '.jpg':
            case '.jpeg':
            case '.gif':
                contentType = 'image/png';
                break;
            // Add more content types if needed
        }

        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(500);
                res.end(`Error loading file: ${err.message}`);
            } else {
                res.writeHead(200, { 'Content-Type': contentType });
                res.end(content);
            }
        });
    }
});

// Create a transporter using nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user:"jayavel1520@gmail.com",  // Use environment variable for email user
        pass: "xmoyjvpnjpumhqbr",  // Use environment variable for email password
    },
});

// Email sending function
const sendEmail = async ({ name, email, message }) => {
    const mailOptions = {
        from: email,
        to: 'jayavel1520@gmail.com',  // Target email
        subject: `New Message from ${name}`,
        text: message,
    };

    try {
        await transporter.sendMail(mailOptions);
        return { success: true };  // Return success result as JSON
    } catch (error) {
        throw new Error(error.message);  // Throw error message to be caught by the server handler
    }
};

// Start the server
server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
