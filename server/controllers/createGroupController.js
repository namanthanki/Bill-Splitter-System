import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

const createGroupController = async (req, res) => {
    const token = req.headers["x-access-token"];

    try {
        const decoded = jwt.verify(token, "lrie4636ytoruetf424goa646dudpqw2342522reyf242ewihfelwido");
        const email = decoded.email;
        await User.updateOne(
            { email: email },
            { $set: { groupMembers: req.body.groupMembers }}
        );

        return res.json({ status: "ok" });
    } catch(error) {
        console.log(error);
        return res.json({ status: "error", error: "Invalid Token" })
    }
}

export default createGroupController;