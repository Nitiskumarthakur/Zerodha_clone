const Joi = require("joi");

module.exports.signupSchema = Joi.object({
    email: Joi.string()
        .email()
        .required(),

    username: Joi.string()
        .min(3)
        .max(20)
        .required(),

    password: Joi.string()
        .min(3)
        .required()
});