import User from "../models/user.model.js";

const registrationController = async (req, res) => {
    console.log(req.body);
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        res.json({ status: "ok" })
    } catch(error) {
        res.json({ status: "error", error: `${error.message}`});
    }
}

export default registrationController;
