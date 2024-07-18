export default function Page({ params }: { params: { slug: string } }) {
  return <p>Blog: {params.slug}</p>
}