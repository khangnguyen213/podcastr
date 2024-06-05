import RightSideBar from '@/components/RightSideBar';
import LeftSidebar from '@/components/ui/LeftSidebar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col">
      <main className="relative flex bg-black-3">
        <LeftSidebar />
        {children}
        <RightSideBar />
      </main>
    </div>
  );
}
