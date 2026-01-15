# 🎓 MinhKhoi's Commencement Ceremony

Chào mừng bạn đến với trang web kỷ niệm hành trình 1000 ngày tại trường THPT Chuyên Lê Quý Đôn của Minh Khôi. Trang web này được thiết kế để lưu giữ những khoảnh khắc quý giá và kết nối với bạn bè, thầy cô.

## ✨ Tính năng nổi bật

* **Thiệp mời điện tử:** Thông tin chi tiết về buổi chụp hình kỷ yếu diễn ra vào ngày 1/2 tại Nha Trang.
* **Gallery hình ảnh:** Phân loại ảnh theo các thư mục như "Lễ Tốt Nghiệp", "Bạn Bè" với tốc độ tải nhanh (Lazy Loading).
* **Hệ thống RSVP:** Xác nhận tham dự trực tuyến thuận tiện cho khách mời.
* **Lưu bút (Guestbook):** Nơi bạn bè gửi lại những lời chúc và kỷ niệm thân thương.
* **Bảng điều khiển Admin:** Quản lý dữ liệu RSVP và Lưu bút được bảo mật bằng mật khẩu.

## 🚀 Công nghệ sử dụng

* **Frontend:** HTML5, CSS3 (Hardware Acceleration), JavaScript (ES6+).
* **Tối ưu hóa:** * Sử dụng `DocumentFragment` để render gallery tốc độ cao.
    * Kích hoạt GPU thông qua CSS `transform: translateZ(0)` để hiệu ứng mượt mà.
    * Tự động giải phóng bộ nhớ và ưu tiên tải ảnh không đồng bộ (`decoding="async"`).
* **Lưu trữ:** GitHub Pages.

## 📂 Cấu trúc thư mục

```text
/minhkhoi-graduation/
│
├── index.html          # Khung trang chính
├── css/
│   └── style.css       # Giao diện & hiệu ứng GPU
├── js/
│   ├── gallery.js      # Xử lý hình ảnh
│   ├── main.js         # Điều hướng & Admin logic
│   └── form-handler.js # Xử lý gửi form
└── assets/             # Hình ảnh và tài nguyên khác
