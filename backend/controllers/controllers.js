const Data = require("../models/data-model");

module.exports = {
  getUrlController: (req, res) => {
    try {
      Data.find()
        .then((data) => {
          res.status(200).json({
            message: "url fetched successfully",
            urlData: data,
          });
        })
        .catch((err) => {
          res.status(404).json({
            message: "data not found",
            error: err,
          });
        });
    } catch (error) {
      res.status(404).json({
        message: "server failed",
        error: error,
      });
    }
  },

  deleteUrl: (req, res, next) => {
    // console.log(req.params.id);
    const urlId = req.params.id;
    try {
      Data.findOneAndDelete({ _id: urlId })
        .then((data) => {
          res.status(200).json({
            message: "url deleted successfully",
            urlData: data,
          });
        })
        .catch((err) => {
          res.status(404).json({
            message: "url not deleted",
            error: err,
          });
        });
    } catch (error) {
      res.status(500).json({
        message: "server failed",
      });
    }
  },

  postUrl: (req, res, next) => {
    console.log(req.body);
    const post = new Data({
      url: req.body.long,
      shortUrl: req.body.short,
    });
    post.save();
    res.status(200).json({
      message: "post added success",
    });
  },
};
