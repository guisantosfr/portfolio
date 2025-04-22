import { StaticImageData } from "next/image";

type Project = {
    id: number;
    name: string;
    description: string;
    sourceCode: string;
    liveUrl: string;
    img: StaticImageData;
}

export type { Project };