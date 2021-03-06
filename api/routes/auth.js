const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

router.get('/', async (req, res) => {
    res.send('sssssssssok');
});

router.post('/register', async (req, res) => {
    try {
        // generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // create new password
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });

        // save user and respond
        const user = await newUser.save();
        res.status(200).json(user);
    } catch(err) {
        console.log(err);
        res.send(err).status(500);
    }
});

// LOGIN 
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(404).send('user not found');
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        !validPassword && res.status(404).send('wrong data');

        res.status(200).json(user);
    } catch (err) {
        console.log(err);
        res.send('loggin failed').status(500);
    }
});





module.exports = router;


// try {
//     const user = await new User({
//         username: 'sdeeeef',
//         email: 'jhon1234@gmail.com',
//         password: '45645'
//     });
//     await user.save();
//     res.send('ok');
//  }
//  catch (e) {
//     res.send('chok');
//  }