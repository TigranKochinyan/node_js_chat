const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');


router.get('/', (req, res) => {
  res.send('hey is users route');
});

// UPDATE USER
router.put('/:id', async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
        if(req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                // const  = await bcrypt.genSalt();
                req.body.password = await bcrypt.hash(req.body.password, salt)
            } catch (err) {
                console.log(err);
                return res.status(500).json('somthing was wrong');
            }
        }
      try {
        const user = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        });
        res.status(200).json("Account updated");
      } catch (err) {
        res.status(500).json(err);
      }
  } else {
      res.ststus(403).json('you can update only your account')
  }
});

// DELETE USER
router.delete('/:id', async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
          if(req.body.password) {
              try {
                  const salt = await bcrypt.genSalt(10);
                  req.body.password = await bcrypt.hash(req.body.password, salt)
              } catch (err) {
                  console.log(err);
                  return res.status(500).json('somthing was wrong');
              }
          }
        try {
          const user = await User.findByIdAndDelete(req.params.id);
          res.status(200).json("Account has been deleted succsess");
        } catch (err) {
          res.status(500).json(err);
        }
    } else {
        res.status(403).json('you can delete only your account')
    }
});

// GET A USER
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.param.id);
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json('somthing went wrong');
    }
});

// FOLLOW USER
// UNFOLLOW USER



module.exports = router;