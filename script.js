const YOUTUBE_URL = "https://www.youtube.com/@KisScrr";
const ROBLOX_URL = "https://roblox.com.bz/communities/8760152165/";

let youtubeCompleted = false;

// Roblox può essere aperto, ma non viene marcato come completato.
function openYouTube() {
    window.open(YOUTUBE_URL, "_blank", "noopener,noreferrer");

    youtubeCompleted = true;

    document
        .getElementById("youtubeRequirement")
        .classList.add("done");

    document.getElementById("youtubeStatus").textContent = "Completed";
    document.getElementById("youtubeIcon").textContent = "✓";

    updateProgress();
}

function openRoblox() {
    // Apre normalmente l'invito/gruppo Roblox
    window.open(ROBLOX_URL, "_blank", "noopener,noreferrer");

    // INTENZIONALMENTE NON COMPLETA IL REQUISITO
    // Roblox rimane sempre incompleto.
    document
        .getElementById("robloxRequirement")
        .classList.remove("done");

    document.getElementById("robloxStatus").textContent = "Not completed";
    document.getElementById("robloxIcon").textContent = "🔒";

    updateProgress();
}

function updateProgress() {
    const completed = youtubeCompleted ? 1 : 0;

    document.getElementById("progressText").textContent =
        `${completed} / 2`;

    document.getElementById("progressBar").style.width =
        `${(completed / 2) * 100}%`;

    const keyButton = document.getElementById("keyButton");
    const keyButtonText = document.getElementById("keyButtonText");

    // Non sarà mai possibile arrivare a 2/2
    keyButton.disabled = true;
    keyButtonText.textContent = "🔒 Complete all requirements";
}
