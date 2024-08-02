import Frame from "@/components/frame/frame";
import App from "@/components/app";

export default function Home() {
  return (
    <div className="mx-auto my-16 max-w-6xl px-8">
      <Frame>
        <App />
      </Frame>
    </div>
  );
}
