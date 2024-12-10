import PrimaryButton from "@/components/buttons/primary-button";
import Modal from "@/components/modal";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Clock, Users } from "lucide-react";
import { CourseCardProps } from "../../register.config";

export function CourseCard({
  title,
  description,
  duration,
  startDate,
  spots,
  link,
  slug,
}: CourseCardProps) {
  const searchQuery = `?course=${slug}`;
  return (
    <Card className="w-full flex-1 overflow-hidden">
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
        <Modal />

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
