import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden pt-44 pb-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid mask-radial"
      />
      <Container className="relative">
        <p className="font-mono text-sm text-alert">
          HTTP 404 · resource not found
        </p>
        <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight sm:text-7xl">
          Nothing here.{" "}
          <span className="text-muted">We checked every port.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted">
          The page you wanted has moved or never existed. Try one of these
          instead.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href="/">Back home</Button>
          <Button href="/services/" variant="ghost">
            Browse services
          </Button>
        </div>
      </Container>
    </section>
  );
}
