import bell_icon from './bell.png'
import home_icon from './home.png'
import like_icon from './like.png'
import loop_icon from './loop.png'
import mic_icon from './mic.png'
import next_icon from './next.png'
import play_icon from './play.png'
import pause_icon from './pause.png'
import plays_icon from './plays.png'
import prev_icon from './prev.png'
import search_icon from './search.png'
import shuffle_icon from './shuffle.png'
import speaker_icon from './speaker.png'
import stack_icon from './stack.png'
import zoom_icon from './zoom.png'
import plus_icon from './plus.png'
import arrow_icon from './arrow.png'
import mini_player_icon from './mini-player.png'
import queue_icon from './queue.png'
import volume_icon from './volume.png'
import arrow_right from './right_arrow.png'
import arrow_left from './left_arrow.png'
import spotify_logo from './spotify_logo.png'
import clock_icon from './clock_icon.png'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import img6 from './img6.jpg'
import img7 from './img7.jpg'
import img8 from './img8.jpg'
// import img9 from './img9.jpg'
// import img10 from './img10.jpg'
import img11 from './img11.jpg'
import img12 from './img12.jpg'
import img13 from './img13.jpg'
import img14 from './img14.jpg'
import img15 from './img15.jpg'
import img16 from './img16.jpg'
import song1 from './song1.mp3'
import song2 from './song2.mp3'
import song3 from './song3.mp3'
import roya from './roya.jpg'
import aygunkazimova from './aygunkazimova.jpg'
import semicenk from './semicenk.jpg'
import sezenaksu from './sezenaksu.jpg'
import miro from './miro.jpg'
import theweeknd from './theweeknd.jpg'
import billieeilish from './billieeilish.jpg'
import topsongsusa from './topsongsusa.jpg'
import viral50global from './viral50global.jpg'
import viral50usa from './viral50usa.jpg'
import top50songsusa from './top50songsusa.jpg'
import vebirde from './Və bir də.mp3'
import bahar from './Bahar.mp3'
import sos from './S.O.S.mp3'
import yagis from './Yağış.mp3'
import parilti from './Parıltı.mp3'
import dunyamol from './Dünyam Ol.mp3'
import qaracuxurdahustle from './Qaraçuxurda Hustle.mp3'
import heledehecneyolundagetmir from './Hələ Də Heç Nə Yolunda Getmir.mp3'
import senisevirem from './Səni Sevirəm.mp3'
import menkimem from './MƏN KİMƏM.mp3'
import vebirdejpg from './VəBirDə.jpeg'
import baharjpg from './Bahar.jpeg'
import sosjpg from './S.O.S.jpeg'
import yagisjpg from './Yağış.jpeg'
import pariltijpg from './Parıltı.jpeg'
import dunyamoljpg from './DünyamOl.jpeg'
import qaracuxurdahustlejpg from './QaraçuxurdaHustle.jpeg'
import heledehecneyolundagetmirjpg from './HələDəHeçNəYolundaGetmir.jpeg'
import seniseviremjpg from './SəniSevirəm.jpeg'
import menkimemjpg from './MənKiməm.jpeg'

export const assets = {
    bell_icon,
    home_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    search_icon,
    shuffle_icon,
    speaker_icon,
    stack_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    arrow_left,
    arrow_right,
    spotify_logo,
    clock_icon,
}

export const albumsData = [
    {
        id: 0,
        name: "Top 50 Global",
        image: img8,
        desc: "Your weekly update of the most played tracks",
        bgColor: "#2a4365"
    },
    {
        id: 1,
        name: "Top 50 USA",
        image: top50songsusa,
        desc: "Your weekly update of the most played tracks",
        bgColor: "#742a2a"
    },
    {
        id: 2,
        name: "Trending USA",
        image: topsongsusa,
        desc: "Your weekly update of the most played tracks",
        bgColor: "#742a2a"
    },
    {
        id: 3,
        name: "Trending Global",
        image: img16,
        desc: "Your weekly update of the most played tracks",
        bgColor: "#44337a"
    },
    {
        id: 4,
        name: "Mega Hits",
        image: img11,
        desc: "Your weekly update of the most played tracks",
        bgColor: "#234e52"
    },
    {
        id: 5,
        name: "Happy Favorites",
        image: img15,
        desc: "Your weekly update of the most played tracks",
        bgColor: "#744210"
    }
]

export const songsData = [
    {
        id: 0,
        artist: "Xpert",
        name: "Və Bir Də",
        image: vebirdejpg,
        file: vebirde,
        duration: "3:34"
    },
    {
        id: 1,
        artist: "Röya",
        name: "Bahar",
        image: baharjpg,
        file: bahar,
        duration: "4:12"
    },
    {
        id: 2,
        artist: "Aygün Kazımova",
        name: "S.O.S",
        image: sosjpg,
        file: sos,
        duration: "3:45"
    },
    {
        id: 3,
        artist: "Eyyub Yaqubov",
        name: "Yağış",
        image: yagisjpg,
        file: yagis,
        duration: "3:59"
    },
    {
        id: 4,
        artist: "Paster, RZZA",
        name: "Parıltı",
        image: pariltijpg,
        file: parilti,
        duration: "4:21"
    },
    {
        id: 5,
        artist: "OGB, Saybu",
        name: "Dünyam Ol",
        image: dunyamoljpg,
        file: dunyamol,
        duration: "3:47"
    },
    {
        id: 6,
        artist: "RIO",
        name: "Qaraçuxurda Hustle",
        image: qaracuxurdahustlejpg,
        file: qaracuxurdahustle,
        duration: "4:03"
    },
    // {
    //     id: 7,
    //     artist: "F'Rhyme",
    //     name: "Hələ Də Heç Nə Yolunda Getmir",
    //     image: heledehecneyolundagetmirjpg,
    //     file: heledehecneyolundagetmir,
    //     duration: "4:09"
    // },
    {
        id: 7,
        artist: "RZZA",
        name: "Səni Sevirəm",
        image: seniseviremjpg,
        file: senisevirem,
        duration: "3:40"
    },
    {
        id: 8,
        artist: "Xpert",
        name: "Mən Kiməm",
        image: menkimemjpg,
        file: menkimem,
        duration: "4:15"
    }
];

export const artists = [
    {
        id: 0,
        name: "Röya",
        image: roya,
    },
    {
        id: 1,
        name: "Aygün Kazımova",
        image: aygunkazimova
    },
    {
        id: 2,
        name: "Semicenk",
        image: semicenk
    },
    {
        id: 3,
        name: "Sezen Aksu",
        image: sezenaksu
    },
    {
        id: 4,
        name: "Miro",
        image: miro
    },
    {
        id: 5,
        name: "The Weeknd",
        image: theweeknd
    },
    {
        id: 6,
        name: "Billie Eilish",
        image: billieeilish
    }
];
