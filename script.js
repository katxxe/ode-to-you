let noCount = 0;

function showMessage(answer) {
    const messageText = document.getElementById('message-text');
    document.getElementById('main-screen').classList.add('hidden');
    document.getElementById('message-screen').classList.remove('hidden');

    if (answer === 'yes') {
        messageText.textContent = 'You are my blue';
        noCount = 0; // Reset noCount on "yes"
    } else {
        noCount++;
        if (noCount === 1) {
            messageText.textContent = 'Let me ask you again';
        } else {
            messageText.textContent = 'Just pick YES, come on!';
            document.getElementById('yes-button').style.display = 'block';
            document.getElementById('no-button').style.display = 'none'; // Hide the No button
        }
    }
}

document.getElementById('message-screen').addEventListener('click', () => {
    if (noCount === 1) {
        document.getElementById('message-screen').classList.add('hidden');
        document.getElementById('main-screen').classList.remove('hidden');
    } else if (noCount > 1) {
        document.getElementById('message-screen').classList.add('hidden');
        document.getElementById('main-screen').classList.remove('hidden');
        noCount = 0; // Reset for next loop
    } else {
        document.getElementById('message-screen').classList.add('hidden');
        document.getElementById('poem-screen').classList.remove('hidden');
    }
});

// Navigate to the second poem
document.getElementById('poem-screen').addEventListener('click', () => {
    document.getElementById('poem-screen').classList.add('hidden');
    document.getElementById('second-poem-screen').classList.remove('hidden');
});

// Navigate to the love screen after the second poem
document.getElementById('second-poem-screen').addEventListener('click', () => {
    document.getElementById('second-poem-screen').classList.add('hidden');
    document.getElementById('love-screen').classList.remove('hidden');
});

