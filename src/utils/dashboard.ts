import {
  CardAdd,
  DollarCircle,
  Home2,
  Icon,
  MoneySend,
  ReceiptItem,
} from "iconsax-react";

export const navMenus: Array<{
  name: string;
  to: string;
  icon: Icon;
}> = [
  {
    name: "Dashboard",
    to: "/dashboard",
    icon: Home2,
  },
  {
    name: "My Banks",
    to: "/dashboard/my-banks",
    icon: DollarCircle,
  },
  {
    name: "Transaction History",
    to: "/dashboard/transaction-history",
    icon: ReceiptItem,
  },
  {
    name: "Payment Transfer",
    to: "/dashboard/payment-transfer",
    icon: MoneySend,
  },
  {
    name: "Connect Bank",
    to: "/dashboard/connect-bank",
    icon: CardAdd,
  },
];
