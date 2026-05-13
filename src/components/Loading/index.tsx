type LoadingProps = {
  fullscreen?: boolean;
};

const Loading = ({ fullscreen = true }: LoadingProps) => {
  return (
    <div
      className={`flex items-center justify-center ${
        fullscreen
          ? "fixed inset-0 z-[9999] dark:bg-dark bg-light"
          : "w-full py-10"
      }`}
    >
      <div role="status">
        <svg
          aria-hidden="true"
          className="inline w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 dark:fill-primary fill-secondary"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539"
            fill="currentFill"
          />
        </svg>

        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
