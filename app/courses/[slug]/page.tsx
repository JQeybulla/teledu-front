import ApplyComponent from "@/components/details/Apply.component";
import WhatWeOffer from "@/components/details/WhatWeOffer.component";

interface Params {
  name: string;
  slug: string;
}
export default function Page({ params }: { params: Params }) {
  return (
    <>
      {/* <h1>{params.slug}</h1> */}
      <ApplyComponent />
      <WhatWeOffer />
    </>
  );
}
