



export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">
        The page you are looking for does not exist.
      </p>
      <Link href="/">
        <a className="text-indigo-600 hover:text-indigo-500">
          Go back to the homepage
        </a>
      </Link>
    </div>
  );
}

