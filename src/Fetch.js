import { useState, useEffect } from "react";

function FetchApi () {
    const [data, setData] = useState([]);
    const apiGet = () => {
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then ((response) => response.json())
        .then((json) => {
            console.log(json);
            setData(json);
        });
    };
    useEffect(() => {
        apiGet();
        
    }, [] );

    return (
        <div>
            Nån namn<br/>
            <button onClick={apiGet}> Hämta Fetch</button> 
            <br/>
            <div>
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>{item.id},{item.email}</li>
                    ))}
                </ul>
                item.id= 
            </div>
        </div>
     );
}
 
export default FetchApi;