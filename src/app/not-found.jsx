import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-[60vh] gap-4 text-center">
            <h1 className="text-8xl font-bold">404</h1>
            <h2 className="text-2xl font-semibold">Page Not Found</h2>
            <p className="text-gray-500">The page you are looking for does not exist.</p>
            <Link href="/" className="btn btn-neutral mt-2">
                Go Back Home
            </Link>
        </div>
    );
};

export default NotFound;