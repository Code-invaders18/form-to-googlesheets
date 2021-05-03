import { Button, Input } from 'antd';
import React, { useState } from 'react';
import ExcelCompo from './ExcelCompo';
import ExcelCompoApi from './ExcelCompoApi';


const ExcelFormApi=()=>{

    const data=[
        {
            index:0,
            inputfield:"",
            link:""
        }
    ];
    
    const [formDetail, setFormDetail]=useState(data)
    const [preview, setPreview] = useState(false)

    const addItem=()=>{
        
        var len=formDetail.length
        var newArr=[...formDetail];
        newArr.push({
            index:len,
            inputfield:"",
            link:""
        })
        console.log(newArr)
        setFormDetail(newArr);
    }

    const onInputValueChange=(e,index)=>{
        var newArr=[...formDetail];
        console.log(e.target.value)
        newArr[index].inputfield=e.target.value;
        setFormDetail(newArr);
    }

    const onLinkChange=(e,index)=>{
        var linkArr=[...formDetail];
        linkArr[index].link=e.target.value;
        setFormDetail(linkArr);
    }
    const handleExcel=()=>{
        setPreview(true)
    }
    
    return(
        <div>
            <Button
                onClick={addItem}            
            >
                Add Item
            </Button>
            <Button
                onClick={handleExcel}
            >
                Save
            </Button>
            <br/>
            {
                formDetail.map((item,index)=>{
                    
                    return(
                        <div>
                            <Input
                                value={item.inputfield}
                                onChange={(e)=>onInputValueChange(e,index)}
                            />
                            <Input
                                value={item.link}
                                onChange={(e)=>onLinkChange(e,index)}
                            />
                        </div>
                    )
                })
            }
            {
                preview && (<ExcelCompoApi formDetail={formDetail}/>)
            }
            
        </div>
    );
}
export default ExcelFormApi;
