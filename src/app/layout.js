import './globals.css';

export const metadata = {
  title: 'BhagatSoft',
  description: 'Your Vision, Our Code',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}