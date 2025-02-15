// script.js

// Define arrays of possible choices
const characters = ['The dog', 'The cat', 'A dragon', 'A robot', 'The bird'];
const actions = ['ran', 'jumped', 'slept', 'sang', 'danced'];
const objects = ['a ball', 'a toy', 'a book', 'a hat', 'a stick'];
const settings = ['in the park', 'on the moon', 'at the beach', 'in the forest', 'in the city'];
const times = ['in the morning', 'at night', 'during the day', 'at sunset', 'at dawn'];

// Variables to store the user's choices
let part1Choice = '';
let part2Choice = '';
let part3Choice = '';
let part4Choice = '';
let part5Choice = '';

// Functions to cycle through the choices and update the displayed choice
function cycleChoice(array, part) {
    let currentIndex = array.indexOf(part);
    currentIndex = (currentIndex + 1) % array.length;
    return array[currentIndex];
}

// Event listeners for each button
document.getElementById('part1').addEventListener('click', function () {
    part1Choice = cycleChoice(characters, part1Choice);
    document.getElementById('part1-choice').textContent = part1Choice;
});

document.getElementById('part2').addEventListener('click', function () {
    part2Choice = cycleChoice(actions, part2Choice);
    document.getElementById('part2-choice').textContent = part2Choice;
});

document.getElementById('part3').addEventListener('click', function () {
    part3Choice = cycleChoice(objects, part3Choice);
    document.getElementById('part3-choice').textContent = part3Choice;
});

document.getElementById('part4').addEventListener('click', function () {
    part4Choice = cycleChoice(settings, part4Choice);
    document.getElementById('part4-choice').textContent = part4Choice;
});

document.getElementById('part5').addEventListener('click', function () {
    part5Choice = cycleChoice(times, part5Choice);
    document.getElementById('part5-choice').textContent = part5Choice;
});

// Function to display the final story
document.getElementById('showStory').addEventListener('click', function () {
    const story = `${part1Choice} ${part2Choice} ${part3Choice} ${part4Choice} ${part5Choice}.`;
    document.getElementById('storyOutput').textContent = story;

    // Optional: Add audio output
    const audio = new SpeechSynthesisUtterance(story);
    window.speechSynthesis.speak(audio);
});

// Function to generate a random story
document.getElementById('randomStory').addEventListener('click', function () {
    const randomStory = `${characters[Math.floor(Math.random() * characters.length)]} 
                         ${actions[Math.floor(Math.random() * actions.length)]} 
                         ${objects[Math.floor(Math.random() * objects.length)]} 
                         ${settings[Math.floor(Math.random() * settings.length)]} 
                         ${times[Math.floor(Math.random() * times.length)]}.`;

    document.getElementById('storyOutput').textContent = randomStory;

    // Optional: Add audio output
    const audio = new SpeechSynthesisUtterance(randomStory);
    window.speechSynthesis.speak(audio);
});

// Reset function
document.getElementById('reset').addEventListener('click', function () {
    part1Choice = '';
    part2Choice = '';
    part3Choice = '';
    part4Choice = '';
    part5Choice = '';

    document.getElementById('part1-choice').textContent = 'None';
    document.getElementById('part2-choice').textContent = 'None';
    document.getElementById('part3-choice').textContent = 'None';
    document.getElementById('part4-choice').textContent = 'None';
    document.getElementById('part5-choice').textContent = 'None';
    document.getElementById('storyOutput').textContent = 'Your story will appear here.';
});
