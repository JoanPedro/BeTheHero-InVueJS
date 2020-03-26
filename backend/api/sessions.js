module.exports = app => {

    const create  = async (req, res) => {
        
        const ong = {...req.body}
        var ongFromDB
        try {

            ongFromDB = await app.db('ongs')
                .select('name')
                .where({id: ong.id})
                .first()

            if(!ongFromDB){
                return res.status(400).send('No ONG found with this ID')
            }
        } catch (e) {
            return res.status(400).send(e)
        }

        return res.json(ongFromDB)
    }

    return { create }
}