export default function TopNav() {
  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className="absolute top-0 left-0 right-0 z-50 flex items-center px-6 py-6 bg-transparent"
    >
      {/* Left Logo - RV Monogram */}
      <div className="flex items-center">
        <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm tracking-tight">
          HR
        </div>
      </div>
    </nav>
  );
}
