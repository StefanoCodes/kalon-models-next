"use client";

import { useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { useInfiniteScroll } from "@/hooks/use-infinite-scroll";
import { GalleryImage } from "./gallery-image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

// This would typically come from an API
const fetchImages = (page: number, limit: number) => {
  return Array.from({ length: limit }, (_, i) => ({
    id: `img-${page}-${i}`,
    src: `https://picsum.photos/seed/${page * limit + i}/800/600`,
    alt: `Random image ${page * limit + i}`,
    aspect: Math.random() > 0.5 ? 4 / 3 : 3 / 4,
  }));
};

export function Gallery() {
  const [images, setImages] = useState(() => fetchImages(0, 12));
  const [page, setPage] = useState(1);
  const [layout, setLayout] = useState<"grid" | "masonry">("grid");
  const [searchTerm, setSearchTerm] = useState("");

  const loadMoreImages = useCallback(() => {
    const newImages = fetchImages(page, 12);
    setImages((prev) => [...prev, ...newImages]);
    setPage((prev) => prev + 1);
  }, [page]);

  const { isFetching, setIsFetching } = useInfiniteScroll(loadMoreImages);

  const filteredImages = useMemo(() => {
    return images.filter((img) =>
      img.alt.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [images, searchTerm]);

  const toggleLayout = () => {
    setLayout((prev) => (prev === "grid" ? "masonry" : "grid"));
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.h1
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Enterprise Gallery
          </motion.h1>
          <motion.p
            className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore our curated collection with advanced features and dynamic
            layouts.
          </motion.p>
        </div>
        <div className="mt-8 flex items-center justify-between">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 transform text-gray-400" />
            <Input
              type="text"
              placeholder="Search images..."
              className="py-2 pl-10 pr-4"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button onClick={toggleLayout} variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            {layout === "grid" ? "Masonry" : "Grid"}
          </Button>
        </div>
        <motion.div
          className={cn(
            "mt-12 gap-6",
            layout === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              : "columns-1 sm:columns-2 lg:columns-3",
          )}
          layout
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layout
            >
              <GalleryImage
                src={image.src}
                alt={image.alt}
                aspect={image.aspect}
                priority={index < 6}
                className={cn("w-full", layout === "masonry" && "mb-6")}
              />
            </motion.div>
          ))}
        </motion.div>
        {isFetching && (
          <div className="mt-8 text-center">
            <p className="text-gray-500">Loading more images...</p>
          </div>
        )}
      </div>
    </section>
  );
}
