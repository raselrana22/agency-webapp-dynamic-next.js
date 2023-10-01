import Footer from "@/components/Footer";
import SubscriberSection from "@/components/SubscriberSection";
import TestimonialHeros from "@/components/TestimonialHeros";
import TestimonialList from "@/components/TestimonialList";

export default function Testimonials() {
    return (
        <div>
            <TestimonialHeros />
            <TestimonialList />
            <SubscriberSection />
            <Footer />
        </div>
    )
}