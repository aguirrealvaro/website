"use client";

import { PageContainer, Wrapper } from "@/components";
import { Button } from "@/components/ui";

export default function Home() {
  return (
    <div>
      <Wrapper>
        <PageContainer>
          <Button variant="secondary" colorScheme="blue">
            Boton
          </Button>
        </PageContainer>
      </Wrapper>
    </div>
  );
}
