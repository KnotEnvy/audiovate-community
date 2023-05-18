class FullScreenBars {
    constructor(){}

    static drawFullScreenBars(bufferLength, x, barWidth, barHeight, dataArray){
        let el = document.getElementById('canvas');
        el.style.bottom = '10%';
        x = 0;

        for(let i = 0; i < bufferLength; i++) {
            barHeight = dataArray[i];
            barWidth = bufferLength/2750;
            let bassColor = `rgb(${Math.min(Math.max(dataArray[i],0),255)}, 0 , 0)`;
            let midColor = `rgb(0, ${Math.min(Math.max(dataArray[i],0),255)}, ${Math.min(Math.max(dataArray[i],0),255)})`;
            let trebleColor = `rgb(${Math.min(Math.max(dataArray[i],0),255)}, ${Math.min(Math.max(dataArray[i],0),255)}, ${Math.min(Math.max(dataArray[i],0),255)})`;
            ctx.fillStyle = bassColor;
            ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
            x += barWidth;
            if(x > canvas.width) ctx.fillStyle = midColor;
            else ctx.fillStyle = trebleColor;
            ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
            x += barWidth;
            if(x > canvas.width) x = 0;
        }
    }
}