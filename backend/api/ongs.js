const crypto = require('crypto')

module.exports = app => {
const { existsOrError } = app.api.validation

    const create = async(req, res) => {
        const ong = {...req.body }
        
        ong.id = crypto.randomBytes(4).toString('HEX')

        try {
            existsOrError(ong.id, 'ID da ONG não validado.')
            existsOrError(ong.name, 'Nome não informado.')
            existsOrError(ong.email, 'E-mail não informado.')
            existsOrError(ong.whatsapp, 'Whatsapp não informado.')
            existsOrError(ong.city, 'Cidade não informada.')
            existsOrError(ong.uf, 'Unidade Federal não informada.')

        } catch (msg) {
            return res.status(400).send(msg)
        }

        await app.db('ongs').insert(ong)
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(`Email já cadastrado` /* Ou somente send(err) */))
        
    }

    const list = async (req, res) => {

        await app.db('ongs')
            .select('*')
            .then(ongs => res.json(ongs))
            .catch(err => res.status(500).send(err))

    }

    const listByName = async (req, res) => {
        
        await   app.db('ongs')
                .select('*')
                .where({ name: req.params.name })
                .first()
                .then(ongs => res.json(ongs))
                .catch(err => res.status(500).send(err))
    }

    const update = async(req, res) => {
        const ong = {...req.body }

        try {

            const ongFromDB = await app.db('ongs')
                .where({ name: req.params.name }).first()

            if (ongFromDB.name) {
                
            }
        } catch (msg) {
            return res.status(400).send('Nome não encontrado')
        }
        
        await    app.db('ongs')
                    .update(ong)
                    .where({ name: req.params.name })
                    .then(_ => res.status(204).send())
                    .catch(err => res.status(500).send(err))
            
    }

    return { create , list, listByName, update }

}