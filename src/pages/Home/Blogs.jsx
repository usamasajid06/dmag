import BlogCard from "../../components/BlogCard";

const Blogs = () => {
  return (
    <section>
      <div className="container px-4 mx-auto mt-28">
        <div className="flex flex-col text-center w-full mb-8">
          <h2 className="text-lg text-gray-900 tracking-widest font-medium title-font mb-4">
            LATEST UPDATES
          </h2>
          <h1 className="sm:text-3xl text-4xl font-bold title-font mb-12 text-gray-900">
            NEWS. BLOGS.
          </h1>
        </div>
      </div>
      <BlogCard />
    </section>
  );
};

export default Blogs;
