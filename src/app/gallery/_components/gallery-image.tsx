// "use client"

// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { useImageLoad } from "@/hooks/use-image-load"
// import { cn } from "@/lib/utils"
// import { Skeleton } from "@/components/ui/skeleton"
// import { AspectRatio } from "@/components/ui/aspect-ratio"

// interface GalleryImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
//   aspect?: number
//   priority?: boolean
// }

// export function GalleryImage({
//   src,
//   alt,
//   aspect = 1,
//   priority = false,
//   className,
//   ...props
// }: GalleryImageProps) {
//   const [isHovered, setIsHovered] = useState(false)
//   const { isLoaded, isInView } = useImageLoad(src!, { rootMargin: "200px" })

//   return (
//     <AspectRatio ratio={aspect} className="overflow-hidden bg-muted rounded-lg">
//       <AnimatePresence mode="wait">
//         {!isLoaded && isInView && (
//           <motion.div
//             key="skeleton"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.2 }}
//             className="absolute inset-0"
//           >
//             <Skeleton className="w-full h-full" />
//           </motion.div>
//         )}
//       </AnimatePresence>
//       <motion.img
//       decoding={'async'}
//         src={isInView || priority ? src : undefined}
//         alt={alt}
//         className={cn(
//           "object-cover transition-all duration-700",
//           isLoaded ? "opacity-100" : "opacity-0",
//           className
//         )}
//         initial={{ scale: 1.1, filter: "blur(10px)" }}
//         animate={{
//           scale: isHovered ? 1.05 : 1,
//           filter: isLoaded ? "blur(0px)" : "blur(10px)"
//         }}
//         transition={{ duration: 0.4 }}
//         // onMouseEnter={() => setIsHovered(true)}
//         // onMouseLeave={() => setIsHovered(false)}
//         {...props}
//       />
//     </AspectRatio>
//   )
// }
