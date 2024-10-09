var second = 0
var minute = 0
var hour = 0
var d = new Date()

setInterval(
    function(){
        d = new Date()
        second = d.getSeconds() * 6
        minute = d.getMinutes() *6
        hour = d.getHours() *30 + Math.round(minute/ 12)
        document.getElementById("secondhand").style.transform = " rotatez(" +second + "deg)"
        document.getElementById("minutehand").style.transform = " rotatez(" +minute + "deg)"
        document.getElementById("hourhand").style.transform = " rotatez(" +hour +"deg)"
    },1000
)

