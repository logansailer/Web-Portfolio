/**
 * Soft, fixed ambient light sources that sit behind all content to give the
 * flat dark background some depth/texture without becoming a distraction.
 * Sized down on small screens so they don't overwhelm a narrow viewport.
 */
const BackgroundGlow = () => (
  <div aria-hidden className="fixed inset-0 -z-20 overflow-hidden">
    <div className="absolute -top-20 right-[-30%] h-64 w-64 rounded-full bg-accent/5 blur-[70px] sm:-top-32 sm:right-[-12%] sm:h-[34rem] sm:w-[34rem] sm:bg-accent/10 sm:blur-[120px]" />
    <div className="absolute top-[45%] left-[-30%] h-56 w-56 rounded-full bg-accent/5 blur-[80px] sm:left-[-15%] sm:h-[26rem] sm:w-[26rem] sm:blur-[130px]" />
    <div className="absolute bottom-[-15%] right-[-20%] h-56 w-56 rounded-full bg-accent/5 blur-[80px] sm:right-[10%] sm:h-[30rem] sm:w-[30rem] sm:blur-[140px]" />
  </div>
);

export default BackgroundGlow;
