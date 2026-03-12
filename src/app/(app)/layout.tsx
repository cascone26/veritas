import Sidebar from "@/components/Sidebar";
import ActivityTracker from "@/components/ActivityTracker";
import SearchModal from "@/components/SearchModal";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-stone-950">
      <ActivityTracker />
      <Sidebar />
      <SearchModal />
      <main className="flex-1 pb-16 lg:ml-64 lg:pb-0">
        {children}
      </main>
    </div>
  );
}
