
const todaydata = (data) =>{
    const todayicon = data[0].icon
    const date = data[0].datetime
    const temp = data[0].temp
    const tempmax = data[0].tempmax
    const tempmin = data[0].tempmin
    const windspeed = data[0].windspeed
    const humidity = data[0].humidity

    const icon = document.getElementById('todayicon').src = `./assets/${todayicon}.svg`
    const todaytemp = document.getElementById('todaytemp')
    todaytemp.innerHTML = temp
    const todaytempmax = document.getElementById('todaytempmax')
    todaytempmax.innerHTML = tempmax
    const todaytempmin = document.getElementById('todaytempmin')
    todaytempmin = tempmin
    const todaydate = document.getElementById('todaydate')
    todaydate.innerHTML = date
    const todaywindspeed = document.getElementById('todaywind')
    todaywindspeed.innerHTML = windspeed
    const todayhumidity = docuument.getElementById('todayhumidity')
    todayhumidity.innerHTML = humidity
}

const tommorrowdata = (data) =>{

    const tommorrowicon = data[1].icon
    const date = data[1].datetime
    const temp = data[1].temp
    const tempmax = data[1].tempmax
    const tempmin = data[1].tempmin
    const windspeed = data[1].windspeed
    const humidity = data[1].humidity

    const icon = document.getElementById('tommorrowicon').src = `./assets/${tommorrowicon}.svg`
    const tommorrowtemp = document.getElementById('tommorrowtemp')
    tommorrowtemp.innerHTML = temp
    const tommorrowtempmax = document.getElementById('tommorrowtempmax')
    tommorrowtempmax.innerHTML = tempmax
    const tommorrowtempmin = document.getElementById('tommorrowtempmin')
    tommorrowtempmin = tempmin
    const tommorrowdate = document.getElementById('tommorrowdate')
    tommorrowdate.innerHTML = date
    const tommorrowwindspeed = document.getElementById('tommorrowwind')
    tommorrowwindspeed.innerHTML = windspeed
    const tommorrowhumidity = docuument.getElementById('tommorrowhumidity')
    tommorrowhumidity.innerHTML = humidity

}

const next5days = (data) =>{

    const nextdays = document.getElementById('nextdays')
    
    for(let i = 2;i<=6;i++){
        const icon = data[i].icon
        const date = data[i].datetime
        const temp = data[i].temp

        nextdays.innerHTML += `<div class="flex flex-col p-10 items-center justify-center gap-3 flex-1 bg-zinc-800 rounded-3xl">
                                    <img class="w-24 h-24 src ="./assets/${icon}">
                                    <p class="text-3xl">${temp}</p>
                                    <p>${date}</p>
                                </div>`
    }
} 