import { Badge } from "@/components/ui/badge";
import { ColumnDef } from "@tanstack/react-table";

export type TransactionsProps = {
  transaction: string;
  amount: number;
  status: "pending" | "processing" | "success" | "declined";
  createdAt: Date;
  category: string;
};

type statusProp = "pending" | "processing" | "success" | "declined";
type categoryProp =
  | "deposit"
  | "income"
  | "food"
  | "transport"
  | "entertainment"
  | "utilities"
  | "other";

function getStatus(status: statusProp) {
  switch (status?.toLowerCase()) {
    case "pending":
      return (
        <Badge className="items-center gap-2 rounded-full bg-amber-500/10 px-2 py-1 text-xs font-medium text-amber-500 capitalize">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-500"></span>
          {status}
        </Badge>
      );
    case "processing":
      return (
        <Badge className="text-label bg-label/10 items-center gap-2 rounded-full px-2 py-1 text-xs font-medium capitalize">
          <span className="bg-label inline-block h-1.5 w-1.5 rounded-full"></span>
          {status}
        </Badge>
      );
    case "success":
      return (
        <Badge className="items-center gap-2 rounded-full bg-green-600/10 px-2 py-1 text-xs font-medium text-green-600 capitalize">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-600"></span>
          {status}
        </Badge>
      );
    case "declined":
      return (
        <Badge className="items-center gap-2 rounded-full bg-red-600/10 px-2 py-1 text-xs font-medium text-red-600 capitalize">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-600"></span>
          {status}
        </Badge>
      );

    default:
      break;
  }
}

function getCategory(category: categoryProp) {
  switch (category?.toLowerCase()) {
    case "subscription":
    case "groceries":
      return (
        <Badge className="items-center gap-2 rounded-full border-2 border-blue-600 bg-transparent px-2 py-1 text-xs font-medium text-blue-600 capitalize">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600"></span>
          {category}
        </Badge>
      );

    case "deposit":
    case "income":
      return (
        <Badge className="items-center gap-2 rounded-full border-2 border-green-600 bg-transparent px-2 py-1 text-xs font-medium text-green-600 capitalize">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-600"></span>
          {category}
        </Badge>
      );

    default:
      return (
        <Badge className="text-label border-label items-center gap-2 rounded-full border-2 bg-transparent px-2 py-1 text-xs font-medium capitalize">
          <span className="bg-label inline-block h-1.5 w-1.5 rounded-full"></span>
          {category}
        </Badge>
      );
  }
}

export const columns: ColumnDef<TransactionsProps>[] = [
  {
    accessorKey: "transaction",
    header: "Transaction",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "status",
    header: () => <div>Status</div>,
    cell: ({ row }) => {
      return <>{getStatus(row.getValue("status"))}</>;
    },
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    accessorKey: "category",
    header: () => <div>Category</div>,
    cell: ({ row }) => {
      return <>{getCategory(row.getValue("category"))}</>;
    },
  },
];
