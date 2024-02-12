function customMiddleware(req, res, next) {
  console.log("Iam middleware in middleware folder");
  next();
}

module.exports = customMiddleware;
