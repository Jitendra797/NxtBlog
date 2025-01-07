import Dashboard from "./dashboard/page";
import Header from "./header/page";
import Login from "./login/page";

export default function Home() {
  return (
    <section>
      <Header />,
      <Dashboard />
    </section>
  );
}
