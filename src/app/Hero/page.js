import HomeStart from "@/components/Home/HomeStart"
import HomeService from "@/components/Home/HomeService"
import Testimonials from "@/components/Home/Testimonials"
import HomeTeam from "@/components/Home/HomeTeam"
import HomeMission from "@/components/Home/HomeMission"

export default function Hero() {
  return (
    <>
      <HomeStart />
      <HomeMission />
      <HomeService />
      <HomeTeam />
      <Testimonials />
    </>
  )
}