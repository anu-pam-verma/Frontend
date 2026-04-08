import Posts from "./posts";
const Feed = ()=>{
    return(
       <div className="flex-1 my-8 flex-col items-center justify-center pl-[20%]">
        <h1 className="text-3xl font-bold">Feed</h1>
          <Posts/>
       </div>
    )
}
export default Feed;