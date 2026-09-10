const http = require('http');

// The ports we want our backend servers to run on
const PORTS = [3001, 3002, 3003];

// Loop through each port and spin up a separate server instance
PORTS.forEach((port) => {
    const server = http.createServer((req, res) => {
        // Log to the terminal so you can visually see the request arrive
        console.log(`✅ [Port ${port}] Received incoming request from Load Balancer!`);
        
        // Send the HTTP response back to the load balancer
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Hello from Node.js Server running on Port ${port}\n`);
    });

    // Start listening on the designated port
    server.listen(port, () => {
        console.log(`Backend server is awake and listening on port ${port}`);
    });
});
