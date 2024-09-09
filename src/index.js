import "./output.css";
import { getdataC,getdataF } from "./getdata";
import { todaydata,tommorrowdata,next5days } from "./Datafunction";

let locationdata = 'Chennai'

let metric = 'C'

const main = async(location) =>{
    try{
        let response
        const locationID = document.getElementById('location')
        if(metric === 'C'){
            response = await getdataC(location);
        }
        else if(metric === 'F'){
            response = await getdataF(location);
        }

        todaydata(response.days);
        tommorrowdata(response.days);
        next5days(response.days);
        changemetric()

        locationID.innerHTML = response.resolvedAddress
    }
    catch(error){
        console.error("Bad Function Error",error);
    }
}
const changemetric = ()=>{
    if(metric === 'C'){
        let tempclass = document.querySelectorAll('.tempclass')
        tempclass.forEach(e=>{
            e.innerHTML = e.innerHTML + `°C`
        })
        let windspeed = document.querySelectorAll('.windspeed')
        windspeed.forEach(e=>{
            e.innerHTML = e.innerHTML + `m/s`
        })
    }
    else if(metric === 'F'){
        let tempclass = document.querySelectorAll('.tempclass')
        tempclass.forEach(e=>{
            e.innerHTML = e.innerHTML + `°F`
        })
        let windspeed = document.querySelectorAll('.windspeed')
        windspeed.forEach(e=>{
            e.innerHTML = e.innerHTML + `mph`
        })
    }
}

const degreebutton = document.getElementById('degreebtn')
degreebutton.addEventListener('click', async()=>{
    if(metric === 'F'){
        main(locationdata).then(()=>{
            metric = 'C'
        }) 
    }
})

const farenbutton = document.getElementById('farenbtn')
farenbutton.addEventListener('click', async () => {
    if(metric === 'C'){
        main(locationdata).then(()=>{
            metric = 'F'
        })
    }
})

const searchbar = document.getElementById('searchbar');
searchbar.addEventListener('keypress', (e)=>{
    if(e.key == 'Enter'){
        locationdata = searchbar.value
        main(locationdata)
        searchbar.value = ''
    }
})

const searchbtn = document.getElementById('searchbtn');
searchbtn.addEventListener('click',()=>{
    locationdata = searchbar.value
    main(locationdata)
    searchbar.value = ''
})

main('Chennai')


