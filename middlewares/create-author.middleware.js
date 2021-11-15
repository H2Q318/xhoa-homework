const Joi = require('joi');

function createAuthorMiddleware(req, res, next) {
    const schema = Joi.object({
        name: Joi.string().required(),
        address: Joi.string().required(),
    });
   
    const { error, value } = schema.validate(req.body);

      
    if (error) {
        // on fail return comma separated errors
        return res.status(400).send(error.details.map(e => e.message).join(', '));
    } 

    next();
}


module.exports = createAuthorMiddleware;