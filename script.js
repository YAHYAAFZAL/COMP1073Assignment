// script.js

// Arrays containing words or phrases for each part of the sentence
const subjects = ["The turkey", "My teacher", "The cat", "The dog", "Mom"];
const verbs = ["sat on", "danced with", "saw", "doesn't like", "kissed"];
const adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking"];
const nouns = ["goat", "monkey", "cow", "frog", "bug"];
const locations = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass"];

// Store user's selected words
let selectedWords = {
    subject: "",
    verb: "",
    adjective: "",
    noun: "",
    location: ""
};

// Function to cycle through word choices
function cycleWord(category, buttonId) {
    let choices;
    switch (category) {
        case 'subject': choices = subjects; break;
        case 'verb': choices = verbs; break;
        case 'adjective': choices = adjectives; break;
        case 'noun': choices = nouns; break;
        case 'location': choices = locations; break;
    }
    
    let currentIndex = choices.indexOf(selectedWords[category]);
    let nextIndex = (currentIndex + 1) % choices.length;
    selectedWords[category] = choices[nextIndex];
    document.getElementById(buttonId).innerText = choices[nextIndex];
}

// Function to generate and display the final story
function generateStory() {
    const story = `${selectedWords.subject} ${selectedWords.verb} ${selectedWords.adjective} ${selectedWords.noun} ${selectedWords.location}.`;
    document.getElementById("storyOutput").innerText = story;
}

// Function to generate a random story
function generateRandomStory() {
    selectedWords.subject = subjects[Math.floor(Math.random() * subjects.length)];
    selectedWords.verb = verbs[Math.floor(Math.random() * verbs.length)];
    selectedWords.adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    selectedWords.noun = nouns[Math.floor(Math.random() * nouns.length)];
    selectedWords.location = locations[Math.floor(Math.random() * locations.length)];
    generateStory();
}
