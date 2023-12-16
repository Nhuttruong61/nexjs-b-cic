import Tabble from "@/component/Tabble";
import Link from "next/link";
export default function Home() {
  const columns = ["#", "First Name", "Last Name", "Username"];
  const rows = [
    [1, "Mark", "Otto", "@mdo"],
    [2, "Jacob", "Thomton", "@fat"],
  ];
  return (
    <main>
      <ul className="container">
        <li>
          <Link href="/facebook">Facebook</Link>
        </li>
        <li>
          <Link href="/youtube">Youtube</Link>
        </li>
        <li>
          <Link href="/tiktok">Tiktok</Link>
        </li>
      </ul>
      <Tabble columns={columns} rows={rows} />
    </main>
  );
}
