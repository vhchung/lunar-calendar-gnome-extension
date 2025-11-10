"use strict";

import Clutter from "gi://Clutter";
import GLib from "gi://GLib";
import St from "gi://St";

import { Extension } from "resource:///org/gnome/shell/extensions/extension.js";
import * as Main from "resource:///org/gnome/shell/ui/main.js";
import { SolarDate } from "./util.js";

// --- BẮT ĐẦU LOGIC CHUYỂN ĐỔI ÂM LỊCH ĐÃ SỬA LỖI HOÀN CHỈNH ---
function getLunarDate(dt) {
  // Khởi tạo đối tượng từ thư viện với ngày dương lịch hiện tại
  const aSolarDate = new SolarDate(dt);

  console.log(aSolarDate);
  const ld = aSolarDate.toLunarDate();

  // Trích xuất thông tin theo cấu trúc mà phần còn lại của extension mong đợi
  return {
    day: ld.day,
    month: ld.month,
    year: ld.year,
    leap_month: ld.leap_month,
    leap_year: ld.leap_year,
    day_name: ld.getDayName(),
    month_name: ld.getMonthName(),
    year_name: ld.getYearName(),
  };
}
// --- KẾT THÚC LOGIC CHUYỂN ĐỔI ÂM LỊCH ---

export default class LunarCalendarExtension extends Extension {
  enable() {
    this._dateMenu = Main.panel.statusArea.dateMenu;
    this._clockDisplay = this._dateMenu._clockDisplay;
    this._container = this._clockDisplay.get_parent();

    this._lunarLabel = new St.Label({
      text: this._getLunarDateString(),
      y_expand: true,
      y_align: Clutter.ActorAlign.CENTER,
      style_class: "lunar-label",
    });

    const children = this._container.get_children();
    const clockIndex = children.indexOf(this._clockDisplay);
    this._container.insert_child_at_index(this._lunarLabel, clockIndex + 1);

    this._openStateConnection = this._dateMenu.menu.connect(
      "open-state-changed",
      (menu, isOpen) => {
        if (isOpen) this._addDetailedLunarDate();
        else this._removeDetailedLunarDate();
      },
    );

    this._timeout = GLib.timeout_add_seconds(GLib.PRIORITY_DEFAULT, 30, () => {
      this._lunarLabel.text = this._getLunarDateString();
      if (this._dateMenu.menu.isOpen) this._updateDetailedLunarDate();
      return GLib.SOURCE_CONTINUE;
    });
  }

  disable() {
    if (this._timeout) {
      GLib.source_remove(this._timeout);
      this._timeout = null;
    }
    if (this._openStateConnection && this._dateMenu) {
      this._dateMenu.menu.disconnect(this._openStateConnection);
      this._openStateConnection = null;
    }
    if (this._lunarLabel) {
      this._lunarLabel.destroy();
      this._lunarLabel = null;
    }
    this._removeDetailedLunarDate();
    this._dateMenu = null;
    this._clockDisplay = null;
    this._container = null;
  }

  _getLunarDateString() {
    const lunarDate = getLunarDate(new Date());
    // Hiển thị chữ N nếu là tháng nhuận
    return `(Âm lịch: ${lunarDate.day}/${lunarDate.month}${lunarDate.leap_month ? " N" : ""})`;
  }

  _getDetailedLunarDateString() {
    const lunarDate = getLunarDate(new Date());
    const dayName = `${lunarDate.day_name}`;
    const monthName = `${lunarDate.month_name}`;
    const yearName = `${lunarDate.year_name}`;

    // Hiển thị "(Nhuận)" nếu là tháng nhuận
    const monthString = lunarDate.leap_month
      ? `tháng ${lunarDate.month} (Nhuận)`
      : `tháng ${lunarDate.month}`;
    const dateString = `Âm lịch: ${lunarDate.day} ${monthString} năm ${yearName}`;

    return `${dateString}\n(Ngày ${dayName}, tháng ${monthName})`;
  }

  _addDetailedLunarDate() {
    if (this._detailedLunarLabel) return;

    this._detailedLunarLabel = new St.Label({
      text: this._getDetailedLunarDateString(),
      style_class: "lunar-detail-label",
    });

    // Chèn thông tin chi tiết vào vị trí phù hợp trong menu
    const calendar = this._dateMenu.menu.box.get_last_child();
    if (calendar) {
      this._dateMenu.menu.box.insert_child_below(
        this._detailedLunarLabel,
        calendar,
      );
    } else {
      this._dateMenu.menu.box.add_child(this._detailedLunarLabel);
    }
  }

  _updateDetailedLunarDate() {
    if (this._detailedLunarLabel) {
      this._detailedLunarLabel.text = this._getDetailedLunarDateString();
    }
  }

  _removeDetailedLunarDate() {
    if (this._detailedLunarLabel) {
      this._detailedLunarLabel.destroy();
      this._detailedLunarLabel = null;
    }
  }
}
