import Image from "next/image";

interface EmptyProps {
  label: string;
}

const Empty = ({ label }: EmptyProps) => {
  return (
    <div className="h-full p-20 flex flex-col items-center">
      <div className="relative h-72 w-72 ">
        <Image fill alt="Empty" src="/empty.png" />
      </div>
      <p className="text-muted-foreground text-sm ">{label}</p>
    </div>
  );
};

export default Empty;
