let isHappy = true; // Variable to track Emoji Man's state

// Get DOM elements
const emojiMan = document.getElementById("emojiMan");
const toggleButton = document.getElementById("toggleButton");
const status = document.getElementById("status");
const downloadButton = document.getElementById("downloadButton");

// Function to update Emoji Man's state
function updateEmojiMan() {
    if (isHappy) {
        emojiMan.textContent = "😢"; // Sad face
        status.textContent = "Emoji Man is sad!";
        toggleButton.textContent = "Make Emoji Man Happy";
    } else {
        emojiMan.textContent = "😊"; // Happy face
        status.textContent = "Emoji Man is happy!";
        toggleButton.textContent = "Make Emoji Man Sad";
    }
}

// Event listener for toggle button
toggleButton.addEventListener("click", function() {
    isHappy = !isHappy; // Toggle the state
    updateEmojiMan(); // Update the display
});

// Function to download the current status as a text file
function downloadStatus() {
    const blob = new Blob([status.textContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'emoji_man_status.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Event listener for download button
downloadButton.addEventListener("click", downloadStatus);