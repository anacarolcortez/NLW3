const database = require('./db.js')
const saveOrphanage = require('./saveOrphanage.js')

database.then(async (db) => {

    await saveOrphanage(db, {
        lat: "-23.5378438",
        lng: "-46.6518204",
        name: "Great Home",
        about: "Lar temporário para crianças em situação de risco e/ou vulnerabilidade social",
        whatsapp: "1198123-4567",
        images: [
            "https://images.pexels.com/photos/1815257/pexels-photo-1815257.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://images.pexels.com/photos/1212805/pexels-photo-1212805.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://images.pexels.com/photos/1449934/pexels-photo-1449934.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://images.pexels.com/photos/256468/pexels-photo-256468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://images.pexels.com/photos/50581/girls-children-kids-friends-50581.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        ].toString(),
        instructions: "Venha com bastante paciência e carinho, além de muita disposição para brincar, contar historinhas e se divertir",
        opening_hours: "Das 15h às 17h",
        open_on_weekends: "1"
    })
    
    //await db.all('SELECT * FROM orphanages')

    //await db.all('SELECT * FROM orphanages WHERE id = 1')

    //await db.run('DELETE FROM orphanages WHERE id = 3')
    
})
