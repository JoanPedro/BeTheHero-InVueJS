module.exports = app => {

    app.route('/ongs')
        .post(app.api.ongs.create)
        .get(app.api.ongs.list)
    
    app.route('/ongs/:name')
        .put(app.api.ongs.update)
        .get(app.api.ongs.listByName)

    app.route('/incidents')
        .post(app.api.incidents.create)
        .get(app.api.incidents.list)
    
    app.route('/incidents/:id')
        .delete(app.api.incidents.remove)
    
    app.route('/profile')
        .get(app.api.profile.list)
}