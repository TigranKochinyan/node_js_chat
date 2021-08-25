const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');


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
        const user = await User.findById(req.params.id);
        const { password, updatedAt, ...other } = user._doc;
        res.status(200).json(other);
    } catch (err) {
        res.status(500).json('somthing went wrong s');
    }
});

// FOLLOW USER

router.put('/:id/follow', async (req, res) => {
	console.log('usersIds', req.body.userId, req.params.id );
	if(req.body.userId !== req.params.id) {
		try {
			const user = await User.findById(req.params.id);
			const currentUser = await User.findById(req.body.userId);
			if (!user.followers.includes(req.body.userId)) {
				await user.updateOne({$push: { followers: req.body.userId }});
				await currentUser.updateOne({$push: { followings: req.params.id }});
				res.status(200).json('user has been followed');
				return;
			} else {
				res.status(403).json('you already follow');
				return;
			}
		} catch(err) {
			res.status(500).json(err);
		}
	} else {
		res.status(403).json('you cant follow yourself')
	}
});
// UNFOLLOW USER

router.put('/:id/unfollow', async (req, res) => {
	console.log('usersIds', req.body.userId, req.params.id );
	if(req.body.userId !== req.params.id) {
		try {
			const user = await User.findById(req.params.id);
			const currentUser = await User.findById(req.body.userId);
			if (user.followers.includes(req.body.userId)) {
				await user.updateOne({$pull: { followers: req.body.userId }});
				await currentUser.updateOne({$pull: { followings: req.params.id }});
				res.status(200).json('user has been unfollowed');
				return;
			} else {
				res.status(403).json('you already unfollow');
				return;
			}
		} catch(err) {
			res.status(500).json(err);
		}
	} else {
		res.status(403).json('you cant unfollow yourself')
	}
});



module.exports = router;