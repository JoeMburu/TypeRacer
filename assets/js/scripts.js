
document.addEventListener('DOMContentLoaded', function() {
    const easyTexts = [
        "The cat sat on the mat.",
        "A quick brown fox jumps over the lazy dog.",
        "She sells seashells by the seashore."
    ];

    const mediumTexts = [
        "The quick brown fox jumps over the lazy dog near the river bank.",
        "She sells seashells by the seashore, where the waves crash.",
        "A journey of a thousand miles begins with a single step."
    ];

    const hardTexts = [
        "The quick brown fox jumps over the lazy dog near the river bank, while the sun sets in the horizon.",
        "She sells seashells by the seashore, where the waves crash and the seagulls cry.",
        "A journey of a thousand miles begins with a single step, but the path is fraught with challenges."
    ];

    const difficultySelect = document.getElementById('difficulty');
    const sampleTextDiv = document.getElementById('sample-text');

    function getRandomText(textArray) {
        const randomIndex = Math.floor(Math.random() * textArray.length);
        return textArray[randomIndex];
    }

    difficultySelect.addEventListener('change', function() {
        let selectedText;
        switch (difficultySelect.value) {
            case 'easy':
                selectedText = getRandomText(easyTexts);
                break;
            case 'medium':
                selectedText = getRandomText(mediumTexts);
                break;
            case 'hard':
                selectedText = getRandomText(hardTexts);
                break;
            default:
                selectedText = "Please select a difficulty level.";
        }
        sampleTextDiv.textContent = selectedText;
    });

    // Initialize with a random text from the default difficulty level
    sampleTextDiv.textContent = getRandomText(easyTexts);
});
