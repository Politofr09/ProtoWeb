const typingSpeed = 70; // Adjust typing speed here (in milliseconds)

document.addEventListener("DOMContentLoaded", function() {
    const textElements = document.querySelectorAll(".typing-text");

    function typeText(element, text, index, callback) {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            setTimeout(() => typeText(element, text, index + 1, callback), typingSpeed); 
        } else {
            if (callback) callback();
        }
    }

    function startTypingSequence(elements, currentIndex) {
        if (currentIndex < elements.length) {
            const element = elements[currentIndex];
            const text = element.textContent;
            element.textContent = "";
            element.style.visibility = "visible"; // Make the element visible before typing
            typeText(element, text, 0, () => startTypingSequence(elements, currentIndex + 1));
        }
    }

    startTypingSequence(textElements, 0);
});
