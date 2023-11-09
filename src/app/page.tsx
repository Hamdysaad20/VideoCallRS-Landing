import Image from 'next/image'
import Hero from './Component/Hero'
import Headers from './Component/Header'
import JoinMeetingCTA from './Component/JoinMeetingCTA'
import Contributors from './Component/ContributorsComp/Contributors'
import WHYUS from './Component/WHYUS'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
   <Headers/>
     <Hero/>
     <JoinMeetingCTA/>
     <WHYUS/>   
     <Contributors/>
       
      
      
      
      
      
     
  
    </main>
  )
}





