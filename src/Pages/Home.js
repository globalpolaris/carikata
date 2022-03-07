import Form from "../components/Form";
import Words from "../components/Words";

export default function Home() {
  return (
    <div className="max-w-full flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center">Carikata</h1>
      <div className="w-8/12 xl:w-6/12">
        <Form />
        <Words />
      </div>
    </div>
  );
}
