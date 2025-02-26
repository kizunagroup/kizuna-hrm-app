import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-6">Kizuna HRM</h1>

      <div className="max-w-md text-center mb-8">
        <p className="mb-4">
          Hệ thống quản lý nhân sự toàn diện - Giải pháp hiệu quả cho doanh
          nghiệp của bạn
        </p>
        <p>
          Quản lý nhân viên, đánh giá hiệu suất và kiểm tra kiến thức dễ dàng
        </p>
      </div>

      <div className="space-x-4">
        <Link
          to="/login"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Đăng nhập
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
