const logger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.url;
  
  console.log(`${method} ${url}`);
  
  if (method === 'POST' || method === 'PUT') {
    console.log('Request body:', req.body);
  }
  
  if (Object.keys(req.query).length > 0) {
    console.log('Query params:', req.query);
  }
  
  next(); 
};

module.exports = logger;