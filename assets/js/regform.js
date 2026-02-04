const btn = document.getElementById("registerToggle");
const panel = document.getElementById("registerPanel");

let isOpen = false;

function openPanel() {
    // Start from current height (0), then animate to scrollHeight
    panel.style.height = panel.scrollHeight + "px";
    btn.setAttribute("aria-expanded", "true");
    isOpen = true;

    // After animation, set to auto so it can grow if content changes
    panel.addEventListener("transitionend", function handler(e) {
    if (e.propertyName === "height" && isOpen) {
        panel.style.height = "auto";
        panel.removeEventListener("transitionend", handler);
    }
    });
}

function closePanel() {
    // If it's auto, convert to a pixel height first so we can animate down to 0
    panel.style.height = panel.scrollHeight + "px";
    // Force a reflow so the browser registers the height before we change it
    panel.offsetHeight;
    panel.style.height = "0px";

    btn.setAttribute("aria-expanded", "false");
    isOpen = false;
}

btn.addEventListener("click", () => {
    if (!isOpen) openPanel();
    else closePanel();
});

// Optional: keep it correct if the window resizes while open
window.addEventListener("resize", () => {
    if (isOpen) {
    panel.style.height = "auto";
    panel.style.height = panel.scrollHeight + "px";
    }
});






// Subject-Topic selection
const subject = document.getElementById("subject");
const topic = document.getElementById("topic");

const topicMap = {
    math: ["Algebra I-II", "Pre-Calculus", "Calc I/AP Calc AB", "Calc II/AP Calc BC", "Statistics"],
    physics: ["non-AP", "AP Physics 1 (Algebra-based)", "AP Physics 2 (Algebra-based)", "Phys I/AP Phys C: Mechanics", "Phys II/AP Phys C: Electricity & Magnetism"],
    compsci: ["General Intro", "AP Computer Science A"],
    essay: ["General consultation"]
};

subject.addEventListener("change", () => {
const val = subject.value;

// Clear existing options
topic.innerHTML = "";

if (!val) {
    topic.disabled = true;
    topic.innerHTML = `<option value="">Select a subject first…</option>`;
    return;
}

// Populate new options
topic.disabled = false;
topic.innerHTML = `<option value="">Select…</option>` + 
    topicMap[val].map(t => `<option value="${t}">${t}</option>`).join("");
});

