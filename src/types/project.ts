import { StaticImageData } from "next/image";

type Project = {
    id: number;
    name: string;
    description: string;
    sourceCode?: string | null;
    liveUrl?: string | null;
    img: StaticImageData;
}

export type { Project };