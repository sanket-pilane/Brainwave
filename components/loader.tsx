import Image from "next/image";

const Loader = () => {
  return (
    <div className="h-full flex felx-col gap-y-4 items-center justify-center">
      <div className="relative w-10 h-10 animate-spin">
        <Image alt="Logo" src="brainwave-symbol.svg" fill />
      </div>

      <p className="text-sm text-muted-foreground">
        Brainwave is Thinking.....
      </p>
    </div>
  );
};

export default Loader;
