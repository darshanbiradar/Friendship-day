import "./globals.css"

export const metadata = {
  title: "Happy Friendship Day! pa ri",
  description: "A heartfelt surprise filled with memories, emotions, and a fun little game made just for you dumboji .",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-black`}>{children}</body>
    </html>
  )
}
