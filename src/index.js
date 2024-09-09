import "./output.css";
import { getdataC,getdataF } from "./getdata";
import { todaydata,tommorrowdata,next5days } from "./Datafunction";


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

        locationID.innerHTML = response.resolvedAddress
    }
    catch(error){
        console.error("Bad Function Error",error);
    }
}

main('America')


