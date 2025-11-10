# Lịch Âm Việt Nam / Vietnamese Lunar Calendar

**GNOME Shell Extension** - Hiển thị ngày âm lịch trên thanh bar và trong popup lịch của GNOME Shell.

## Tiếng Việt / Vietnamese

### Giới thiệu

Lịch Âm Việt Nam là một tiện ích mở rộng cho GNOME Shell giúp hiển thị ngày âm lịch Việt Nam trực tiếp trên thanh bar và trong popup lịch. Tiện ích này chuyển đổi ngày dương lịch sang ngày âm lịch theo đúng thuật toán tính toán truyền thống của Việt Nam.

### Tính năng

- Hiển thị ngày âm lịch trên thanh trạng thái của GNOME Shell
- Tích hợp vào popup lịch hệ thống
- Hỗ trợ năm nhuận và tháng nhuận
- Tự động cập nhật theo ngày
- Giao diện tinh tế, không gây rối mắt

### Hỗ trợ

- GNOME Shell 45, 46

### Cài đặt

#### Cách 1: Cài đặt thủ công

1. Tải về nguồn phần mềm:
   ```bash
   git clone https://github.com/vhchung/lunar-calendar-gnome-extension.git
   ```

2. Sao chép vào thư mục extensions của GNOME:
   ```bash
   cp -r lunar-calendar-gnome-extension ~/.local/share/gnome-shell/extensions/
   ```

3. Khởi động lại GNOME Shell:
   - Nhấn `Alt+F2`, nhập `r`, và nhấn Enter
   - Hoặc đăng xuất và đăng nhập lại

4. Kích hoạt extension:
  ```bash
   gnome-extensions enable lunar-calendar@chungvh.com
   ```

#### Cách 2: Sử dụng GNOME Extensions (chưa có sẵn)

1. Mở ứng dụng "Extensions" hoặc truy cập [https://extensions.gnome.org](https://extensions.gnome.org)
2. Tìm kiếm "Lịch Âm Việt Nam"
3. Cài đặt và kích hoạt extension

### Gỡ bỏ

Để gỡ bỏ extension:

```bash
gnome-extensions disable lunar-calendar@chungvh.com
rm -rf ~/.local/share/gnome-shell/extensions/lunar-calendar-gnome-extension
```

### Phát triển

Nếu bạn muốn đóng góp hoặc phát triển extension này:

1. Fork repository
2. Tạo nhánh mới: `git checkout -b feature/tinh-nang-moi`
3. Thực hiện thay đổi và commit: `git commit -am 'Thêm tính năng mới'`
4. Đẩy lên nhánh: `git push origin feature/tinh-nang-moi`
5. Tạo Pull Request

### Giấy phép

Đây là phần mềm mã nguồn mở. Vui lòng kiểm tra file LICENSE nếu có.

---

## English

### Introduction

Vietnamese Lunar Calendar is a GNOME Shell extension that displays the Vietnamese lunar calendar directly on the top bar and in the calendar popup. This extension converts solar dates to lunar dates using traditional Vietnamese calculation algorithms.

### Features

- Displays lunar calendar date on GNOME Shell status bar
- Integrates with system calendar popup
- Supports leap years and leap months
- Automatically updates daily
- Clean, minimalist interface

### Support

- GNOME Shell 45, 46

### Installation

#### Method 1: Manual Installation

1. Download the source code:
   ```bash
   git clone https://github.com/vhchung/lunar-calendar-gnome-extension.git
   ```

2. Copy to GNOME extensions directory:
   ```bash
   cp -r lunar-calendar-gnome-extension ~/.local/share/gnome-shell/extensions/
   ```

3. Restart GNOME Shell:
   - Press `Alt+F2`, type `r`, and press Enter
   - Or logout and login again

4. Enable the extension:
   ```bash
   gnome-extensions enable lunar-calendar@chungvh.com
   ```

#### Method 2: Using GNOME Extensions (not available right now)

1. Open "Extensions" application or visit [https://extensions.gnome.org](https://extensions.gnome.org)
2. Search for "Vietnamese Lunar Calendar"
3. Install and enable the extension

### Uninstallation

To remove the extension:

```bash
gnome-extensions disable lunar-calendar@chungvh.com
rm -rf ~/.local/share/gnome-shell/extensions/lunar-calendar-gnome-extension
```

### Development

If you want to contribute or develop this extension:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/new-feature`
3. Make changes and commit: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Create a Pull Request

### License

This is open-source software. Please check the LICENSE file if available.
