export default function StatCard({
  title,
  value,
  subtitle,
  color,
}) {
  return (
    <div
      className="
      bg-white/5
      backdrop-blur-xl
      border border-white/10
      rounded-2xl
      p-5
      shadow-[0_8px_32px_rgba(0,0,0,0.3)]
      hover:border-cyan-500/40
      hover:scale-[1.02]
      transition-all
      "
    >
      <p className="text-gray-400 text-sm">
        {title}
      </p>

     <h2
  className={`
  text-3xl
  md:text-4xl
  font-bold
  mt-2
  ${color}
`}
>
  {value}
</h2>
      <p className="text-xs text-gray-500 mt-2">
        {subtitle}
      </p>
    </div>
  );
}