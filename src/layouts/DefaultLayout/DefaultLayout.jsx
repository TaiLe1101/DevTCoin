import Header from "./components/Header/Header";

export default function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <main style={{ minHeight: "110vh" }}>{children}</main>
    </>
  );
}
