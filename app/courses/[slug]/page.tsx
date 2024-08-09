interface Params {
  slug: string
}
export default function Page({params}:{params: Params}) {
  return (
    <h1>{params.slug}</h1>
  )
}
