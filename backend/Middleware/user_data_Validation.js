const { signupSchema } = require("../SchemaValidation")

//for signup page 
module.exports.userValidation = async (req, res, next) => {
    const { error } = signupSchema.validate(req.body.user);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
}