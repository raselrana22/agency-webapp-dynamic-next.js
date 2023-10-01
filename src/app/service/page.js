import AllService from "@/components/AllService";
import Footer from "@/components/Footer";
import ServiceHeros from "@/components/ServiceHeros";
import SubscriberSection from "@/components/SubscriberSection";

export default function Services() {
    return (
        <div>
            <ServiceHeros />
            <AllService />
            <SubscriberSection />
            <Footer />
        </div>
    )
}