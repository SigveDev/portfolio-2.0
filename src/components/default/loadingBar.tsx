const LoadingBar = ({ value }: { value: number }) => {
  const blocks = Array.from({
    length: value === 100 ? 30 : Math.ceil((value / 100) * 30),
  });

  return (
    <div className="w-full h-10 bg-transparent border-2 border-t-[#8c857b] border-l-[#8c857b] border-b-[#fcfaf7] border-r-[#fcfaf7] grid grid-cols-[repeat(30,_minmax(0,_1fr))] p-1 gap-1">
      {blocks.map((block) => (
        <div
          key={block as React.Key}
          className="bg-[#316bc6] h-full w-full"
        ></div>
      ))}
    </div>
  );
};

export default LoadingBar;
