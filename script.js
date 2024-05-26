const videos = [
    {
        thumbnail: 'https://via.placeholder.com/200',
        title: 'Video 1',
        date: '',
        status: 'uploading raw video'
    },
    {
        thumbnail: 'https://via.placeholder.com/200',
        title: 'Video 2',
        date: '',
        status: 'uploaded raw video'
    }
];

const statuses = [
    'uploading raw video',
    'uploaded raw video',
    'edited (1)',
    'edited (final)',
    'uploaded to YouTube'
];

function createCard(video, index) {
    const card = document.createElement('div');
    card.classList.add('card');
    
    const thumbnail = document.createElement('img');
    thumbnail.src = video.thumbnail;
    thumbnail.onclick = () => changeThumbnail(index);
    card.appendChild(thumbnail);
    
    const title = document.createElement('input');
    title.type = 'text';
    title.value = video.title;
    title.onchange = (e) => updateTitle(index, e.target.value);
    card.appendChild(title);
    
    const info = document.createElement('div');
    info.classList.add('info');
    
    const date = document.createElement('input');
    date.type = 'date';
    date.value = video.date;
    date.onchange = (e) => updateDate(index, e.target.value);
    info.appendChild(date);
    
    const status = document.createElement('select');
    statuses.forEach(s => {
        const option = document.createElement('option');
        option.value = s;
        option.textContent = s;
        if (s === video.status) {
            option.selected = true;
        }
        status.appendChild(option);
    });
    status.onchange = (e) => updateStatus(index, e.target.value);
    info.appendChild(status);
    
    card.appendChild(info);
    return card;
}

function renderCalendar() {
    const calendar = document.getElementById('calendar');
    calendar.innerHTML = '';
    videos.forEach((video, index) => {
        const card = createCard(video, index);
        calendar.appendChild(card);
    });
}

function changeThumbnail(index) {
    const newThumbnail = prompt('Enter new thumbnail URL:');
    if (newThumbnail) {
        videos[index].thumbnail = newThumbnail;
        renderCalendar();
    }
}

function updateTitle(index, title) {
    videos[index].title = title;
}

function updateDate(index, date) {
    videos[index].date = date;
}

function updateStatus(index, status) {
    videos[index].status = status;
}

renderCalendar();
