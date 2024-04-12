import SkeletonCard from "./SkeletonCard"

const Loading = () => {
  return (
    <main>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:px-10 z-0">
            {"abc".split("").map((index) => (
               <SkeletonCard key={index} />
            ))}
        </div>
    </main>
  )
}

export default Loading