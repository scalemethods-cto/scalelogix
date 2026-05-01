import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ScaleLogix AI Diagnostic Tool",
  description: "Diagnose growth bottlenecks and quantify revenue lift from automation.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
