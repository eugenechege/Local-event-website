const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">LocalEventFinder</h3>
            <p className="text-gray-400">Discover the best events in your city. Never miss out on the fun!</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Popular Events</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">New Events</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Free Events</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Nearby Events</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to get updates on upcoming events</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 w-full rounded-l-lg focus:outline-none text-gray-800"
              />
              <button className="bg-indigo-600 px-4 py-2 rounded-r-lg hover:bg-indigo-700 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} LocalEventFinder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;