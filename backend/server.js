const app = require('./app');
const os = require('os');

const port = process.env.PORT || 3000;

app.listen(port, () => {
    const interfaces = os.networkInterfaces();
    const addresses = [];
    for (const k in interfaces) {
        for (const k2 in interfaces[k]) {
            const address = interfaces[k][k2];
            if (address.family === 'IPv4' && !address.internal) {
                addresses.push(address.address);
            }
        }
    }

    console.log(`Server running at API_URL=http://${addresses[0]}:${port}/`);
});