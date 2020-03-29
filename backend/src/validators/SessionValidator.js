const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
  post: celebrate({
    [Segments.BODY]: Joi.object().keys({
      id: Joi.string().required(),
    }),
  }),
};
