const userCtrl = {};

const User = require('../models/User');

userCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users)

}
userCtrl.createUsers = async (req, res, ) => {
    const {useremail,userpassword,username} = req.body;
    if (!useremail) {
       return res.send({
            success: false,
            message: 'Error: Email is require.'
        });
    }
    if (!userpassword) {
        return res.send({
            success: false,
            message: 'Error: User password is require.'
        });
    }
    if (!username) {
       return res.send({
            success: false,
            message: 'Error: User name is require.'
        });
    }

      const user = await User.findOne({ username: req.body.username});
      if (user) {
        return res.status(301).json({ msg: "The username already Exist" });
      } 
      const email = await User.findOne({useremail: req.body.useremail})
      if (email) {
          return res.status(302).json({ msg: "the email alredy exist."});
      }
      
      

      
     
      const newUser = new User(req.body);
      await newUser.save();
      return res.status(201).json(newUser);
           
    
}

userCtrl.deleteUsers = async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
    res.json('User Deleted')
}

module.exports = userCtrl;