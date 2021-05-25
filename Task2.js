function drawRectangle(x, y, width, height, color) {
    var canvas = document.getElementById("DemoCanvas");
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = color; // color of fill
        ctx.fillRect(x, y, height, width); // create rectangle  
    }
}