import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const onPlay = function(data) {
    // data is an object containing properties specific to that event
};

player.on('play', onPlay);
