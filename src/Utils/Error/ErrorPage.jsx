
const ErrorPage = () => {
  return (
    <div>
      <div className="grid h-screen place-content-center bg-[#2b2b2b] px-4">
        <div className="text-center">
          <h1 className="text-9xl font-black text-white">404</h1>
          <p className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
            Uh-oh!
          </p>
          <p className="mt-4 text-white font-semibold">We can't find this page.</p>

          <a
            href="/"
            className="mt-6 inline-block rounded bg-white text-[#2c2418] px-5 py-3 text-sm font-medium hover:bg-customGold focus:outline-none focus:ring"
          >
            Go Back Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
