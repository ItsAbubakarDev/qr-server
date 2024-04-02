const getUrlLabel = (req, res) => {
  const url = req.query.url;

  res.status(200).send({ url_label: "benign" });
};

module.exports = getUrlLabel;
