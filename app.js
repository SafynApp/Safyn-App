/**
 * app.js
 * * This file contains the core JavaScript for the Safyn application.
 * It initializes the Leaflet map, gets the user's current location,
 * and handles click events for the main navigation buttons.
 */

// --- GLOBAL VARIABLES ---
// Store the map instance and the marker for the user's location.
let map;
let userMarker;

// --- GEOLOCATION AND MAP INITIALIZATION ---

/**
 * Initializes the map and requests the user's location.
 * This is the main function that kicks off the app.
 */
function initializeApp() {
    // Check if the Geolocation API is available in the user's browser.
    if ("geolocation" in navigator) {
        // Request the user's current position.
        // The first argument is the success callback, the second is the error callback.
        navigator.geolocation.getCurrentPosition(onLocationSuccess, onLocationError);
    } else {
        // If geolocation is not supported, log an error and initialize the map at a default location.
        console.error("Geolocation is not supported by this browser.");
        initMap(null);
    }
}

/**
 * Callback function for a successful geolocation request.
 * @param {GeolocationPosition} position - The object containing the user's coordinates.
 */
function onLocationSuccess(position) {
    const { latitude, longitude } = position.coords;
    console.log(`User's current location: Latitude ${latitude}, Longitude ${longitude}`);
    // Initialize the map centered on the user's location.
    initMap([latitude, longitude]);
}

/**
 * Callback function for a failed geolocation request.
 * @param {GeolocationPositionError} error - The error object.
 */
function onLocationError(error) {
    console.error(`Error getting user's location: ${error.message}`);
    // Initialize the map at a default location (e.g., the center of the world or a specific city)
    // since we can't get the user's current location.
    initMap([20.5937, 78.9629]); // Center of India as a default.
}

/**
 * Initializes the Leaflet map and sets its view.
 * @param {Array<number>|null} initialCoords - An array containing [latitude, longitude] or null if location isn't available.
 */
function initMap(initialCoords) {
    // Set a default center if no coordinates are provided.
    const center = initialCoords || [20.5937, 78.9629];
    const zoomLevel = initialCoords ? 15 : 5;

    // Initialize the map on the 'map' div.
    map = L.map('map').setView(center, zoomLevel);

    // Add a tile layer from OpenStreetMap. This provides the visual map data.
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // If we have an initial location, add a marker for the user.
    if (initialCoords) {
        userMarker = L.marker(initialCoords).addTo(map)
            .bindPopup('You are here!').openPopup();
    }
}


// --- BUTTON EVENT HANDLERS ---

/**
 * Handles the click event for the "Mark Spot" button.
 */
function handleMarkSpot() {
    console.log("Mark Spot button clicked!");
    // TODO: Add logic to mark a specific point on the map.
}

/**
 * Handles the click event for the "SOS" button.
 */
function handleSOS() {
    console.log("SOS button clicked!");
    // TODO: Add logic for emergency alerts.
}

/**
 * Handles the click event for the "Route" button.
 */
function handleRoute() {
    console.log("Route button clicked!");
    // TODO: Add logic to calculate and display a safe route.
}


// --- ADD EVENT LISTENERS ONCE THE DOCUMENT IS READY ---
document.addEventListener('DOMContentLoaded', () => {
    // Find the buttons by their ID and attach the click event handlers.
    const markSpotButton = document.getElementById('mark-spot-button');
    const sosButton = document.getElementById('sos-button');
    const routeButton = document.getElementById('route-button');

    if (markSpotButton) {
        markSpotButton.addEventListener('click', handleMarkSpot);
    } else {
        console.error("Could not find Mark Spot button.");
    }

    if (sosButton) {
        sosButton.addEventListener('click', handleSOS);
    } else {
        console.error("Could not find SOS button.");
    }

    if (routeButton) {
        routeButton.addEventListener('click', handleRoute);
    } else {
        console.error("Could not find Route button.");
    }

    // Call the main initialization function.
    initializeApp();
});
