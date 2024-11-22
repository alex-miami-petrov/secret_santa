import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export default function cn(...classList: ClassValue[]) {
    return twMerge(clsx(classList))
}