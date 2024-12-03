import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  startDate: string;
  spots: number;
  image: string;
  link: string;
}

export function CourseCard({
  title,
  description,
  duration,
  startDate,
  spots,
  image,
  link,
}: CourseCardProps) {
  return (
    <Card className="w-full flex-1 overflow-hidden">
      <div className="relative aspect-video w-full">
        <Image
          src={image}
          alt={title}
          className="h-full w-full object-cover"
          width={1000}
          height={1000}
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-start gap-4 text-sm text-gray-500 xl:flex-row xl:items-center">
          <div className="flex items-center">
            <Clock className="mr-1 h-4 w-4" />
            {duration}
          </div>
          <div className="flex items-center">
            <Calendar className="mr-1 h-4 w-4" />
            {startDate}
          </div>
          <div className="flex items-center">
            <Users className="mr-1 h-4 w-4" />
            {spots} spots
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full font-normal tracking-wide"
          variant={"outline"}
          asChild
        >
          <Link href={link}>Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
