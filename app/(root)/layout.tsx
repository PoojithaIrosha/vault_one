export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      {/* Sidebar */}
      SIDEBAR
      {/* Sidebar */}
      {children}
    </main>
  );
}
