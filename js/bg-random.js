function changeColor() { 
    var colors = ['#B19CD9', '#DEA5A4', '#CFCFC4', '#836953', '#FFD1DC', '#77DD77', '#FF6961', '#AEC6CF', '#C23B22', '#FDFD96', '#CB99C9', '#B39EB5', '#F49AC2', '#779ECB'];

    randColor = colors[Math.floor(Math.random() * colors.length)];
    
    $('body').css({'background-color': randColor});
}