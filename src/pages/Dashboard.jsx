import NavBar from "../components/NavBar";
import RequestDetail from "../components/RequestDetail";
// import Modal from "../components/Modal.";
import { useState } from "react";
import Input from "../components/Input";
// import

export default function Dashboard(){
    const [show, setShow] = useState(false);

    const handleShow = () => {
        show? setShow(false):setShow(true)
    }
    return (
    <div>
        <NavBar />

     <div class="dashboard-container">
        <div id="side-bar-container">
            <div>
             <button className="dashboard-button">Admin</button>
             <button onClick={handleShow} className="dashboard-button">View Logs
             </button>
             {show? (<div className="sub-button-container">  
                <button>Email Requests</button>
                <button>Ussd Requests</button>
             </div>):null}
             <button className="dashboard-button">Failed Requests</button>
             <button className="dashboard-button">Manage Accounts</button>  
             <button className="dashboard-button">USSD Logs</button>
             <button className="dashboard-button">Email Logs</button>
             <button className="dashboard-button">USSD Logs</button>
             <button className="dashboard-button">Email Logs</button>
             <button className="dashboard-button">USSD Logs</button>
            </div>
        </div>

        <div id="main-dashboard" className="m-0 p-0">
        <div className="m-0 flex-col bg-slate-950 search-nav-custom-style">
            <div>
            <Input placeholdexr={"Search logs..."} />
            </div>
            <button className="bg-slate-800 rounded-md w-60 h-12">Test Request</button>
        </div>
        <ul class="registered-contact-list">
        <RequestDetail />
        <RequestDetail />
        <RequestDetail />
        <RequestDetail />
        <RequestDetail />
        <RequestDetail />
        <RequestDetail />
        <RequestDetail />
        <RequestDetail />
        <RequestDetail />
        <RequestDetail />
        <RequestDetail />
        {/* <Modal /> */}
        </ul>
        </div>
    </div>

    </div>
    )
}