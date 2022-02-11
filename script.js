let rangeBar = document.querySelector('.rangeBar');
let prevBtn = document.querySelector('.prevBtn');
let nextBtn = document.querySelector('.nextBtn');
let masterPlay = document.querySelector('.masterPlay');
let rightFooter = document.querySelector('.rightFooter');
let leftFooter = document.querySelector('.leftFooter');
let a = '1';

let musicArr = [
    {
        songLogo: '../musicPlayer/RSPimg.jpg',
        songPath: "../musicPlayer/song1.mp3",
        songName: "RSP_EcstaticKirtan-1"
    },
    {
        songLogo: '../musicPlayer/NDimg.jpg',
        songPath: "../musicPlayer/song2.mp3",
        songName: "Narsingha_Aarti"
    },
    {
        songLogo: '../musicPlayer/RSPimg.jpg',
        songPath: "../musicPlayer/song3.mp3",
        songName: "RSP_EcstaticKirtan-2"
    },
    {
        songLogo: '../musicPlayer/RSPimg.jpg',
        songPath: "../musicPlayer/song4.mp3",
        songName: "JayaRadhaMadhav-RSP"
    },
    {
        songLogo: '../musicPlayer/krsna.jpeg',
        songPath: "../musicPlayer/song.mp3",
        songName: "NamaOmVishnuPadaya"
    },
    {
        songLogo: '../musicPlayer/RSPimg.jpg',
        songPath: "../musicPlayer/song.mp3",
        songName: "RSP_EcstaticKirtan-3"
    },
    {
        songLogo: '../musicPlayer/RSPimg.jpg',
        songPath: "../musicPlayer/song.mp3",
        songName: "RSP_EcstaticKirtan-4"
    },
    {
        songLogo: '../musicPlayer/RSPimg.jpg',
        songPath: "../musicPlayer/song.mp3",
        songName: "Namah_OM-RSP"
    },
    {
        songLogo: '../musicPlayer/RSPimg.jpg',
        songPath: "../musicPlayer/song.mp3",
        songName: "RSP_EcstaticKirtan-5"
    },
    {
        songLogo: '../musicPlayer/RSPimg.jpg',
        songPath: "../musicPlayer/song.mp3",
        songName: "RSP_EcstaticKirtan-6"
    },
    {
        songLogo: '../musicPlayer/SPimg.jpeg',
        songPath: "../musicPlayer/song.mp3",
        songName: "SamsaraDavan-HDGSP"
    },
    {
        songLogo: '../musicPlayer/SPimg.jpeg',
        songPath: "../musicPlayer/song.mp3",
        songName: "HKMM-HDGSP"
    }
];

function songLogo() {
    Array.from(document.getElementsByClassName('songLogo')).forEach((element, index) => {
        if(index!=12)
        element.style.backgroundImage = `url(${musicArr[index].songLogo})`;
    });
}


let song = new Audio('../musicPlayer/song1.mp3');

Array.from(document.getElementsByClassName('songName')).forEach((Element, index) => {
    Element.innerHTML = musicArr[index].songName;
});
songLogo();


Array.from(document.getElementsByClassName('playButton')).forEach(element => {
    element.addEventListener('click', (e) => {
        a = e.target.id;
        rangeBar.value = 0;
        song.currentTime = 0;
        song.src = `../musicPlayer/song${a}.mp3`;
        leftFooter.style.backgroundImage = `url(${musicArr[parseInt(a) - 1].songLogo})`;
        song.play();
        rightFooter.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle-o');
        masterPlay.classList.add('fa-pause-circle-o');
    });
});

song.addEventListener('timeupdate', () => {
    rangeBar.value = parseInt((song.currentTime / song.duration) * 100);
    if (song.currentTime == song.duration) {
        rangeBar.value = 0;
        song.currentTime = 0;
        if (parseInt(a) != 12) {
            song.src = `../musicPlayer/song${parseInt(a) + 1}.mp3`;
            a = parseInt(a) + 1;
        }
        else
            song.src = `../musicPlayer/song1.mp3`;
        song.play();
        masterPlay.classList.remove('fa-play-circle-o');
        masterPlay.classList.add('fa-pause-circle-o');
    }
});

rangeBar.addEventListener('change', () => {
    song.currentTime = (rangeBar.value / 100) * song.duration;
});

masterPlay.addEventListener('click', () => {
    if (song.paused) {
        song.play();
        rightFooter.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle-o');
        masterPlay.classList.add('fa-pause-circle-o');
    }
    else {
        song.pause();
        rightFooter.style.opacity = 0;
        masterPlay.classList.add('fa-play-circle-o');
        masterPlay.classList.remove('fa-pause-circle-o');
    }
});

prevBtn.addEventListener('click', () => {
    if (parseInt(a) == 1) {
        a = '12';
        song.src = '../musicPlayer/song12.mp3';
        song.currentTime = 0;
        rangeBar.value = 0;
        song.play();
        leftFooter.style.backgroundImage = `url(${musicArr[parseInt(a) - 1].songLogo})`;
        masterPlay.classList.add('fa-pause-circle-o');
        masterPlay.classList.remove('fa-play-circle-o');
    }
    else {
        a = (parseInt(a) - 1);
        song.src = `../musicPlayer/song${a}.mp3`;
        song.currentTime = 0;
        rangeBar.value = 0;
        song.play();
        leftFooter.style.backgroundImage = `url(${musicArr[parseInt(a) - 1].songLogo})`;
        masterPlay.classList.add('fa-pause-circle-o');
        masterPlay.classList.remove('fa-play-circle-o');
    }
});

nextBtn.addEventListener('click', () => {
    if (parseInt(a) != 12) {
        song.src = `../musicPlayer/song${parseInt(a) + 1}.mp3`;
        a = parseInt(a) + 1;
        song.currentTime = 0;
        rangeBar.value = 0;
        song.play();
        leftFooter.style.backgroundImage = `url(${musicArr[parseInt(a) - 1].songLogo})`;
        masterPlay.classList.add('fa-pause-circle-o');
        masterPlay.classList.remove('fa-play-circle-o');
    }
    else {
        a = '1';
        song.src = '../musicPlayer/song1.mp3';
        song.currentTime = 0;
        rangeBar.value = 0;
        song.play();
        leftFooter.style.backgroundImage = `url(${musicArr[parseInt(a) - 1].songLogo})`;
        masterPlay.classList.add('fa-pause-circle-o');
        masterPlay.classList.remove('fa-play-circle-o');
    }
});

