import Image from "next/image";

export default function RecentPosts() {
  return (
    <div className="w-screen py-5 relative px-4 bg-gradient-to-b from-base-200 to-base-100">
      {/* <div className="custom-shape-divider-top-1724584049">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg> */}
      {/* </div> */}
      <div className="flex flex-row justify-between">
        <h1 className="text-2xl font-bold py-2">Latest Romanian</h1>
        <div className="btn btn-secondary">See all</div>
      </div>
      <div className="divider divider-secondary w-full opacity-60"></div>
      <div className="">
        {Array.from(Array(4).keys()).map((x) => (
          <BlogCard key={x} />
        ))}
      </div>
      <div className="flex flex-row justify-between">
        <h1 className="text-2xl font-bold py-2">Latest English</h1>
        <div className="btn btn-secondary">See all</div>
      </div>
      <div className="divider divider-secondary w-full opacity-60"></div>
      <div className="">
        {Array.from(Array(4).keys()).map((x) => (
          <BlogCard key={x} />
        ))}
      </div>
    </div>
  );
}

const BlogCard = () => {
  return (
    <div className="p-4 flex flex-row">
      <div className="h-40 max-w-64 bg-white rounded-sm">
        <Image
          src="/iris.png"
          className="object-cover h-full w-full rounded-sm"
          height={400}
          width={400}
          alt="iris"
        />
      </div>
      <div className="p-8 flex flex-col gap-3">
        <div className="text-3xl font-bold">Title</div>
        <div className="text-lg">
          Descriptionoe moldavium has been written by pookiebear Iustin in 2029
        </div>
        <div className="flex-grow"></div>
        <div className="text-sm">By LucaSain - 29.02.2024</div>
      </div>
    </div>
  );
};
