
import { SculptureList } from "./components/SculptureList";


export default function App() {
  return (
    <div className="flex flex-col lg:flex-row justify-center gap-5 items-center h-screen w-screen bg-slate-700 p-6">

      <div className="flex flex-col items-center w-full lg:w-1/3">
        <SculptureList />
      </div>
    </div>
  );
}
