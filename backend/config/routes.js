module.exports = app => {
    /*
    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.auth.signin)
    app.post('/validateToken', app.api.auth.validateToken)
    app.put('/users/:id', app.api.user.save)
    */

    app.route('/ongs')
        .post(app.api.ongs.create)
        .get(app.api.ongs.list)
    
    app.route('/ongs/:name')
        .put(app.api.ongs.update)
        .get(app.api.ongs.listByName)
}