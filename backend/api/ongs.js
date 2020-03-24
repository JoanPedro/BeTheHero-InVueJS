const crypto = require('crypto')

module.exports = app => {

    const create = async(req, res) => {
        const ongs = {...req.body }
        
        ongs.id = crypto.randomBytes(4).toString('HEX')

        return res.json()
    }
    /*
    const get = (req, res) => {
        app.db('users')
            .select('id', 'name', 'email', 'adminMaster', 'adminEnterprise',
                'manager', 'customer', 'gerencialUrl', 'operacionalUrl')
            .whereNull('deletedAt')
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('users')
            .select('id', 'name', 'email', 'adminMaster', 'adminEnterprise',
                'manager', 'customer', 'gerencialUrl', 'operacionalUrl')
            .whereNull('deletedAt')
            .where({ id: req.params.id })
            .first()
            .then(user => res.json(user))
            .catch(err => res.status(500).send(err))
    }

    const remove = async(req, res) => {
        try {
            const rowsUpdated = await app.db('users')
                .update({ deletedAt: new Date() })
                .where({ id: req.params.id })
            existsOrError(rowsUpdated, 'Usuário não foi encontrado!')

            res.status(204).send()
        } catch (msg) {
            res.status(400).send(msg)
        }
    }
    */
    return { create /*, get, getById, remove*/ }

}