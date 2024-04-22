import Dashboard from "./components/Dashboard";
import NavigationBar from "./components/NavigationBar";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <main className="grid">
        <h1 className="text-center">Enjoy These Delicious Recipes!</h1>
        <Dashboard />
      </main>
    </>
  );
}
