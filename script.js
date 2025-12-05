document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cardForm');

    // Load saved data if available
    const savedData = localStorage.getItem('japaneseCardData');
    if (savedData) {
        const data = JSON.parse(savedData);
        document.getElementById('level').value = data.level || '';
        document.getElementById('category').value = data.category || '';
        document.getElementById('title').value = data.title || '';
        document.getElementById('subtitle').value = data.subtitle || '';
        document.getElementById('videoUrl').value = data.videoUrl || '';
        document.getElementById('mainText').value = data.mainText || '';
        document.getElementById('translation').value = data.translation || '';
        document.getElementById('vocabulary').value = data.vocabulary || '';
        document.getElementById('grammar').value = data.grammar || '';
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = {
            level: document.getElementById('level').value,
            category: document.getElementById('category').value,
            title: document.getElementById('title').value,
            subtitle: document.getElementById('subtitle').value,
            videoUrl: document.getElementById('videoUrl').value,
            mainText: document.getElementById('mainText').value,
            translation: document.getElementById('translation').value,
            vocabulary: document.getElementById('vocabulary').value,
            grammar: document.getElementById('grammar').value
        };

        localStorage.setItem('japaneseCardData', JSON.stringify(formData));

        // Open display page (renamed to display.html)
        window.open('display.html', '_blank');
    });
});
