import Frame from "@/components/frame";
import AppFrame from "@/components/apps/frame";

import Container from "@/components/container";

export default function Home() {
  return (
    <>
      <div className="mx-auto my-16 max-w-6xl px-8">
        <Frame>
          <AppFrame />
        </Frame>
      </div>
      <div className="mx-auto max-w-6xl px-8 py-16">
        <Container>
          <AppFrame />
        </Container>
      </div>
    </>
  );
}
