const Sidebar = () => {
  return (
    <aside className="w-40 h-full bg-gray-800 text-white p-4">
      <nav className="flex flex-col gap-4">
        <a href="/" className="hover:text-blue-400">
          Trang chủ
        </a>
        <a href="/about" className="hover:text-blue-400">
          Giới thiệu
        </a>
        <a href="/contact" className="hover:text-blue-400">
          Liên hệ
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
