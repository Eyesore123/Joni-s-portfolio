let map;
async function initMap() {
        // Coordinates for your business location
        const location = { lat: 62.05625, lng: 28.22006 }; // Example: Helsinki, Finland

        const { Map } = await google.maps.importLibrary("maps");
        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

        // Create a map centered at the given coordinates
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 11, // Adjust zoom level
            center: location,
            mapId: "Laatumarjat",
        });

        // Add a marker at the specified location
        
        const marker = new AdvancedMarkerElement({
            map: map,
            position: location,
            title: 'Laatumarjat',
        });

    }   
