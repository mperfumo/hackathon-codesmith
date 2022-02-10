
const matches = document.querySelectorAll('code');
const spanMatches = document.querySelectorAll('code > *');



const images = ['<div style="width:100%;height:0;padding-bottom:69%;position:relative;"><iframe src="https://giphy.com/embed/3o7TKwmnDgQb5jemjK" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/hulu-cbs-sabrina-the-teenage-witch-3o7TKwmnDgQb5jemjK">via GIPHY</a></p>',
'<div style="width:480px"><iframe allow="fullscreen" frameBorder="0" height="270" src="https://giphy.com/embed/U2I87JoRnI1QPl9X1E/video" width="480"></iframe></div>',
'<div style="width:480px"><iframe allow="fullscreen" frameBorder="0" height="270" src="https://giphy.com/embed/AwyXIaavrtXj8JXZ7n/video" width="480"></iframe></div>',
'<div style="width:100%;height:0;padding-bottom:75%;position:relative;"><iframe src="https://giphy.com/embed/Z9Zx0LvvgkQL1kEBYk" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/theoffice-transparent-the-office-peacocktv-Z9Zx0LvvgkQL1kEBYk">via GIPHY</a></p>',
'<div style="width:100%;height:0;padding-bottom:135%;position:relative;"><iframe src="https://giphy.com/embed/gGeyr3WepujbGn7khx" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/reaction-mood-gGeyr3WepujbGn7khx">via GIPHY</a></p>',
'<div style="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe src="https://giphy.com/embed/Z9WQLSrsQKH3uBbiXq" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/dance-alien-ufo-Z9WQLSrsQKH3uBbiXq">via GIPHY</a></p>',
'<div style="width:100%;height:0;padding-bottom:75%;position:relative;"><iframe src="https://giphy.com/embed/PqxasEYcJfyyVrsp6X" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/happy-birthday-happybirthday-party-PqxasEYcJfyyVrsp6X">via GIPHY</a></p>',
"<div style='position:relative; padding-bottom:calc(63.51% + 44px)'><iframe src='https://gfycat.com/ifr/HonoredCanineIsopod' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div><p><a href='https://gfycat.com/discover/no-gifs'>from No GIFs</a> <a href='https://gfycat.com/honoredcanineisopod-no-no-no'>via Gfycat</a></p>",
]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


if (getRandomInt(2) === 1){
    spanMatches.forEach(ele => ele.innerText = shuffle(ele.innerText))
    matches.forEach(ele => ele.innerText = shuffle(ele.innerText));
}
else{
    matches.forEach(ele => ele.innerHTML = images[Math.floor(Math.random() * images.length)]);
}


function shuffle(s) {
    var arr = s.split('');           // Convert String to array
    
    arr.sort(function() {
      return 0.5 - Math.random();
    });  
    s = arr.join('');                // Convert Array to string
    return s;                        // Return shuffled string
  }

