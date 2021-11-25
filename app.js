begin = new Date(2021, 10, 9)
console.log(begin)
today = new Date()
console.log(today)
diff = today - begin
document.getElementById("h1").innerHTML = " " + String(parseInt(diff / (24 * 60 * 60 * 1000))) + " gün oldu"
