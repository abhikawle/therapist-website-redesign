import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dr. Maya Reynolds - Therapist & Counseling Services',
  description: 'Professional therapy and mental health counseling in San Francisco. Specializing in anxiety, depression, and life transitions.',
  keywords: 'therapist, counseling, mental health, anxiety, depression, San Francisco',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
