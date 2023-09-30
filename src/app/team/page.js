import Footer from "@/components/Footer";
import SubscriberSection from "@/components/SubscriberSection";
import TeamHeros from "@/components/TeamHeros";
import Teams from "@/components/Teams";

export default function Team() {
    return (
        <div>
            <TeamHeros />
            <Teams />
            <SubscriberSection />
            <Footer />
        </div>
    )
}