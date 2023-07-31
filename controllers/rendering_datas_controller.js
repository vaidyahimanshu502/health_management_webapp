const userModel = require("../models/userModel");

module.exports.show_register_page = (req, res) => {
  return res.render("register", {
    title: "Register | Page",
  });
};

module.exports.show_login_page = (req, res) => {
  return res.render("signin", {
    title: "Sign-In | Page",
  });
};

module.exports.after_login = (req, res) => {
  return res.render("after_signin_page", {
    title: "After Sign-In | Page",
  });
};

module.exports.profile = async (req, res) => {
  try {
    const users = await userModel.find({});
    // console.log("User Email-----", req.params._id);
    if (users) {
      return res.render("profile", {
        title: "User | Peofile",
        users: users,
      });
    }
    return res.redirect("/api/v1/render/signin");
  } catch (error) {
    console.log(`Erorrrrrr :: ${error}`);
  }
};
