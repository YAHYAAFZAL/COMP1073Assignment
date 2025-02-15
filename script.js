// script.js

// Arrays holding possible words/phrases for each sentence part
const subjects = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The cat"];
const verbs = ["sat on", "danced with", "saw", "doesn't like", "kissed"];
const adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking"];
const nouns = ["goat", "monkey", "cow", "frog", "bug"];
const locations = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass"];

// Variables to store selected words
let selectedSubject = "";
let selectedVerb = "";
let selectedAdjective = "";
let selectedNoun = "";
let selectedLocation = "";

// Function to cycle through words
function cycleWord(category, buttonId) {
    let choices;
    switch(category) {
        case 'subject': choices = subjects; break;
        case 'verb': choices = verbs; break;
        case 'adjective': choices = adjectives; break;
        case 'noun': choices = nouns; break;
        case 'location': choices = locations; break;
    }
    let currentIndex = choices.indexOf(document.getElementById(buttonId).innerText);
    let newIndex = (currentIndex + 1) % choices.length;
    document.getElementById(buttonId).innerText = choices[newIndex];
    switch(category) {
        case 'subject': selectedSubject = choices[newIndex]; break;
        case 'verb': selectedVerb = choices[newIndex]; break;
        case 'adjective': selectedAdjective = choices[newIndex]; break;
        case 'noun': selectedNoun = choices[newIndex]; break;
        case 'location': selectedLocation = choices[newIndex]; break;
    }
}

// Function to generate and display the final story
function generateStory() {
    if (selectedSubject && selectedVerb && selectedAdjective && selectedNoun && selectedLocation) {
        document.getElementById("storyOutput").innerText = `${selectedSubject} ${selectedVerb} ${selectedAdjective} ${selectedNoun} ${selectedLocation}.`;
    } else {
        document.getElementById("storyOutput").innerText = "Please select all words to create a story.";
    }
}

// Function to generate a random story
function randomStory() {
    selectedSubject = subjects[Math.floor(Math.random() * subjects.length)];
    selectedVerb = verbs[Math.floor(Math.random() * verbs.length)];
    selectedAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    selectedNoun = nouns[Math.floor(Math.random() * nouns.length)];
    selectedLocation = locations[Math.floor(Math.random() * locations.length)];
    document.getElementById("storyOutput").innerText = `${selectedSubject} ${selectedVerb} ${selectedAdjective} ${selectedNoun} ${selectedLocation}.`;
}

// Function to reset selections
function resetStory() {
    document.getElementById("subjectButton").innerText = "Choose Subject";
    document.getElementById("verbButton").innerText = "Choose Verb";
    document.getElementById("adjectiveButton").innerText = "Choose Adjective";
    document.getElementById("nounButton").innerText = "Choose Noun";
    document.getElementById("locationButton").innerText = "Choose Location";
    document.getElementById("storyOutput").innerText = "";
    selectedSubject = "";
    selectedVerb = "";
    selectedAdjective = "";
    selectedNoun = "";
    selectedLocation = "";
}
