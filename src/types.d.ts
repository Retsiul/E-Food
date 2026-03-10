export type CheckoutStep = "cart" | "form";

declare interface CartItem {
  id: number;
  nome: string;
  preco: number;
  foto: string;
}
