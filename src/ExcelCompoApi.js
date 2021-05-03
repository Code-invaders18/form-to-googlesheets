import axios from 'axios';
import { React, useState } from 'react';

const ExcelCompoApi=({...data})=>{
    
    const [stateApi, setStateApi] = useState([...data.formDetail])

    const handler=()=>{
       console.log(stateApi)
        axios.post('https://sheet.best/api/sheets/1926a777-a241-4b8b-8071-ca069c53b9a2',stateApi)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return(
        <div>
            {handler()}
        </div>
    );
}
export default ExcelCompoApi;
