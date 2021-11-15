const Joi = require('joi');

function updateBookMiddleware(req, res, next) {
    const schema = Joi.object({
        title: Joi.string().required(),
        authorId: Joi.number().required(),
    });
   
    const { error, value } = schema.validate(req.body);

      
    if (error) {
        // on fail return comma separated errors
        return res.status(400).send(error.details.map(e => e.message).join(', '));
    } 

    next();
}


module.exports = updateBookMiddleware;