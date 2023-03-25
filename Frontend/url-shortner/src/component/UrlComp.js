import axios from "axios";
import React, { useEffect, useState } from "react";
import base_url from "../api/BaseUrl";


function UrlComp(){

    const[url, setUrl] = useState({id: 0,shorturl: '', originalurl: ''});

    const[tab, setTab] = useState("isnotok");

    const [urls, setUrls] = useState(new Map());     

    const[output,setOutput]=useState("");



    const handleInput = (event) => {
        setUrl({...url,"originalurl": event.target.value});
    }

    const getShortUrlFromServer = (data) =>{
        setUrl({...url,"originalurl": data.originalurl});
        console.log(url.originalurl);
        axios.post(`${base_url}`,data.originalurl, {
            headers: {
                'Content-Type': 'text/plain'
            }}).then(
            (response) => {
                console.log(response)
                if(response.data===""){
                    addErrorToList();
                }else{
                    setUrl({...url,"shorturl": response.data.shorturl});
                    addToUrls(response.data);
                }
                setTab("isok");

            },(error) => {
                console.log(error)

            }
        )
    }

    const addErrorToList = () =>{
        if(!urls.get(url.originalurl)){
            urls.set(url.originalurl,[]);
            urls.get(url.originalurl).push("Invalid Url Found!");
            setUrls(new Map(urls));
        }else{
            let str = urls.get(url.originalurl);
            if(str!=="Invalid Url Found!"){
                urls.get(url.originalurl).push("Invalid Url Found!");
                setUrls(new Map(urls));
            }
        }
    }

    const addToUrls = (data) =>{
        if(!urls.get(data.originalurl)){
            urls.set(data.originalurl,[]);
            urls.get(data.originalurl).push(data.shorturl);
            setUrls(new Map(urls));
        }else{
            urls.get(data.originalurl).push(data.shorturl);
            setUrls(new Map(urls));
        }
    }

    const handleButton = () =>{
        getShortUrlFromServer(url);
        setOutput(getShortUrlFromServer(url));
       // console.log(output[0]);
    }


    return (
        <div className="container">
                <div className="header">
                    <h1 className="fs-2"><u>Paste the URL to be shortened</u></h1>
                </div>
                <div className="container center_box d-flex justify-content-center align-items-center">
                        <input type="text" 
                        className="input-box form-control form-control-lg" 
                        placeholder="Enter the link" 
                        aria-label="Recipient's username" 
                        aria-describedby="basic-addon2"
                        onChange={(e) => handleInput(e)}
                        />
                        <div className="input-group-append">
                            <button onClick={handleButton} className="btn btn-lg" type="button">Button</button>
                        </div>
                </div>
                <div className="container overflow-auto div1 rounded w-75">
                    <div className="fs-4 text-warning"></div>
                    <h3>shorturl is</h3>

                     <h1>{url.shorturl}</h1>
                  
                </div>
        </div>
    );
}

export default UrlComp;