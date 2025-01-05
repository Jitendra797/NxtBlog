import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <div className="grid w-full max-w-sm items-center gap-1.5">
      <Input type="email" id="email" placeholder="Email" />
      <Input type="password" id="password" placeholder="Password" />
      </div>
    </section>
  )
}

