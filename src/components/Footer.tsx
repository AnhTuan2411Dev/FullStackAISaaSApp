import { assets } from "../assets/assets";

const Footer = () => {
    return (
        <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
                <div className="md:max-w-96">
                    <img
                        className="h-9"
                        src={assets.logo}
                        alt="dummyLogoDark"
                    />
                    <p className="mt-6 text-sm">
                        Trải nghiệm sức mạnh của AI với QuickAi.<br/>
                        Biến đổi việc tạo nội dung của bạn với bộ công cụ AI cao cấp của chúng tôi. Viết bài, tạo hình ảnh và nâng cao quy trình làm việc của bạn.
                    </p>
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-20">
                    <div>
                        <h2 className="font-semibold mb-5 text-gray-800">Công ty</h2>
                        <ul className="text-sm space-y-2">
                            <li><a href="#">Trang chủ</a></li>
                            <li><a href="#">Giới thiệu</a></li>
                            <li><a href="#">Liên hệ</a></li>
                            <li><a href="#">Chính sách bảo mật</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold text-gray-800 mb-5">Đăng ký nhận bản tin</h2>
                        <div className="text-sm space-y-2">
                            <p>Tin tức mới nhất, bài viết và tài nguyên, được gửi đến hộp thư của bạn hàng tuần.</p>
                            <div className="flex items-center gap-2 pt-4">
                                <input
                                    className="border border-gray-500/30 placeholder-gray-500 focus:ring-2 ring-indigo-600 outline-none w-full max-w-64 h-9 rounded px-2"
                                    type="email"
                                    placeholder="Nhập email của bạn"
                                />
                                <button className="bg-blue-600 w-24 h-9 text-white rounded">Đăng ký</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="pt-4 text-center text-xs md:text-sm pb-5">
                Bản quyền 2024 © Tên công ty. Tất cả quyền được bảo lưu.
            </p>
        </footer>
    );
};

export default Footer;
