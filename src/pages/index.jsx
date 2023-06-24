


import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to the DiagramApp!</h1>
          <p className="text-lg text-gray-600">Start creating and collaborating on mind maps in real-time.</p>
          {/* Add your content here */}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}



