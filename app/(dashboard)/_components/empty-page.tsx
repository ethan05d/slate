import Image from "next/image";

interface EmptyPageProps {
  src: string;
  label: string;
  height?: number;
  width?: number;
  subLabel?: string;
}

const EmptyPage = ({ src, label, height, width, subLabel }: EmptyPageProps) => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src={src}
        alt="empty"
        height={height === undefined ? 200 : height}
        width={width === undefined ? 200 : width}
      />
      <h2 className="text-2xl font-semibold mt-6">{label}</h2>
      <p className="text-muted-foreground text-sm mt-2">{subLabel}</p>
    </div>
  );
};

export default EmptyPage;
