function randomColor(){
    let color = '#';
    const chars = "0123456789abcdef";
    for(let i = 0; i < 6; i++){
        const nextChar = Math.floor(Math.random() * 16);
        color += chars[nextChar];
    }
    
    document.getElementById('color-code').innerHTML = color;
    document.body.style = `background-color: ${color}`;
}