export default function formatNumber(value, decimals = 2) {
  if (isNaN(value)) return "N/A"; // Trả về "N/A" nếu không phải là số

  return Number(value)
    .toFixed(decimals) // Làm tròn đến số thập phân
    .replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Thêm dấu phẩy phân cách hàng nghìn
}
