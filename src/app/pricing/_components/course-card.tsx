import PrimaryButton from "@/components/buttons/primary-button";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Clock, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  startDate: string;
  spots: number;
  image: string;
  link: string;
  slug: string;
}

export function CourseCard({
  title,
  description,
  duration,
  startDate,
  spots,
  image,
  link,
  slug,
}: CourseCardProps) {
  const searchQuery = `?course=${slug}`;
  return (
    <Card className="w-full flex-1 overflow-hidden">
      {/* <div className="relative aspect-video w-full">
        <Image
          src={image}
          alt={title}
          className="h-full w-full object-cover"
          width={1000}
          height={1000}
        />
      </div> */}
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
      <CardFooter className="flex flex-col gap-4">
        <Button
          className="w-full font-normal tracking-wide"
          variant={"outline"}
          asChild
        >
          <Link href={link}>Learn More</Link>
        </Button>
        <PrimaryButton
          variant={"kalon"}
          href={`/register${searchQuery}`}
          className="w-full rounded-sm font-normal tracking-wide"
          innerClassName="rounded-sm"
        >
          Register
        </PrimaryButton>
      </CardFooter>
    </Card>
  );
}
