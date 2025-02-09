// tagggles


const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});


// buttons
const links = document.querySelectorAll(".lamp");
console.log(links);

const clickHandler = (link) => {
    links.forEach((link) => {
        link.classList.remove("active")
    })
    link.classList.add("active")
    console.log("sasdasds");
}

links.forEach((link) => {
    link.addEventListener("click" , () => clickHandler(link))
})
// loader
document.addEventListener('DOMContentLoaded', function() {
    // 3 ثانیه (3000 میلی‌ثانیه) صبر کنید
    setTimeout(function() {
        document.querySelector('.conteiner').style.display = 'block'
      document.querySelector('.loader').style.display = 'none';
    });
  });



  //slider
  const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

next.addEventListener('click', function () {
    let items = document.querySelectorAll('.item');
    let prop = document.querySelectorAll('.prop-one-Album');
    document.querySelector('.cards').appendChild(items[0]);
    document.querySelector('.propertyAlbums').appendChild(prop[0]);

})
prev.addEventListener('click', function () {
    let items = document.querySelectorAll('.item');
    let prop = document.querySelectorAll('.prop-one-Album');
    document.querySelector('.cards').prepend(items[items.length - 1]);
    document.querySelector('.propertyAlbums').prepend(prop[prop.length - 1]);

})
//searchbar
// script.js
document.getElementById('searchInput').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const h3Elements = document.querySelectorAll('.content h3');
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = '';
    if (searchTerm.trim() === '') {
        resultsContainer.style.display = 'none'; // اگر سرچبار خالی باشد، نتایج مخفی شود
        return;
    }
    else{
        resultsContainer.style.display = 'flex';
    }
    h3Elements.forEach(function(h3) {
        const h3Text = h3.textContent.toLowerCase();
        if (h3Text.includes(searchTerm)) {
            const resultItem = document.createElement('a'); // استفاده از <a> به جای <div>
            resultItem.textContent = h3.textContent;
            resultItem.href = `#${h3.id}`; // لینک به id مربوطه
             // نمایش هر لینک در یک خط جدید
            resultItem.style.margin = '5px 0'; // فاصله بین لینک‌ها
            resultItem.style.color = '#007BFF'; // رنگ لینک
            resultItem.style.textDecoration = 'none'; // حذف زیرخط لینک
            resultsContainer.appendChild(resultItem);
        }
    });
});
// const cards = document.querySelectorAll(".item");
// cards.forEach((sd) => {
//     sd.classList.remove("hide")
// })
// console.log(cards);

// for (let index = 0; index < 2; index++) {
//     cards[index].classList.add('hide')    
// }
// for (let index = 5; index < cards.length; index++) {
//     cards[index].classList.add('hide')    
// }





//music player
document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('audio');
    const playPauseButton = document.getElementById('play-pause');
    const stopButton = document.getElementById('stop');
    const volumeControl = document.getElementById('volume');
    const songButtons = document.querySelectorAll('.song');
    const posterContainer = document.getElementById('poster');
    const timeline = document.getElementById('timeline');
    const currentTimeDisplay = document.getElementById('current-time');
    const durationDisplay = document.getElementById('duration');
    const text = document.querySelector('.text')
    const Album = document.querySelector('.prop')
    console.log(text)
    console.log(Album)
    // کنترل پخش و توقف موسیقی
    playPauseButton.addEventListener('click', function () {
        const img = document.getElementById('imgPlay');
        if (audio.paused) {
            audio.play();
            img.src = "Images/icons/paused.png";
        } else {
            audio.pause();
            img.src = "Images/icons/play.png";
        }
    });

    // توقف کامل موسیقی
    stopButton.addEventListener('click', function () {
        audio.pause();
        audio.currentTime = 0;
        img.src = "Images/icons/play.png";
    });

    // کنترل حجم صدا
    volumeControl.addEventListener('input', function () {
        audio.volume = volumeControl.value;
    });

    // تغییر موسیقی و پوستر با کلیک روی دکمه‌های پلی‌لیست
    songButtons.forEach(button => {
        button.addEventListener('click', function () {
            const songSrc = button.getAttribute('data-src');
            const posterSrc = button.getAttribute('data-poster');
            const textsrc = button.getAttribute('data-name')
            const propsrc = button.getAttribute('data-album')
            audio.src = songSrc;
            posterContainer.src = posterSrc; // تغییر پوستر
            text.textContent = textsrc
            Album.textContent = propsrc
            audio.play();
            img.src = "Images/icons/paused.png";
        });
    });

    // به‌روزرسانی تایم لاین و زمان نمایش
    audio.addEventListener('timeupdate', function () {
        const currentTime = audio.currentTime;
        const duration = audio.duration;

        // به‌روزرسانی مقدار تایم لاین
        timeline.value = (currentTime / duration) * 100;

        // به‌روزرسانی زمان نمایش
        currentTimeDisplay.textContent = formatTime(currentTime);
        if (!isNaN(duration)) {
            durationDisplay.textContent = formatTime(duration);
        }
    });

    // کلیک روی تایم لاین برای رفتن به قسمت خاصی از موسیقی
    timeline.addEventListener('input', function () {
        const seekTime = (timeline.value / 100) * audio.duration;
        audio.currentTime = seekTime;
    });

    // فرمت زمان به صورت دقیقه:ثانیه
    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
});