import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-aman-beige-light px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-aman-taupe mb-4 font-arabic">أمان</h1>
        <h2 className="text-4xl font-bold text-aman-taupe mb-6">404</h2>
        <p className="text-xl text-aman-taupe-light mb-8">Page not found</p>
        <Link 
          href="/"
          className="inline-block px-8 py-4 bg-aman-teal text-white rounded-lg hover:bg-opacity-90 transition-all"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
