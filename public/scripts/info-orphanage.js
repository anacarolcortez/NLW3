const options = ({
    dragging: false,
    touchZomm: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
})

const map = L.map('mapid', options).setView([-23.5428164,-46.6416237], 12)

L
.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map)

const icon = L.icon({
    iconUrl: './public/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170,2]
})

L
.marker([-23.5428164,-46.6416237], {icon: icon})
.addTo(map)

function selectImage(event) {
    const btn = event.currentTarget
    
    const allBtn = document.querySelectorAll(".images button")

    allBtn.forEach( b => {
        b.classList.remove("active")
    })

    btn.classList.add("active")

    const image = btn.children[0] //posicao 0 é a imagem
    const imageContainer = document.querySelector(".orphanage-details > img")
    imageContainer.src = image.src
}