export default function BackgroundClient() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#08090a]" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.09),transparent_58%),radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.035),transparent_46%)]" />
      <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:64px_64px]" />
    </div>
  );
}
