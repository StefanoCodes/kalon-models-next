import { cn } from "@/lib/utils"

export default function ProgressBar({ progressPercentage, className }: {
    progressPercentage?: 33 | 66 | 100,
    className?: string,
}) {
    return (
        <div className="w-full bg-gray-200 h-1 dark:bg-gray-700">
            <div className={cn("bg-blue-600 h-1", className)} style={{ width: `${progressPercentage}%` }}></div>
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




