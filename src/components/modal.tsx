"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Close } from "@radix-ui/react-dialog";
import { CheckCircle, X as CloseIcon } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <Button onClick={toggleModal} className="w-fit">
        Toggle Modal
      </Button>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            // onClick={toggleModal}
          >
            <div className="flex h-full w-full items-center justify-center">
              <motion.div
                className="relative z-[9999] h-full min-h-[50vh] w-full max-w-7xl overflow-auto rounded-none bg-white md:h-auto md:rounded-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <div className="flex flex-col gap-4">
                  <CloseIcon
                    className="sticky top-2 mr-3 mt-3 h-4 w-4 cursor-pointer self-end"
                    onClick={toggleModal}
                  />
                  <div className="flex flex-col items-center justify-between gap-4 p-10 pt-0">
                    <h1 className="text-4xl">Pricing</h1>
                    <div className="flex flex-col gap-2 self-start">
                      <div className="flex flex-col gap-8">
                        <div className="grid w-full gap-8 md:grid-cols-2">
                          {/* Standard Plan */}
                          <div className="flex flex-col gap-4 rounded-lg border p-6">
                            <div className="flex items-baseline justify-between">
                              <h2 className="text-2xl font-bold">Standard</h2>
                              <span className="text-3xl font-bold">R950</span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Perfect for those starting their modelling
                              journey. Gain access to essential training and
                              begin your path to success.
                            </p>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-green-500" />
                                <span>Runway Training (2 Sessions/Month)</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-green-500" />
                                <span>Theory (2 Sessions/Month)</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-green-500" />
                                <span>Photoshoot (1 Per Term)</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-green-500" />
                                <span>
                                  More Than Skin Deep (1 Session/Month)
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-green-500" />
                                <span>Annual Fashion Show</span>
                              </div>
                            </div>
                            <Button className="mt-4">Select Plan</Button>
                          </div>

                          {/* Premium Plan */}
                          <div className="flex flex-col gap-4 rounded-lg border border-primary bg-primary/5 p-6">
                            <div className="flex items-baseline justify-between">
                              <h2 className="text-2xl font-bold">Premium</h2>
                              <span className="text-3xl font-bold">R1295</span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              For those ready to elevate their skills. Dive
                              deeper into modelling with enhanced training and
                              growth opportunities.
                            </p>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-green-500" />
                                <span>Runway Training (2 Sessions/Month)</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-green-500" />
                                <span>Theory (2 Sessions/Month)</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-green-500" />
                                <span>
                                  General Photoshoots (1 Session/Term)
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-green-500" />
                                <span>
                                  Casting Skills Training (1 Session/Month)
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-green-500" />
                                <span>
                                  General Content Creation (1 Session/Month)
                                </span>
                              </div>
                            </div>
                            <Button className="mt-4" variant="default">
                              Select Plan
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
