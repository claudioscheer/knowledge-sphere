import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
// import { Greet } from "../wailsjs/go/main/App";

function App() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="w-full rounded-lg border min-h-screen"
    >
      <ResizablePanel defaultSize={40} className="min-w-1/5 h-full">
        <div className="flex p-6">
          <span className="font-semibold">Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={60} className="min-w-1/2 h-full">
        <div className="flex p-6">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default App;
