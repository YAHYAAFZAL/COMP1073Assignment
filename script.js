const words = {
    part1: ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The cat"],
    part2: ["sat on", "danced with", "saw", "doesn't like", "kissed"],
    part3: ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"],
    part4: ["goat", "monkey", "cow", "frog", "bug", "worm"],
    part5: ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"]
};

let selectedWords = {
    part1: words.part1[0],
    part2: words.part2[0],
    part3: words.part3[0],
    part4: words.part4[0],
    part5: words.part5[0]
};

document.querySelectorAll('.story-container button').forEach(button => {
    button.addEventListener('click', function() {
        let part = this.id;
        let index = words[part].indexOf(selectedWords[part]);
        selectedWords[part] = words[part][(index + 1) % words[part].length];
        this.textContent = selectedWords[part];
    });
});

document.getElementById('generate-story').addEventListener('click', function() {
    let story = `${selectedWords.part1} ${selectedWords.part2} ${selectedWords.part3} ${selectedWords.part4} ${selectedWords.part5}.`;
    document.getElementById('story-output').textContent = story;
});
