const userModel = require("../models/userModel");
const colors = require("colors");

/** ***********************************Making APIs************************************ **/
// Endpoints of Registering the user
module.exports.register = async (req, res) => {
  try {
    const { name, age, email, password } = req.body; //Destructuring

    //validations
    if (!name) {
      return res.status(401).json({
        success: false,
        message: "Name is required!",
      });
    }
    if (!email) {
      return res.status(401).json({
        success: false,
        message: "Email is required!",
      });
    }
    if (!password) {
      return res.status(401).json({
        success: false,
        message: "Password is required!",
      });
    }
    if (!age) {
      return res.status(401).json({
        success: false,
        message: "Age is required!",
      });
    }

    //Finding if user already exists
    const user = await userModel.findOne({ email });
    //sending json if user exists
    if (user) {
      return res.status(401).json({
        success: false,
        message: "User already exists please go and Sing-In!",
      });
    } else {
      //If user not exists creating newUser
      const newUsee = await userModel.create({
        name: name,
        age: age,
        email: email,
        password: password,
      });
      await newUsee.save();

      return res.status(200).json({
        success: true,
        message: "User Registered Successfully!",
        data: newUsee,
      });
    }
  } catch (error) {
    let errMsg = error.message;
    if (process.env.environment === "production") {
      return res.status(501).json({
        success: false,
        message: "Internal Server Error!",
      });
    }
    return res.status(501).json({
      success: false,
      message: errMsg,
    });
  }
};

//EndPoint of lotgin the user
module.exports.logIn = async (req, res) => {
  try {
    const { email, password } = req.body; //Destructuring
    //validation
    if (!email || !password) {
      return res.status(401).json({
        success: false,
        message: "Invalid Username/Password!",
      });
    }
    //Finding user into the Database
    const user = await userModel.findOne({ email });
    //checking if user not exists
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not exists for this username!",
      });
    } else {
      //if user found checking password if correct
      if (user.password != password) {
        return res.status(401).json({
          success: false,
          message: "Invalid Username?Password!",
        });
      } else {
        // if everything is valid
        return res.status(200).json({
          success: false,
          message: "User LoggedIn successfully!",
          data: user,
        });
      }
    }
  } catch (error) {
    let errMsg = error.message;
    if (process.env.environment === "production") {
      return res.status(501).json({
        success: false,
        message: "Internal Server Error!",
      });
    }
    return res.status(501).json({
      success: false,
      message: errMsg,
    });
  }
};

//Endpoint for adding activity
module.exports.add_activity = async (req, res) => {
  try {
    const { email, activity } = req.body; //Destructuring
    //validation
    if (!email) {
      return res.status(401).json({
        success: false,
        message: "Email is required !",
      });
    }
    if (!activity) {
      return res.status(401).json({
        success: false,
      });
    }
    //if everything is okay then finding and updating user
    const user = await userModel.findOne({ email });
    // If User not found
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid Username!",
      });
    } else {
      //checking age
      if (user.age >= 65) {
        const updatedUser = await userModel.updateOne(user, {
          $push: { activity: activity },
        });
        await user.save();
        return res.status(401).json({
          success: true,
          message: "Activity added successfully!",
          data: updatedUser,
        });
      }
    }
  } catch (error) {
    let errMsg = error.message;
    if (process.env.environment === "production") {
      return res.status(501).json({
        success: false,
        message: "Internal Server Error!",
      });
    }
    return res.status(501).json({
      success: false,
      message: errMsg,
    });
  }
};

// Endpoint for adding nutrition data
module.exports.add_nutritions = async (req, res) => {
  try {
    const { email, nutrition } = req.body; // Destructuring data
    //validations
    if (!email) {
      return res.status(401).json({
        success: false,
        message: "Email is required!",
      });
    }
    if (!nutrition) {
      return res.status(401).json({
        success: false,
        message: "Nutrition is required!",
      });
    }

    //Finding user in database
    const user = await userModel.findOne({ email });
    //checking if user not found
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid Username!",
      });
    } else {
      // if user found then adding nutritions
      const updatedUser = await userModel.updateOne(user, {
        $push: { nutrition: nutrition },
      });
      await user.save();
      return res.status(200).json({
        success: true,
        message: "Nutritions added successfuly",
        data: updatedUser,
      });
    }
  } catch (error) {
    let errMsg = error.message;
    if (process.env.environment === "production") {
      return res.status(501).json({
        success: false,
        message: "Internal Server Error!",
      });
    }
    return res.status(501).json({
      success: false,
      message: errMsg,
    });
  }
};

// Endpoint for adding vitals signs data
module.exports.add_vitals = async (req, res) => {
  try {
    const { email, vitals } = req.body; // destructuring
    //validations
    if (!email) {
      return res.status(401).json({
        success: false,
        message: "Email is required",
      });
    }
    if (!vitals) {
      return res.status(401).json({
        success: false,
        message: "Vitals is required",
      });
    }

    //finding user inside the database
    const user = await userModel.findOne({ email });
    //if user not exists in db
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid Username!",
      });
    } else {
      //if user found adding vitals signs
      const updatedUser = await userModel.updateOne(user, {
        $push: { vitals: vitals },
      });
      await user.save();
      return res.status(200).json({
        success: true,
        message: "Vitals added successfully!",
        data: updatedUser,
      });
    }
  } catch (error) {
    let errMsg = error.message;
    if (process.env.environment === "production") {
      return res.status(501).json({
        success: false,
        message: "Internal Server Error!",
      });
    }
    return res.status(501).json({
      success: false,
      message: errMsg,
    });
  }
};

/** ****************************Making Controllers for Sign-Up and Log-In********************************* **/

module.exports.register_user = async (req, res) => {
  try {
    const { name, age, email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      const newUser = await userModel.create({
        name: name,
        age: age,
        email: email,
        password: password,
      });
      console.log(`User created successfully:: ${newUser}`.bgGreen.white);
      return res.redirect("/api/v1/render/signin");
    }
  } catch (error) {
    console.log(
      `An error occured while registering user:: ${error}`.bgRed.white
    );
  }
};

module.exports.login_user = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (user) {
      if (user.password != password) {
        console.log(`InValid Username/Password!`.bgRed.white);
      } else {
        console.log(`User signed-In Successfully!`.bgGreen.white);
        return res.redirect("/api/v1/render/after_signin");
      }
    }
    return req.redirect("back");
  } catch (error) {
    console.log(`An error occured while user sign-in`.bgRed.white);
  }
};
