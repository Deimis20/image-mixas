const container = document.querySelector('body');
for (var i=0;i<16;i++){
    const new_div = document.createElement('div');
    new_div.style.height = '13.5rem';
    new_div.style.width = "28.8rem";
    new_div.style.backgroundColor = "aqua";
    container.appendChild(new_div)
}
function getColor(){
    var red = Math.floor(Math.random()*256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`
}

for (const div of document.querySelectorAll('div')){
    div.addEventListener('click',(e)=>{
        e.target.style.backgroundColor = getColor();
    })
}