import Link from "next/link";

const Blogs = () => {
  return (
    <div>
      <h3 className="">Blogs</h3>
      <ul>
        <li>
          <Link href="/blogs/1"> Blog 1</Link>
        </li>
        <li>
          <Link href="/blogs/2"> Blog 2</Link>
        </li>
        <li>
          <Link href="/blogs/3"> Blog 3</Link>
        </li>
        <li>
          <Link href="/blogs/4"> Blog 4</Link>
        </li>
      </ul>
    </div>
  );
};

export default Blogs;
