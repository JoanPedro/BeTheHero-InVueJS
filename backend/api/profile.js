module.exports = app => {
    const { existsOrError } = app.api.validation

    const list = async (req, res) => {
        const ong_id = req.headers.authorization
        
        ongFromDB = await app.db('ongs')
                        .select('*')
                        .where({ id: ong_id})
        
        let extractId = ongFromDB.map(value => value.id)

        try {
            existsOrError(extractId, 'Operation not autorized.')
        } catch (msg) {
            return res.status(400).send(msg)
        }

        await app.db('incidents')
            .where('ong_id', ong_id)
            .select('*')
            .then(incidents => res.json(incidents))
            .catch(err => res.status(500).send(err))
    }

    return { list }
}