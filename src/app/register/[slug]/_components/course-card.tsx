"use client";
import PrimaryButton from "@/components/buttons/primary-button";
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
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export function CourseCard({
  title,
  description,
  duration,
  startDate,
  spots,
  link,
  slug,
}: CourseCardProps) {
  const [isSelected, setIsSelected] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [search, setSearch] = useState("");
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
        <PrimaryButton
          href={link}
          variant="outline"
          className="w-full rounded-sm font-normal tracking-wide"
          innerClassName="rounded-sm"
        >
          Learn more
        </PrimaryButton>
        <AnimatePresence mode="popLayout">
          {!isSelected && (
            <motion.div
              className="w-full"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, x: -200 }}
              transition={{
                type: "tween",
              }}
            >
              <PrimaryButton
                variant={"kalon"}
                className="w-full rounded-sm font-normal tracking-wide"
                innerClassName="rounded-sm"
                onClick={() => {
                  setIsSelected(true);
                  setShowButtons(true);
                }}
              >
                Register
              </PrimaryButton>
            </motion.div>
          )}
        </AnimatePresence>
        {showButtons && isSelected && (
          <motion.div
            className="flex w-full items-center gap-2"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.3,
              type: "tween",
            }}
          >
            <PrimaryButton
              variant={"kalon"}
              href={`/register/?course=teens&membership=${slug}`}
              className="w-full rounded-sm font-normal tracking-wide"
              innerClassName="rounded-sm"
              onClick={() => {
                setIsSelected(true);
                setShowButtons(true);
              }}
            >
              Register Teens
            </PrimaryButton>
            <PrimaryButton
              variant={"kalon"}
              href={`/register/?course=adults&membership=${slug}`}
              className="w-full rounded-sm font-normal tracking-wide"
              innerClassName="rounded-sm"
              onClick={() => {
                setIsSelected(true);
                setShowButtons(true);
              }}
            >
              Register Adults
            </PrimaryButton>
          </motion.div>
        )}
      </CardFooter>
    </Card>
  );
}
