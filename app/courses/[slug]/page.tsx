import ApplyComponent from "@/components/details/Apply.component";

interface Params {
  name: string;
  slug: string;
}
export default function Page({ params }: { params: Params }) {
  return (
    <>
      {/* <h1>{params.slug}</h1> */}
      <ApplyComponent />
    </>
  );
}
