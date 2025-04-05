type DocHeaderProps = {
  title: string;
  children?: React.ReactNode;
};

export default function DocHeader({ title, children }: DocHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-4">
      <h1 className="text-3xl font-bold">{title}</h1>
      {children}
    </div>
  );
}
