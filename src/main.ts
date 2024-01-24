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
console.log(fullDay, fullMonth, fullYear)

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
    let calculatedDay = daysinmonths[m]-d
    let calculatedMonth =fullMonth-m+13
    let calculatedYear = fullYear-y-1
    console.log(m)
    console.log(daysinmonths[1])
    if (calculatedMonth>=12){
        calculatedMonth = 0
        calculatedYear++
    }
    if(calculatedDay<0) {
        calculatedMonth--
        calculatedDay+= Number(daysinmonths[m])

    }
    if(calculatedMonth<0){
        calculatedYear--
        calculatedMonth+=12
    }
  
        days.innerHTML =`${calculatedDay}`
        years.innerHTML =`${calculatedYear}`
        months.innerHTML =`${calculatedMonth}`

}

// +31 - (birtmonthday - birthmonthdays)

arrow?.addEventListener("click",()=>{calculate()})



