/*
 * Safyn - Hope in your hands. Community at your side.
 * Copyright (c) 2025, Prasurjya [Deka] - All Rights Reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 *
 * This digital watermark proves original authorship.
 */

// This function runs only after the entire HTML page has loaded
document.addEventListener('DOMContentLoaded', () => {

    // Find our three main buttons in the HTML
    const sosButton = document.querySelector('#sos-button');
    const markSpotButton = document.querySelector('#mark-spot-button');
    const routeButton = document.querySelector('#route-button');

    console.log("Safyn app initialized. All buttons are ready.");

    // Add a 'click' listener to the SOS button
    sosButton.addEventListener('click', () => {
        console.log("SOS Button Clicked! Initiating emergency protocol...");
        // Later, this will trigger the real SOS alert.
    });

    // Add a 'click' listener to the Mark Spot (+) button
    markSpotButton.addEventListener('click', () => {
        console.log("Mark Spot Button Clicked! Ready to report an issue.");
        // Later, this will open the reporting form.
    });

    // Add a 'click' listener to the Route button
    routeButton.addEventListener('click', () => {
        console.log("Route Button Clicked! Opening safe route planner.");
        // Later, this will open the map routing feature.
    });

});