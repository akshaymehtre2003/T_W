// Initialize the map
function initMap() {
    const mapDiv = document.getElementById('map');
    const map = new google.maps.Map(mapDiv, {
        center: { lat: 0, lng: 0 },
        zoom: 8
    });

    // Add a click event listener to the "Locate My Location" button
    const locateButton = document.getElementById('locateUser');
    locateButton.addEventListener('click', () => {
        // Check if geolocation is available
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                // Set the map's center to the user's location
                map.setCenter(userLocation);

                // Create a marker to indicate the user's location
                const marker = new google.maps.Marker({
                    position: userLocation,
                    map: map,
                    title: 'Your Location'
                });
            });
        } else {
            alert('Geolocation is not supported by your browser.');
        }
    });
}
