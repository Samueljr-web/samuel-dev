export const metadata = {
  title: "Samuel Adeyemi - Frontend Engineer",
  description: "",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo.png",
        href: "/logo.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo.png",
        href: "/logo.png",
      },
    ],
  },
};

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <section className="mx-auto text-white w-[97%] tablet:w-[95%] max-w-[1380px]">
      {children}
    </section>
  );
}
