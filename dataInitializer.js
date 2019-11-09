module.exports = {
  createUser: function () {
    const bcrypt = require('bcryptjs');
    const config = require('config');
    const jwt = require('jsonwebtoken');

    // User Model
    const User = require('./models/User');

    User.find({ username: process.env.ADMIN_USERNAME }).exec(function (err, docs) {
      if (docs.length) {
        console.log(process.env.ADMIN_USERNAME + " already exists in db!")
      } else {
        const newUser = new User({
          username: process.env.ADMIN_USERNAME,
          password: process.env.ADMIN_PASSWORD
        });

        // Create salt & hash
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(user => {
                jwt.sign(
                  { id: user.id },
                  config.get('jwtSecret'),
                  { expiresIn: 3600 },
                  (err, token) => {
                    if (err) throw err;
                    res.json({
                      token,
                      user: {
                        id: user.id,
                        name: user.name,
                        email: user.email
                      }
                    });
                  }
                )
              });
          })
        })
      }
    })
  }
}