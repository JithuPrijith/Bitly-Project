const Data = require("../models/data-model");

module.exports = {
  getUrlController: (req, res) => {
    try {
      dataModel
        .find()
        .then((data) => {
          console.log(data);
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

  deleteUrl: (req, res) => {
    let urlId = req.params._id;
    try {
      dataModel
        .findOneAndDelete({ _id: urlId })
        .then((result) => {
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
        error: err,
      });
    }
  },

  postUrl: (req, res, next) => {
    const post = new Data({
      url: req.body.long,
      shortUrl: req.body.short,
    });
    post.save();
    console.log(post);
    res.status(200).json({
      message: "post added success",
    });
  },
};
