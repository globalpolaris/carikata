import FormKata from "../components/FormKata";
import AllWords from "../components/AllWords";

export default function Home() {
  return (
    <div className="max-w-full flex flex-col items-center my-5">
      <h1 className="text-2xl font-bold text-center">Carikatla</h1>
      <div className="w-8/12 xl:w-6/12">
        <FormKata />
        <AllWords />
      </div>
    </div>
  );
}
