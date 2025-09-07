// Chat functionality
function sendMessage() {
    const input = document.getElementById('userInput');
    const messages = document.getElementById('messages');
    const userMessage = document.createElement('div');
    userMessage.className = 'message user-message bg-light p-2 rounded mb-2';
    userMessage.textContent = input.value;
    messages.appendChild(userMessage);

    const botMessage = document.createElement('div');
    botMessage.className = 'message bot-message bg-primary text-white p-2 rounded mb-2';
    botMessage.textContent = 'Thank you for sharing!';
    messages.appendChild(botMessage);

    input.value = '';
    messages.scrollTop = messages.scrollHeight;
}

function handleEnter(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// Mood History chart
const moodCtx = document.getElementById('moodChart').getContext('2d');
new Chart(moodCtx, {
    type: 'pie',
    data: {
        labels: ['Happy', 'Anxious', 'Sad', 'Relaxed', 'Stressed'],
        datasets: [{
            label: 'Mood Distribution',
            data: [20, 15, 10, 30, 25],
            backgroundColor: ['#6aabd2', '#ff6f69', '#ffcc5c', '#88d8b0', '#f7d794'],
            hoverOffset: 4
        }]
    }
});
