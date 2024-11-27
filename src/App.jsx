
import { Counter } from "./components/Counter";
import { Confirmation } from "./components/HandleClick";
import { SculptureList } from "./components/SculptureList";


export default function App() {
  return (
    <div className="flex flex-col lg:flex-row justify-center gap-5 items-center h-screen w-screen p-6">



      <div className="flex flex-col items-center w-full lg:w-1/3">

        <SculptureList />
        
      </div>

    <div className="flex flex-col gap-5 items-center w-full lg:w-1/3">
        <Counter/>
        <Confirmation />
      </div>
    </div>
  );
}
