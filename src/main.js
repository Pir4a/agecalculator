import './style.css'

const daysinmonths = [
    31,
    28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    30,
    30,
    31,
] 

const arrow = document.getElementById('arrow')


const date = new Date()
const fullYear = date.getFullYear()
const fullMonth = date.getMonth()
const fullDay = date.getDate()

function calculate(){
    const days = document.getElementById('days')
    const years = document.getElementById('years')
    const months = document.getElementById('months')
    const day = document.getElementById('day')
    const month = document.getElementById('month')
    const year = document.getElementById('year')
    let  d = day.value;
    let  m = month.value.replace(/^0+/, '');
    let  y = year.value;
    let calculatedDay = fullDay-d
    let calculatedMonth =fullMonth-m+13
    let calculatedYear = fullYear-y-1
    let dateday = document.getElementById('dateday')
    let datemonth = document.getElementById('datemonth')
    let dateyear = document.getElementById('dateyear')
    let pdateday = document.getElementById("pdateday")
    let pdatemonth = document.getElementById("pdatemonth")
    let pdateyear = document.getElementById("pdateyear")


    if(d=="" || m=="" || y =="") {
        if(d==""){
        dateday.classList.add('red')
        pdateday.innerText = "This field is required"}
        if(m==""){datemonth.classList.add('red')
        pdatemonth.innerText = "This field is required"}
        if(y==""){dateyear.classList.add('red')
        pdateyear.innerText = "This field is required"}
        return
    }
    if(d>daysinmonths[m-1] || d<1) {
        dateday.classList.add('red')
        pdateday.innerText = "Must be a valid day"
        return
    }
    if(month.value>12){
        datemonth.classList.add('red')
        pdatemonth.innerText = "Must be a valid month"
        return
    }
 
    if(y>fullYear){
        dateyear.classList.add('red')
        pdateyear.innerText = "Must be in the past"
        return
    }
    if(y<1900){
        dateyear.classList.add('red')
        pdateyear.innerText = "Bro you're really old.."
        return
    }

    dateday.classList.remove('red')
    pdateday.innerText = ""
    datemonth.classList.remove('red')
    dateyear.classList.remove('red')
    pdatemonth.innerText = ""
    pdateyear.innerText = ""

    if (calculatedMonth>=12){
        calculatedMonth = 0
        calculatedYear++
    }
    if(calculatedDay<0) {
        calculatedMonth--
        calculatedDay+= daysinmonths[fullMonth]

    }
    if(calculatedMonth<0){
        calculatedYear--
        calculatedMonth+=12
    }
  
        days.innerHTML =`${calculatedDay}`
        years.innerHTML =`${calculatedYear}`
        months.innerHTML =`${calculatedMonth}`

}

arrow?.addEventListener("click",()=>{calculate()})



