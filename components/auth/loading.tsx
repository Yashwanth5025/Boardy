import Image from "next/image";

export const Loading = () => {
    return (
        <div className="flex items-center justify-center h-full">
            <Image
                src="/logo.svg"
                alt="Loading..."
                width={125}
                height={125}
                className="animate-pulse"
            />
        </div>
    );
};