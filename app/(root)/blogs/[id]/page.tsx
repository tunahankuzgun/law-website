export default async function Blog({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const id = (await params).id;

  return <div>Blog Number {id}</div>;
}
