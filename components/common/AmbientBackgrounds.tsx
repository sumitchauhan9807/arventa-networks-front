export function OperationsAmbientBackground({ isDark }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className={`absolute left-1/2 top-[-250px] h-[700px] w-[1100px] max-w-none -translate-x-1/2 rounded-full blur-[160px] ${isDark ? 'bg-[#D9A83E]/[0.055]' : 'bg-[#D9A83E]/[0.10]'}`} />

      <div className={`absolute -left-[300px] top-[35%] h-[600px] w-[600px] rounded-full blur-[150px] ${isDark ? 'bg-[#D9A83E]/[0.025]' : 'bg-[#D9A83E]/[0.045]'}`} />

      <div className={`absolute -right-[300px] bottom-[10%] h-[600px] w-[600px] rounded-full blur-[150px] ${isDark ? 'bg-[#D9A83E]/[0.02]' : 'bg-[#D9A83E]/[0.035]'}`} />

      <div className={`absolute inset-0 ${isDark ? 'bg-[radial-gradient(ellipse_at_50%_15%,rgba(217,168,62,0.08),transparent_45%)]' : 'bg-[radial-gradient(ellipse_at_50%_15%,rgba(217,168,62,0.10),transparent_45%)]'}`} />

      <div className={`absolute inset-0 bg-[size:24px_24px] ${isDark ? 'bg-[radial-gradient(circle,rgba(255,255,255,0.16)_1px,transparent_1px)]' : 'bg-[radial-gradient(circle,rgba(21,23,22,0.12)_1px,transparent_1px)]'}`} />

      <div className="absolute inset-0 bg-[size:48px_48px] bg-[radial-gradient(circle,rgba(217,168,62,0.18)_1px,transparent_1px)]" />

      <div className={`absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t to-transparent ${isDark ? 'from-[#070909]' : 'from-[#F7F5F0]'}`} />
    </div>
  );
}