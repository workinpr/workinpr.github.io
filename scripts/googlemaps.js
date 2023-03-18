function initMap() {
    let myCenter = new google.maps.LatLng(18.403583, -66.056657)
    let mapCanvas = document.getElementById("googleMap")
    let mapOptions = {
        center: myCenter,
        zoom: 14,
        mapTypeControl: true,
        mapTypeControlOptions: {
            mapTypeIds: [
                google.maps.MapTypeId.ROADMAP,
                google.maps.MapTypeId.SATELLITE,
            ],
        },
        streetViewControl: false,
    }
    let map = new google.maps.Map(mapCanvas, mapOptions)
    let marker = new google.maps.Marker({ position: myCenter })

    marker.setMap(map);
    google.maps.event.addListener(marker, 'click', () => {
        new google.maps.InfoWindow({
            content: "Come visit us! WorkIn Suites & Co."
        }).open(map, marker)
    })
}

window.initMap = initMap
