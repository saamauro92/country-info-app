import Search from "../Search";
import Link from 'next/link';


const Layout = ({ children, handleSubmit, handleInputChange, searchInput }) => {


  return (
    <div className="flex h-screen overflow-hidden">

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Navbar */}
        <header className="flex-shrink-0 bg-slate-200 border-b md:pr-20 md:pl-3">
          <div className="flex items-center justify-between px-4 py-3">
            {/* Logo */}
            <Link href="/" className="font-bold text-lg">
              Countries info
            </Link>

            {/* Search Input */}
            <Search
              handleSubmit={handleSubmit}
              handleInputChange={handleInputChange}
              searchInput={searchInput}
            />
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
