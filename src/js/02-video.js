import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = "videoplayer-current-time";
const currentTime = localStorage.getItem(STORAGE_KEY) || 0;

const onTimeUpdate = function({seconds}) {
 
    localStorage.setItem(STORAGE_KEY, seconds)
};

player.on('timeupdate', throttle(onTimeUpdate, 1000));
player.setCurrentTime(currentTime)