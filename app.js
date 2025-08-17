/*
 * Safyn - Hope in your hands. Community at your side.
 * Copyright (c) 2025, Prasurjya [Your Last Name] - All Rights Reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 *
 * This digital watermark proves original authorship.
 */

// This function runs only after the entire HTML page has loaded
document.addEventListener('DOMContentLoaded', () => {

    // --- Map Initialization (Moved Inside) ---
    // Initialize the map and set its view to our chosen geographical coordinates and a zoom level
    // Coordinates for Jaipur, Rajasthan
    const map = L.map('map-placeholder').setView([26.9124, 75.7873], 13);

    // Add a tile layer to the map (the actual map images)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    // --- End of Map Initialization ---


    // --- Button Interactivity ---
    // Find our three main buttons in the HTML
    const sosButton = document.querySelector('#sos-button');
    const markSpotButton = document.querySelector('#mark-spot-button');
    const routeButton = document.querySelector('#route-button');

    console.log("Safyn app initialized. Map and buttons are ready.");

    // Add a 'click' listener to the SOS button
    sosButton.addEventListener('click', () => {
        console.log("SOS Button Clicked! Initiating emergency protocol...");
    });

    // Add a 'click' listener to the Mark Spot (+) button
    markSpotButton.addEventListener('click', () => {
        console.log("Mark Spot Button Clicked! Ready to report an issue.");
    });

    // Add a 'click' listener to the Route button
    routeButton.addEventListener('click', () => {
        console.log("Route Button Clicked! Opening safe route planner.");
    });
    // --- End of Button Interactivity ---

});