const homeController = require('../controllers/homeController');
const aboutController = require('../controllers/aboutController');
const dataController = require('../controllers/dataController');
const greetController = require('../controllers/greetController');

const routes = (req, res) => {
  const { pathname, searchParams } = new URL(req.url, `http://${req.headers.host}`);

  if (pathname === '/') homeController(req, res);
  else if (pathname === '/about') aboutController(req, res);
  else if (pathname === '/data') dataController(req, res);
  else if (pathname === '/greet') greetController(req, res, searchParams.get('name'));
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
};

module.exports = routes;