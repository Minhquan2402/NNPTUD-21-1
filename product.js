const output = document.getElementById("output");

function log(text) {
  output.textContent += text + "\n";
}

// ===== Câu 1: Constructor function Product =====
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

// ===== Câu 2: Khởi tạo mảng products =====
const products = [
  new Product(1, "Chuột Logitech", 350000, 10, "Accessories", true),
  new Product(2, "Bàn phím cơ", 1200000, 0, "Accessories", true),
  new Product(3, "Laptop Dell", 18000000, 5, "Laptop", true),
  new Product(4, "Tai nghe Sony", 900000, 8, "Accessories", true),
  new Product(5, "Màn hình LG", 45000000, 3, "Monitor", true),
  new Product(6, "USB 32GB", 250000, 0, "Accessories", true)
];

// ===== Câu 3: Mảng mới chỉ chứa name & price =====
log("Câu 3:");
const namePriceList = products.map(p => ({
  name: p.name,
  price: p.price
}));
log(JSON.stringify(namePriceList, null, 2));

// ===== Câu 4: Lọc sản phẩm còn hàng =====
log("\nCâu 4:");
const inStock = products.filter(p => p.quantity > 0);
inStock.forEach(p => log(p.name));

// ===== Câu 5: Có sản phẩm > 30.000.000? =====
log("\nCâu 5:");
const hasExpensive = products.some(p => p.price > 30000000);
log(hasExpensive);

// ===== Câu 6: Accessories đều đang bán? =====
log("\nCâu 6:");
const accessoriesAvailable = products
  .filter(p => p.category === "Accessories")
  .every(p => p.isAvailable);
log(accessoriesAvailable);

// ===== Câu 7: Tổng giá trị kho =====
log("\nCâu 7:");
const totalValue = products.reduce(
  (sum, p) => sum + p.price * p.quantity,
  0
);
log(totalValue.toLocaleString() + " VNĐ");

// ===== Câu 8: for...of =====
log("\nCâu 8:");
for (const p of products) {
  const status = p.isAvailable ? "Đang bán" : "Ngừng bán";
  log(`${p.name} - ${p.category} - ${status}`);
}

// ===== Câu 9: for...in =====
log("\nCâu 9:");
for (const key in products[0]) {
  log(key + " : " + products[0][key]);
}

// ===== Câu 10: Sản phẩm đang bán & còn hàng =====
log("\nCâu 10:");
const sellingInStock = products
  .filter(p => p.isAvailable && p.quantity > 0)
  .map(p => p.name);

sellingInStock.forEach(name => log(name));
