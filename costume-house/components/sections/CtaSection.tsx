import Button from "../common/Button";
import Link from "next/link";
import {  Star,  Palette} from "lucide-react"

const CtaSection: React.FC = () => {
    return (
        <section className="bg-[linear-gradient(135deg,#5E1FBF,#F26646)] text-center text-white">
            {/* CTA section */}
        <div className="container text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-xl opacity-90">
              Join thousands of satisfied customers who&apos;ve designed their perfect shoes with us.
            </p>
            <div className="flex items-center justify-center space-x-2 mb-8" style={{marginBottom: "10px"}}>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-6 w-6 fill-[#F2D55C] text-[#F2D55C]" />
                ))}
              </div>
              <span className="text-lg font-medium">4.9/5 from 2,847 reviews</span>
            </div>
            <Link href="/customize">
              <Button size="lg" className="bg-white text-[#6633B9] hover:bg-white/90 text-lg px-10 py-5">
              <div className="text-[#6633B9] flex gap-2 items-center">
                    Start Your Design
                    <Palette className="ml-2 h-5 w-5"  />
              </div>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    )
}

export default CtaSection;