exports.logger = (req, res, next) => {
  console.log("İstek Geldi, Metod:", req.method, "Url:", req.url);
  next();
};
