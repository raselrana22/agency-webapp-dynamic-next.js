import AllProject from "@/components/AllProject";
import Footer from "@/components/Footer";
import ProjectsHeros from "@/components/ProjectsHeros";
import ServiceHeros from "@/components/ServiceHeros";
import SubscriberSection from "@/components/SubscriberSection";

export default function Projects() {
    return (
        <div>
            <ProjectsHeros />
            <AllProject />
            <SubscriberSection />
            <Footer />
        </div>
    )
}