import * as Joi from 'joi';

export const configSchema = Joi.object({
  ENVIRONMENT: Joi.required(),
  HOST_BD_CORE: Joi.required(),
  PORT_BD_CORE: Joi.required(),
  NAME_BD_CORE: Joi.required(),
  USER_BD_CORE: Joi.required(),
  PASS_BD_CORE: Joi.required(),
});
