import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Button variant="teritary">Hello</Button>
      <Button variant="destructive">Hello</Button>
      <Button variant="muted">Hello</Button>
      <Button variant="outline">Hello</Button>

      <Button variant="primary">Hello</Button>
      <p className="text-balance text-3xl sm:text-4xl">Hello</p>
    </div>
  );
}
