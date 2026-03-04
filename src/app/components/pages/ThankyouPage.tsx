import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";

export default function ThankYou() {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1E1E1C] text-white px-6 relative overflow-hidden">

      {/* subtle background glow */}
      <div className="absolute w-[600px] h-[600px] bg-[#93A87C]/10 blur-[160px] rounded-full top-[-200px] left-[-200px]" />

      <div className="relative text-center max-w-xl animate-fadeUp">

        {/* Animated success icon */}
        <div className="flex justify-center mb-10">

          <div className="w-20 h-20 rounded-full border border-[#93A87C] flex items-center justify-center animate-scaleIn">

            <Check className="text-[#93A87C]" size={36} />

          </div>

        </div>

        {/* Title */}
        <h1 className="font-serif text-[clamp(3rem,5vw,4rem)] mb-6 leading-tight">
          Thank You
        </h1>

        {/* Description */}
        <p className="text-white/70 text-lg leading-relaxed mb-12">
          Your request has been successfully received.  
          Our team will review your enquiry and contact you shortly
          to discuss your backyard project.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <button
            onClick={() => navigate("/")}
            className="px-10 py-4 bg-white text-black uppercase text-xs tracking-[0.2em] 
            hover:bg-[#93A87C] hover:text-white transition-all duration-300 hover:-translate-y-1"
          >
            Back to Home
          </button>

          <button
            onClick={() => navigate("/products")}
            className="px-10 py-4 border border-white/20 uppercase text-xs tracking-[0.2em] 
            hover:border-[#93A87C] hover:text-[#93A87C] transition-all duration-300 hover:-translate-y-1"
          >
            Explore Designs
          </button>

        </div>

      </div>

    </div>
  );
}