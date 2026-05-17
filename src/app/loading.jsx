import "animate.css";
import { Sun } from "lucide-react";

export default function Loading() {
  return (
    <div className="animate__animated animate__fadeIn fixed inset-0 z-100 flex items-center justify-center bg-linear-to-tr from-[#FFF8F0] via-background to-[#FFEBE0]">
      <div className="flex flex-col items-center gap-6 px-6 text-center">

        <div className="animate__animated animate__heartBeat animate__infinite animate__slow flex h-24 w-24 items-center justify-center rounded-full border border-white/40 bg-white/60 shadow-md backdrop-blur-sm">
          <Sun className="h-12 w-12 text-[#FF6B6B]" />
        </div>

        <div className="animate__animated animate__fadeInUp animate__fast animate__delay-1s">
          <h1 className="text-3xl font-bold tracking-wide text-foreground font-display mb-1">
            SunCart
          </h1>
          <p className="max-w-[200px] text-sm font-medium tracking-wide text-foreground/60">
            Brightening your shopping experience...
          </p>
        </div>

        <span className="animate__animated animate__fadeIn animate__delay-1s loading loading-ring loading-md text-primary" />

      </div>
    </div>
  );
}