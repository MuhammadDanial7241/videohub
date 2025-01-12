import { AuthForm } from "@/components/auth/AuthForm";
import { VideoCard } from "@/components/video/VideoCard";
import { useEffect, useState } from "react";

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const isGuest = localStorage.getItem("isGuest") === "true";
    setIsAuthenticated(isGuest);
  }, []);

  const mockVideos = [
    {
      username: "user1",
      caption: "Amazing dance moves! #dance",
      videoUrl: "https://www.youtube.com/watch?v=XGEDweBq1ME",
    },
    {
      username: "user2",
      caption: "Check this out! #trending",
      videoUrl: "https://www.youtube.com/watch?v=slwy8WzzGbo",
    },
    {
      username: "user3",
      caption: "New video! #viral",
      videoUrl: "https://www.youtube.com/watch?v=PSRVS1HmHG4",
    },
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-app-black flex items-center justify-center p-4">
        <AuthForm />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-app-black p-4">
      <div className="max-w-2xl mx-auto space-y-4">
        {mockVideos.map((video, index) => (
          <VideoCard key={index} {...video} />
        ))}
      </div>
    </div>
  );
};

export default Index;