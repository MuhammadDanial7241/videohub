import React, { useState, useEffect } from "react";
import {
  Heart,
  MessageCircle,
  Share2,
  Play,
  Pause,
  Volume2,
  VolumeX,
  ThumbsUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import CreateAccount from "../auth/Account"; // Adjust the import path as necessary
import VideoUpload from "./VideoUpload";

interface VideoCardProps {
  username: string;
  caption: string;
  videoUrl: string;
}

export const VideoCard = ({ username, caption, videoUrl }: VideoCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control comments modal
  const [comments, setComments] = useState([
    { id: 1, text: "Great video!", likes: 0 },
    { id: 2, text: "Amazing content!", likes: 0 },
    { id: 3, text: "This is awesome!", likes: 0 },
  ]); // Sample comments

  useEffect(() => {
    // Extract YouTube video ID from URL
    const extractVideoId = (url: string) => {
      const match = url.match(/[?&]v=([^&]+)/);
      return match ? match[1] : "";
    };
  }, [videoUrl]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Open or close comments modal
  };

  const handleLike = (id: number) => {
    setComments(
      comments.map((comment) =>
        comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
      )
    );
  };

  return (
    <div className="relative w-full max-w-[500px] mx-auto bg-app-black rounded-lg overflow-hidden mb-4">
      <div className="relative aspect-[9/16] bg-app-gray">
        <iframe
          src={`https://www.youtube.com/embed/${videoUrl}`}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div className="absolute bottom-4 left-4 right-12 z-10">
          <h3 className="text-white font-semibold">@{username}</h3>
          <p className="text-white/80 text-sm">{caption}</p>
        </div>
        <div className="absolute top-4 right-4 flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="bg-black/50 hover:bg-black/70"
            onClick={togglePlay}
          >
            {isPlaying ? (
              <Pause className="h-6 w-6 text-white" />
            ) : (
              <Play className="h-6 w-6 text-white" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="bg-black/50 hover:bg-black/70"
            onClick={toggleMute}
          >
            {isMuted ? (
              <VolumeX className="h-6 w-6 text-white" />
            ) : (
              <Volume2 className="h-6 w-6 text-white" />
            )}
          </Button>
        </div>
      </div>
      <div className="absolute right-2 bottom-4 flex flex-col items-center gap-4">
        <button className="p-2 rounded-full bg-app-gray/50 hover:bg-app-gray">
          <Heart className="w-6 h-6 text-white" />
        </button>
        <button
          className="p-2 rounded-full bg-app-gray/50 hover:bg-app-gray"
          onClick={toggleModal} // Toggle comments modal on click
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </button>
        <button className="p-2 rounded-full bg-app-gray/50 hover:bg-app-gray">
          <Share2 className="w-6 h-6 text-white" />
        </button>
      </div>
      <div className="flex justify-between items-center mt-6 px-6">
        {/* Video Upload Component (center) */}
        <div className="flex-grow flex justify-center">
          <VideoUpload />
        </div>

        {/* Create Account Component (right) */}
        <div className="flex justify-end">
          <CreateAccount />
        </div>
      </div>

      {/* Comments Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Comments</h2>

            {/* List of Comments */}
            <div className="space-y-4">
              {comments.map((comment) => (
                <div
                  key={comment.id}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <p>{comment.text}</p>
                  <div className="flex items-center space-x-2">
                    {/* Like Button */}
                    <button
                      className="text-blue-500 hover:text-blue-700"
                      onClick={() => handleLike(comment.id)}
                    >
                      <ThumbsUp size={20} />
                    </button>
                    <span>{comment.likes}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Close Button */}
            <button
              className="mt-4 text-red-500 hover:text-red-700"
              onClick={toggleModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
