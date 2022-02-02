const data = new Date();
function calculate(){
    document.getElementById('vis').style.display ="none";
    document.getElementById('time').style.display ="block";
    let Year = 2024 - data.getFullYear();
    let Month = 7 - data.getMonth();
    let day =4 - data.getDate();
    let hours = 19 - data.getHours();
    let  minutes = 0;
    if (data.getMinutes()>0) {
        let minutes = 60 - data.getMinutes();
        hours--;
    }
    document.getElementById('time').value = Year.toString() + " " + "year(-s)" + " " + Month.toString() + " " + "month(-s)" + " " + day.toString() + " " + "day(-s)" + " " + hours.toString() + " " + "hour(-s)" + " " + minutes.toString() + " " + "minute(-s)" + " " + " left until the freedom!";

}
    function multiplyBy()
    {
        num1 = document.getElementById("FN").value;
        num2 = document.getElementById("SN").value;
        document.getElementById("result").innerHTML = num1 * num2;
    }

    function divideBy()
    {
        num1 = document.getElementById("FN").value;
        num2 = document.getElementById("SN").value;
        document.getElementById("result").innerHTML = num1 / num2;
    }
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const dateObj = new Date()
    const monthNumber = dateObj.getMonth()
    const monthName = monthNames[monthNumber]
    document.write("Month:" + " " + monthName)

        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        document.write("Current time is :" + " " + time);
