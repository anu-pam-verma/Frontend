import { Avatar, AvatarImage } from "./ui/avatar";

const Post = () => {
  return (
    <div className="my-8 w-full max-w-sm mx-auto">
      <div className="flex gap-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="Shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1>User Name</h1>
      </div>
    </div>
  );
};
export default Post;
