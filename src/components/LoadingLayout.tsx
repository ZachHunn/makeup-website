export const LoadingLayout: React.FC = (): JSX.Element => {
  return (
    <div className="h-screen w-screen flex flex-col items-center pt-40">
      <div className="border-gray-300 h-40 w-40 animate-spin rounded-full border-8 border-t-accent"></div>
      <span className="text-3xl">Loading...</span>
    </div>
  );
};
