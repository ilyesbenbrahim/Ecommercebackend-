// const user = require("./../models/user");
// const bcrypt =require("bcrypt");

// exports.createuser = async (req, res) => {
//   const { username, email, password } = req.body;
//   const hachedPassword = await bcrypt.hash(password,8)
//   const user = new user({ username , email , password
//     // username,
//     email,
//     password,
//   });
//   try {
//     const saveduser = await user.save();
//     res.json(saveduser);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };
