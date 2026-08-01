import Link from "next/link";
import { Container, Button } from "@/app/components/ui";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Container className="text-center">
        <div className="mb-4 text-7xl font-bold text-cortex-400">404</div>
        <h1 className="mb-2 text-2xl font-semibold text-[rgb(var(--color-fg))]">Page not found</h1>
        <p className="mb-8 text-[rgb(var(--color-muted))]">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/">
          <Button>Go Home</Button>
        </Link>
      </Container>
    </div>
  );
}
