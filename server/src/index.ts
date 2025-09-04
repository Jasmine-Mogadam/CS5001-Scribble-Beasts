import express from 'express';

const app = express();
const PORT = process.env.PORT || 5001;

// Create HTTP server
const httpServer = app.listen(PORT, () => {
    console.log(`Hello world, from Scribble Beasts server!`);
    console.log(`Server is running on port ${PORT}`);
});

// Graceful shutdown handler
function shutdownHandler(signal: string) {
    console.log(`Received signal ${signal}. Closing server...`);

    httpServer.close(() => {
        process.exit(0);
    });
}

// Register signals for graceful shutdown
['SIGINT', 'SIGTERM'].forEach(signal => {
    process.on(signal, () => shutdownHandler(signal));
});