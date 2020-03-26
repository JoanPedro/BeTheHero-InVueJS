module.exports = app => {

    const { existsOrError, equalsOrError } = app.api.validation

    const create = async(req, res) => {
        const incident = {...req.body}
        
        incident.ong_id = req.headers.authorization

        try {
            existsOrError(incident.ong_id, 'ID da ONG não validado.')
            existsOrError(incident.title, 'Título não informado.')
            existsOrError(incident.description, 'Descrição não informado.')
            existsOrError(incident.value, 'Valor não informado.')

        } catch (msg) {
            return res.status(400).send(msg)
        }
        
        const [id] = await app.db('incidents')
                        .insert(incident)
                        .catch(err => res.status(500).send(err))
            
        return res.json( { id })
    }

    const list = async (req, res) => {


        // Contador por Header: Conceito novo. Retorna o total da consulta atraves do Header
        const [count] = await app.db('incidents').count()
        res.header('X-Total-Count', count['count(*)']) /* Retorna a Propriedade Count(x)
                                                        * retornado da consulta dentro da
                                                        variável count */ 
                                                        
        // Paginação: Conceito novo... mainUrl/incidents?page=1 ;page=2; page=3....
        const { page = 1 } = req.query
        await app.db('incidents')
            .limit(5) // Paginação
            .offset((page - 1) * 5) // Paginação
            .select('*')
            .then(incidents => res.json(incidents))
            .catch(err => res.status(500).send(err))

    }

    const remove = async (req, res) => {

        const { id } = req.params
        const ong_id = req.headers.authorization

        const incident = await app.db('incidents')
                            .select('ong_id')
                            .where('id', id)
                            .first()
                            .catch(err => res.status(500).send(err))
        
        try {
            equalsOrError(incident.ong_id, ong_id,
            'Operation not permitted.')
        } catch (msg) {
            return res.status(401).send(msg)
        }

        await app.db('incidents')
            .where('id', id)
            .delete()
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))
    }

    return { create, list, remove }

}