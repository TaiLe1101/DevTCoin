import Header from "./components/Header/Header";

export default function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <main style={{ marginTop: 64 }}>{children}</main>
    </>
  );
}
