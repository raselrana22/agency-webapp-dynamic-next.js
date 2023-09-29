import FeaturedProject from "@/components/FeaturedProjects"
import Footer from "@/components/Footer"
import Heros from "@/components/Heros"
import States from "@/components/States"
import WorkList from "@/components/WorkList"
import SubscriberSection from "@/components/subscriberSection"

export default function Home() {
  return (
    <div>
      <Heros />
      <WorkList />
      <States />
      <FeaturedProject />
      <SubscriberSection />
      <Footer />
    </div>
  )
}
