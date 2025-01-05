import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
export default function Login() {
  return (
    <section className="flex flex-col items-center justify-center h-screen max-w-[380px] mx-auto">
      <article className="grid w-full max-w-sm items-center gap-1.5 ">
        <Input type="email" id="email" placeholder="Email" />
        <Input type="password" id="password" placeholder="Password" />
      </article>
      <section className="py-3 flex justify-between w-full">
        <div className="flex items-center space-x-2">
          <Checkbox id="rememberme" />
          <label
            htmlFor="rememberme"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Remember Me
          </label>
        </div>
        <div className="text-blue-500 text-sm font-medium">Forget Password</div>
      </section>
      <Button className="w-full py-5" variant="default">
        Login
      </Button>
      <article className="py-5">
        <p className="text-sm text-gray-500">
          Don&apos;t have an account?{" "}
          <span className="text-blue-500">Signup</span>
        </p>
      </article>
    </section>
  );
}
