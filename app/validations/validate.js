const validate = {

    queryString: (schema) => {
        return async (req, res, next) => {
            try {
                await schema.validateAsync(req.query);
                next();
            } catch (error) {
                return res.status(400).json({ error: error.details[0].message });
            }
        }
    },

    body: (schema) => {
        return async (req, res, next) => {
            try {
                await schema.validateAsync(req.body);
                next();
            } catch (error) {
                return res.status(400).json({ error: error.details[0].message });
            }
        }
    },

    params: (schema) => {
        return async (req, res, next) => {
            try {
                await schema.validateAsync(req.params);
                next();
            } catch (error) {
                return res.status(400).json({ error: error.details[0].message });
            }
        }
    }
}

module.exports = validate;