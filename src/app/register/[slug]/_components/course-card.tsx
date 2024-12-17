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
import { Check, Clock, Users } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
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
  const [isSelected, setIsSelected] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  return (
    <Card className="w-full flex-1 overflow-hidden">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-8">
          <div className="flex flex-row items-start gap-4 text-sm text-gray-500 xl:items-center">
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              {duration}
            </div>
            <div className="flex items-center">
              <Users className="mr-1 h-4 w-4" />
              {spots} spots
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-6">
              <div className="flex w-full items-center justify-between gap-2 border-b pb-3">
                <p className="text-sm font-normal">Runway Training</p>
                <span className="text-xs">2 Sessions Per Month</span>
              </div>
              <div className="flex w-full items-center justify-between gap-2 border-b pb-3">
                <p className="text-sm font-normal">Runway Training</p>
                <span className="text-xs">2 Sessions Per Month</span>
              </div>
              <div className="flex w-full items-center justify-between gap-2 border-b pb-3">
                <p className="text-sm font-normal">Runway Training</p>
                <span className="text-xs">2 Sessions Per Month</span>
              </div>
              <div className="flex w-full items-center justify-between gap-2 border-b pb-3">
                <p className="text-sm font-normal">Runway Training</p>
                <span className="text-xs">2 Sessions Per Month</span>
              </div>
            </div>
          </div>
          {/* list */}
        </div>
      </CardContent>
      <CardFooter className="relative flex w-full flex-col gap-4">
        <div className="w-full">
          {/* <PrimaryButton
            variant="secondary"
            className="rounded-lg"
            innerClassName="rounded-lg"
            href={link}
          >
            View more
          </PrimaryButton> */}
        </div>
        <AnimatePresence mode="popLayout">
          {!isSelected && (
            <motion.div
              className="w-full"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, x: -300 }}
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
