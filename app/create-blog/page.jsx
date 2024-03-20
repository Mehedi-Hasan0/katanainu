"use client";

import Loader from "@/components/shared/Loader";
import dynamic from "next/dynamic";

const CreateBlogPage = dynamic(
  () =>
    import("../../components/pages/blogs/CreateBlogPage").then(
      (mod) => mod.default
    ),
  { ssr: false, loading: () => <Loader /> }
);

export default function Page() {
  return <CreateBlogPage />;
}
