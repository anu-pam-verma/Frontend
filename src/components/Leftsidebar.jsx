import {
  Heart,
  Home,
  LogOut,
  MessageCircle,
  PlusSquare,
  Search,
  TrendingUp,
} from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const sidebarItems = [
  { icon: <Home />, text: "Home" },
  { icon: <Search />, text: "Search" },
  { icon: <TrendingUp />, text: "Explore" },
  { icon: <MessageCircle />, text: "Messages" },
  { icon: <Heart />, text: "Notifications" },
  { icon: <PlusSquare />, text: "Create" },
  {
    icon: (
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    ),
    text: "profile",
  },
  { icon: <LogOut />, text: "Logout" },
];

const Leftsidebar = () => {
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/v1/auth/logout", {
        withCredentials: true,
      });
      if (res.status.success) {
        navigate("/login");
        toast.success("res.data.message");
      }
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  const sideBarHandler = (text) => {
    console.log(text);
    if (text === "Logout") {
      logoutHandler();
    }
  };
  return (
    <>
      <div className="border-gray-300 border-r h-screen w-[250px] p-4">
        {sidebarItems.map((item, index) => (
          <div
            onClick={() => sideBarHandler(item.text)}
            key={index}
            className="flex items-center gap-3 relative cursor-pointer hover:bg-gray-200 rounded-md p-2 "
          >
            {item.icon} {item.text}
          </div>
        ))}
      </div>
    </>
  );
};
export default Leftsidebar;
