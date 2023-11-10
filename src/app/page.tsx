import Image from 'next/image'
import Hero from './Component/Hero'
import Headers from './Component/Header'
import JoinMeetingCTA from './Component/JoinMeetingCTA'
import Contributors from './Component/ContributorsComp/Contributors'
import WHYUS from './Component/WHYUS'
import Header2 from './Component/Example'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between box-content ">
   {/* <Headers/> */}
   <Header2/>
     {/* <Hero/> */}
     <JoinMeetingCTA/>
     <WHYUS/>   
     <Contributors/>
       
      
      
      
      
      
     
  
    </main>
  )
}





