import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset">

        <div className="border-gray-900 border-4">
          <Image 
            src="/icons/auth-image.png"
            alt="Auth image"
            width={600}
            height={600}
            className="rounded-l-xl object-contain"
          />
        </div>
        </div>
    </main>
  );
}
