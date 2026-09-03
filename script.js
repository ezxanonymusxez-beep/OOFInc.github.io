script.js

/*
    OOF INCORPORATION — KEY SYSTEM

    IMPORTANT:

    YouTube:
    - Starts incomplete
    - Clicking the button opens YouTube
    - After clicking, YouTube becomes COMPLETED

    Roblox:
    - Starts incomplete
    - Clicking the button opens Roblox
    - Roblox NEVER becomes completed

    Therefore:
    Maximum progress = 1 / 2
    The key can NEVER be unlocked from this page.
*/


let youtubeCompleted = false;


/* =========================
   YOUTUBE
========================= */

function completeYouTube() {

    youtubeCompleted = true;

    const requirement =
        document.getElementById("youtubeRequirement");

    const status =
        document.getElementById("youtubeStatus");

    const icon =
        document.getElementById("youtubeIcon");


    requirement.classList.add("done");

    status.textContent = "Completed";

    icon.textContent = "✓";


    updateProgress();
}


/* =========================
   ROBLOX
========================= */

function openRoblox() {

    /*
        DO NOT set robloxCompleted = true.

        Roblox must ALWAYS remain incomplete.
    */

    const requirement =
        document.getElementById("robloxRequirement");

    const status =
        document.getElementById("robloxStatus");

    const icon =
        document.getElementById("robloxIcon");


    requirement.classList.remove("done");

    status.textContent = "Not completed";

    icon.textContent = "🔒";


    updateProgress();
}


/* =========================
   PROGRESS
========================= */

function updateProgress() {

    /*
        Only YouTube can ever count.

        0 / 2  → before YouTube click
        1 / 2  → after YouTube click

        Roblox can never increase this number.
    */

    const completed = youtubeCompleted ? 1 : 0;


    document.getElementById("progressText").textContent =
        `${completed} / 2`;


    document.getElementById("progressBar").style.width =
        `${(completed / 2) * 100}%`;


    const keyButton =
        document.getElementById("keyButton");

    const keyButtonText =
        document.getElementById("keyButtonText");


    /*
        The key is ALWAYS locked.

        There is intentionally no condition that can
        make this button available.
    */

    keyButton.disabled = true;

    keyButtonText.textContent =
        "🔒 Complete all requirements";
}


/* =========================
   INITIAL STATE
========================= */

document.addEventListener("DOMContentLoaded", () => {

    youtubeCompleted = false;

    /*
        Roblox has no completion variable at all.
        It will therefore always remain incomplete.
    */

    updateProgress();

});
