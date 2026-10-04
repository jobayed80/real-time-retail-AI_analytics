import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";

export default function Dashboard() {
  return (
    <div
      className="
      flex
      min-h-screen
      text-white
      bg-gradient-to-br
      from-slate-950
      via-[#071421]
      to-slate-950
      "
    >
      <Sidebar />

      <main className="flex-1 p-8">

        <h1 className="text-5xl font-bold">
          Welcome Back, Admin!
        </h1>

        <p className="text-gray-400 mt-2">
          Real-time people analytics and insights.
        </p>

        <div className="grid grid-cols-4 gap-6 mt-8">

          <StatCard
            title="Current Inside"
            value="12"
            subtitle="People in Store"
            color="text-cyan-400"
          />

          <StatCard
            title="Total Entered"
            value="152"
            subtitle="Today's Entries"
            color="text-green-400"
          />

          <StatCard
            title="Total Exited"
            value="140"
            subtitle="Today's Exits"
            color="text-red-400"
          />

          <StatCard
            title="Average Dwell Time"
            value="4.8m"
            subtitle="Per Customer"
            color="text-purple-400"
          />

        </div>

        <div className="grid grid-cols-3 gap-6 mt-8">

          <div
            className="
              col-span-2
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              rounded-2xl
              p-5
            "
          >
            <div className="flex justify-between">
              <h2 className="text-xl font-bold">
                Live Camera Feed
              </h2>

              <span className="text-green-400">
                ● LIVE
              </span>
            </div>

            <div
              className="
              mt-4
              h-[400px]
              bg-black/30
              rounded-xl
              flex
              items-center
              justify-center
              "
            >
              Camera Stream Here
            </div>
          </div>

          <div
            className="
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              rounded-2xl
              p-5
            "
          >
            <h2 className="font-bold mb-4">
              People Trend
            </h2>

            <div className="h-[350px] bg-black/20 rounded-xl flex justify-center items-center">
              Chart Coming Soon
            </div>
          </div>

        </div>

      </main>
    </div>
  );
}