const router = require('express').Router();
let User = require('../models/user.model.js');

router.route('/').get((req, res) => {
    User.find()
      .then(users => res.json(users))
      .catch(err => res.status(400).json('error: ' + err));
  });


router.route('/add').post( (req, res) => {

    const username = req.body.username;
    console.log(username);

    const newUser = new User({username});
    newUser.save()
    .then(() =>
          
      res.json('User added'))
    .catch(err => 
      res.status(400).json('error: ' + err))
});

  module.exports = router;
