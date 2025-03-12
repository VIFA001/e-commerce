export function formatCurrency(amount) {
  return amount.toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  });
}
export const SEVER_URL =
  process.env.NODE_ENV === "production"
    ? "https://e-commerce-72s0.onrender.com"
    : "http://localhost:3001";
