import '@/app/styles/Home-hero.css'
import { lazy, Suspense } from "react";

const Light = lazy(() => import("./Light"));
const Dark = lazy(() => import("./Dark"));

const Hero = ({ mode }) => {
  return (
    <Suspense fallback={null}>
      {mode === "light" ? <Light /> : <Dark />}
    </Suspense>
  );
};

export default Hero;