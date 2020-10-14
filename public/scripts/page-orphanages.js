const map = L.map('mapid').setView([-23.5428164,-46.6416237], 12)

L
.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map)

const icon = L.icon({
    iconUrl: './public/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170,2]
})

const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das crianças <a href="info-orphanage.html?id=1" class="choose-orphanage"><img src="./public/images/arrow-white.svg"></a>')

L
.marker([-23.5428164,-46.6416237], {icon: icon})
.addTo(map)
.bindPopup(popup)