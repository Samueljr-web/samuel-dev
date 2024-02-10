export const metadata = {
  title: "Samuel Adeyemi",
  description: "",
};

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <section className="mx-auto text-white w-[97%] tablet:w-[95%] max-w-[1380px]">
      {children}
    </section>
  );
}
