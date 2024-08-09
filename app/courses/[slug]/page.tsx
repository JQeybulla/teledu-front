import {useParams} from "next/navigation";

export default function Page({params}) {
  return (
    <h1>{params.slug}</h1>
  )
}
