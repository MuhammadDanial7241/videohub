import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

export const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement Supabase auth after connection
    toast({
      title: "Coming soon!",
      description: "Authentication will be implemented once connected to Supabase.",
    });
  };

  const handleSkip = () => {
    // Store guest status in localStorage
    localStorage.setItem("isGuest", "true");
    // Reload the page to show videos
    window.location.reload();
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 space-y-6 bg-black/90 rounded-lg">
      <h2 className="text-2xl font-bold text-center text-white">
        {isLogin ? "Login" : "Sign Up"} to Video App
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-app-gray text-white border-none"
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-app-gray text-white border-none"
        />
        <Button
          type="submit"
          className="w-full bg-app-blue hover:bg-app-blue/90 text-white"
        >
          {isLogin ? "Login" : "Sign Up"}
        </Button>
      </form>
      <div className="space-y-4">
        <p className="text-center text-app-lightGray">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-app-blue hover:underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-app-gray"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-black px-2 text-app-lightGray">Or</span>
          </div>
        </div>
        <Button
          type="button"
          variant="outline"
          onClick={handleSkip}
          className="w-full border-app-gray text-app-lightGray hover:bg-app-gray/10"
        >
          Continue as Guest
        </Button>
      </div>
    </div>
  );
};