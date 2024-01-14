import React from 'react';
import '../styles/globals.css';

export const metadata = {
  title: '나의 프로젝트',
  description: 'AI Platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
