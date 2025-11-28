const ProductSkeleton = () => {
  return (
    <div className="flex w-52 flex-col gap-4">
    <div className="skeleton h-32 w-full rounded-lg"></div>
    <div className="skeleton h-4 w-28 rounded-md"></div>
    <div className="skeleton h-4 w-full rounded-md"></div>
    <div className="skeleton h-4 w-full rounded-md"></div>
  </div>
  )
}

export default ProductSkeleton