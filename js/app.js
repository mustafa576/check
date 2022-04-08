const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor_follower');

window.addEventListener('mousemove', function(e) {
    gsap.to(cursor,0.4,{top:e.clientY,left:e.clientX,ease:Power1.easeOut});
});

const magneticLink = document.querySelectorAll('.magnetic-link');

magneticLink.forEach((link) => {
    link.addEventListener('mousemove', function(e) {
        const position = link.getBoundingClientRect();
        const xs = e.pageX - position.left - position.width / 2;
        const ys = e.pageY - position.top - position.height / 2;
        gsap.to(link,0.2,{x:xs+0.3,y:ys+0.3,ease:Power4.easeinOut});
        gsap.to(cursor,0.4,{width:50,height:50,opacity:0.4});
    });
    link.addEventListener('mouseout', function(e) {
        gsap.to(link,0.2,{x:0,y:0});
        gsap.to(cursor,0.4,{width:15,height:15,opacity:1});
    });
});


const play = document.querySelector('#play');

play.addEventListener('mousemove', function() {
    gsap.to(cursor,0.3,{width:90,height:90});
    cursor.innerHTML="Play";
});

play.addEventListener('mouseout', function() {
    gsap.to(cursor,0.3,{width:15,height:15});
    cursor.innerHTML="";

})












