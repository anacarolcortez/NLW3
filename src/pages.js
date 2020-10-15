const allOrphanages = require('./database/fakedata.js')


module.exports = {
    index(request, response) {
        return response.render('index')
    },

    orphanages(request, response){
        return response.render('orphanages', { allOrphanages })
    },

    infoOrphanage(request,response){
        return response.render('info-orphanage')
    },

    createOrphanage(request, response) {
        return response.render('create-orphanage')
    }
}