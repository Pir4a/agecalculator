import './style.css'



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
    let  m = month.value;
    let  y = year.value;
    let calculatedDay = fullDay-d
    let calculatedMonth =fullMonth-m
    let calculatedYear = fullYear-y 
    console.log(calculatedMonth)

    if(calculatedMonth<0){
        calculatedYear--
        calculatedMonth +=13
        days.innerHTML =`${calculatedDay}`
        years.innerHTML =`${calculatedYear}`
        months.innerHTML =`${calculatedMonth}`
    }
    else if(calculatedMonth>=-1) {
        calculatedYear++
        calculatedMonth = 0
        days.innerHTML =`${calculatedDay}`
        years.innerHTML =`${calculatedYear}`
        months.innerHTML =`${calculatedMonth}`
    }

}


function calculateage(d: number,m: number,y: number){
   
    console.log(d)
    days.innerHTML=`caca`
}

arrow?.addEventListener("click",()=>{calculate()})



