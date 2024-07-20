import { useState } from "react"


export default function RequestDetail(){
    const [seeDetail, setSeeDetail] = useState(false)
    
    function handleDetails(){
        setSeeDetail(true)
    }
    
    return (
        <li className="request-detail">
            <div class="user-number">
                0256646334
            </div>

            <div class="code-sent">73845</div>

            <div>
            <button onClick={handleDetails} class="detail-btn">Details</button>  
            <a class="delete-btn">Delete</a>      
            </div>
        </li>
    )
}