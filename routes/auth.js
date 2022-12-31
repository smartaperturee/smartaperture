const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

const securepass = async (password) => {
    try {
        const passHash = await bcrypt.hash(password, 12);
        return passHash;

    } catch (error) {
        console.log(error.message)
    }
}

const User = require("../models/userSchema");

router.get('/', (req, res) => {
    res.send(`hello me router`)
});

router.post('/Registration405', async (req, res) => {



    try {
         const spassword =await securepass(req.body.password);
        const user = new User({
            email: req.body.email,
            password: spassword,
            is_admin: 0
        })
        const userData = await user.save()
        if (userData) {
            res.json({ message: "user logged is successfully" });
        }
        else {
            res.json({ message: "user logged is unsuccessfully" });
        }

    }
    catch (err) {
        console.log(err);
    }

})




router.post("/Login", async (req, res) => {

    try {
        const { email,password } = req.body;

        const userData = await User.findOne({ email:email });

        if (userData) {
            const isMatch = await bcrypt.compare(password, userData.password);

            if (isMatch) {
                
                if (userData.is_admin === 0) {
                    res.status(400)
                } else {
                    res.json({ message: "user logged is successfully" });
                }

            } else {
                res.status(400)
            }

        } else {
            res.status(400)

        }
    }
    catch (err) {
        console.log(err);
    }
})




module.exports = router;
