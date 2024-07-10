// Function to calculate distance in blocks from headquarters
function distanceFromHqInBlocks(blocks) {
    const hq = 42; // Headquarters location
    return Math.abs(blocks - hq);
}

// Function to calculate distance in feet from headquarters
function distanceFromHqInFeet(blocks) {
    const block = 264; // Each block is 264 feet
    return distanceFromHqInBlocks(blocks) * block;
}

// Function to calculate distance travelled in feet between two locations
function distanceTravelledInFeet(start, destination) {
    const distance = Math.abs(start - destination);
    const block = 264; // Each block is 264 feet
    return distance * block;
}

// Function to calculate fare price based on distance travelled
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    // Pricing conditions
    if (distance <= 400) {
        return 0; // Free sample if distance is 400 feet or less
    } else if (distance > 400 && distance <= 2000) {
        // 2 cents per foot after the first 400 feet
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25; // Flat fare of $25 for distances over 2000 feet up to 2500 feet
    } else {
        return 'cannot travel that far'; // Cannot travel distances over 2500 feet
    }
}

// Export functions if used in a module (optional)
module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice
};

