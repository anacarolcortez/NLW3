const map = L.map('mapid').setView([-23.5428164,-46.6416237], 12)

L
.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map)

const icon = L.icon({
    iconUrl: './public/images/map-marker.svg',
    iconSize: [58, 68]
})

let marker;

map.on('click', (event) => {
    const latitude = event.latlng.lat;
    const longitude = event.latlng.lng;
    
    document.querySelector('[name=lat]').value = latitude;
    document.querySelector('[name=lng]').value = longitude;

    marker && map.removeLayer(marker)

    marker = L.marker([latitude, longitude], {icon}).addTo(map)
})

function addPhotoField() {
    const container = document.querySelector("#images")
    const fieldsContainer = document.querySelectorAll('.new-upload')
    const newFieldContainer = fieldsContainer[fieldsContainer.length-1].cloneNode(true)

    if (!newFieldContainer.children[0].value){
        alert("Adicione uma foto por vez")
    } else {
        newFieldContainer.children[0].value = ""
        container.appendChild(newFieldContainer)
    }
}

function deletePhotoField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if (fieldsContainer.length < 2){
        alert("É preciso cadastrar pelo menos uma foto")
        return
    }

    span.parentNode.remove()
}

function selectBtn(event) {
    document.querySelectorAll(".button-select button").forEach( function(button) {
        button.classList.remove("active")
    })

    const btn = event.currentTarget

    btn.classList.add("active")

    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = btn.dataset.value
}
