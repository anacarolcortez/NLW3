const database = require('./db.js')
const saveOrphanage = require('./saveOrphanage.js')

database.then(async (db) => {
    /*
    await saveOrphanage(db, {
        lat: "-23.5207182",
        lng: "-46.6557984",
        name: "Recanto do Sol",
        about: "Presta assistência a crianças em situação de risco e/ou vulnerabilidade social",
        whatsapp: "1199456-7891",
        images: [
            "https://images.pexels.com/photos/159579/crayons-coloring-book-coloring-book-159579.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://images.pexels.com/photos/296308/pexels-photo-296308.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://images.pexels.com/photos/1212805/pexels-photo-1212805.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://images.pexels.com/photos/1741230/pexels-photo-1741230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://images.pexels.com/photos/1019470/abacus-mathematics-addition-subtraction-1019470.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://images.pexels.com/photos/161593/baby-child-kid-girl-161593.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        ],
        instructions: "Venha com bastante paciência e carinho, além de muita disposição para brincar, contar historinhas e se divertir",
        opening_hours: "Das 15h às 18h",
        open_on_weekends: "0"
    })*/
    
    

    //await db.all('DELETE FROM orphanages WHERE id=10') 
    
    console.log(await db.all('SELECT * FROM orphanages')) 

    
})
