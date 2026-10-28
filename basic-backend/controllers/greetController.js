const greetController = (req, res, name) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Hello, ${name || 'Guest'}!`);
};

module.exports = greetController;