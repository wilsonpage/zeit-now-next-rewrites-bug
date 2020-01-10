export default (req, res) => {
  res.json({
    name: req.query.name || "world",
    query: req.query
  });
};
