import User from "../models/user.model.js";

const loginController = async (req, res) => {
    const foundUser = await User.findOne({
        email: req.body.email,
        password: req.body.password
    })

    if(foundUser) {
        const token = jwt.sign(
            {
                name: foundUser.name,
                email: foundUser.email
            }, 
            'lrie4636ytoruetf424goa646dudpqw2342522reyf242ewihfelwido'
        )

        return res.json({ status: "ok", user: token });
    } else {
        return res.json({ status: "error", user: false });
    }
}

export default loginController;