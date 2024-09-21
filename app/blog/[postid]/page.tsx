export default function Page() {
  return (
    <div className="flex flex-col items-center  py-32 ">
      <div className="w-[80%] h-max">
        <div className="pb-10">
          <div className="text-5xl font-bold pb-5">Blog Title</div>
          <div className="text-lg ">Author date mata-ncu</div>
        </div>
        <div className="w-full h-96 bg-white rounded-md flex justify-center items-center text-6xl shadow-lg">
          <h1 className="text-black"> Cover</h1>
        </div>
        <div className=" prose-sm pt-16 sm:mx-auto min-h-screen">
          <h1>Data goes here</h1>
          <p>Blog post content goes here.</p>
        </div>
      </div>
    </div>
  );
}
