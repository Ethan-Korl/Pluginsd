import CardContainer from "../components/CardContainer.jsx"
import NavBar from "../components/NavBar.jsx"


export default function Home(){
    return (
    <div>
     <NavBar />
     <div id='welcome-container'>
         <CardContainer 
         svgUrl={"/assets/svg/sign_up.svg"} 
         containerName={"Register"}
         route={"/signup"}
         />

         <CardContainer 
         svgUrl={'/assets/svg/dashboard.svg'} 
         containerName={'Dashboard'} 
         route={"/dashboard"}
         />

         <CardContainer 
         svgUrl={"/assets/svg/logs.svg" } 
         containerName={"Logs"}
         route={"/"}
         />

         <CardContainer 
         svgUrl={"/assets/svg/info.svg"} 
         containerName={"About"} 
         route={"/about"}
         />
      </div>
    </div>
    )
}