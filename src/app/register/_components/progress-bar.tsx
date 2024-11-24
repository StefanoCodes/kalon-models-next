import { cn } from "@/lib/utils"

export default function ProgressBar({ progressPercentage, showPercentage, className }: {
    progressPercentage?: number,
    showPercentage?: boolean
    className?: string,
}) {
    return (
        <div className="flex flex-col">
            <div className="w-full bg-gray-200 h-2 dark:bg-gray-700">
                <div className={cn("bg-blue-600 h-2", className)} style={{ width: `${progressPercentage}%` }}></div>

            </div>
            {
                showPercentage && <span className="text-blackColor self-end p-1 text-sm">{progressPercentage} %</span>
            }
        </div>
    )
}

// export default function ProgressBar({ progressPercentage}: {
//     progessPercentage: number
// } {
//     return (
//         <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
//             <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progressPercentage[progressPercentage]}%` }}></div>
//         </div>

//     )
// })




