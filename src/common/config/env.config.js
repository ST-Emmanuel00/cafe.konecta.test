import Joi from 'joi';

const envsSchema = Joi.object({
    PORT: Joi.number().integer().max(9999).required().default(3001),
    NODE_ENV: Joi.string().required(),
    // DATABASE_URL: Joi.string().required()
}).unknown(true);

const { error, value } = envsSchema.validate(process.env);

if (error) {
    console.error(`Config validation error: ${error.message}`);
    throw new Error('Config validation error');
}

export const envsValues = {
    PORT: value.PORT,
    DATABASE_URL: value.DATABASE_URL,
    NODE_ENV: value.NODE_ENV
};

console.log(`Envs ok: ${envsValues.NODE_ENV}`);