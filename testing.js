let name = document.getElementById("fullname")
let age = document.getElementById("age")

var namedata = JSON.stringify(document.getElementById("fullname"))
var agedata = JSON.stringify(document.getElementById("age"))

function formdetails(){
    localStorage.setItem("fullname", namedata)
    localStorage.setItem("age", agedata)
}
