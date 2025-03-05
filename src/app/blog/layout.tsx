import SideNav from "../ui/components/sidenav";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex h-screen flex-coll md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-row p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
