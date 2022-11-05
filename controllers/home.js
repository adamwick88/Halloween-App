module.exports = {
  getIndex: (req, res) => {
    res.render("index.ejs");
  },

  getCostumeType: (req, res) => {
    res.render("costumeType");
  },
};