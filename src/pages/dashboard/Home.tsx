import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { initials } from "@/lib/utils";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { DataTable } from "@/components/dashboard-comps/transaction-comps/data-table";
import {
  columns,
  TransactionsProps,
} from "@/components/dashboard-comps/transaction-comps/columns";
import Card from "@/components/widgets/card";

export default function Home() {
  const [activeTab, setActiveTab] = useState("chase-bank");
  return (
    <section className="overflow-x-clip">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold">
          Welcome, <span className="text-main">Adrian</span>
        </h1>
        <p className="text-body mt-2">
          Access & manage your account and transactions efficiently.
        </p>
      </div>
      <Card />
      {/* BANK INFO/BALANCE */}
      <div className="rounded-2xl border border-[#EAECF0] p-6">
        <div></div>
        <div>
          <div className="flex items-center justify-between">
            <span className="text-heading font-semibold">2 Bank Accounts</span>
            <span className="text-main inline-flex cursor-pointer items-center gap-3">
              <Plus size={16} />
              Add bank
            </span>
          </div>

          <div className="mt-6 flex flex-col">
            <span className="text-body mb-2">Total Current Balance</span>
            <span className="text-heading text-3xl font-semibold">
              $2,698.12
            </span>
          </div>
        </div>
      </div>

      {/* RECENT TRANSACTIONS */}
      <div className="mt-8">
        <div className="flex items-center justify-between">
          <h2 className="text-heading text-xl font-semibold">
            Recent Transactions
          </h2>
          <Button variant="outline">View all</Button>
        </div>

        <div className="mt-7">
          <Tabs
            defaultValue={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="rounded-none border-b bg-transparent p-0">
              {tablist.map((list) => (
                <TabsTrigger
                  key={list.value}
                  value={list.value}
                  className="data-[state=active]:text-main data-[state=active]:border-main text-label rounded-none border-b-[3px] font-semibold duration-300 data-[state=active]:border-0 data-[state=active]:border-b-[3px] data-[state=active]:shadow-none data-[state=active]:ring-0 data-[state=active]:focus-visible:outline-none"
                >
                  {list.name}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value={activeTab}>
              <div className="relative flex items-start gap-3.5 rounded-[8px] bg-[#F5FAFF] p-6">
                <span className="bg-main inline-flex h-10 w-10 items-center justify-center rounded-full font-semibold text-white">
                  {initials("Chase bank")}
                </span>
                <div className="space-y-2">
                  <span className="block text-xl font-semibold text-[#194185]">
                    Chase Bank
                  </span>
                  <span className="text-main block text-lg font-semibold">
                    $2,588.12
                  </span>
                </div>
                <Badge className="absolute top-6 right-6 rounded-[50px] bg-green-600/25 px-3 py-1 text-sm font-medium text-green-600">
                  savings
                </Badge>
              </div>

              {/* TABLE */}
              <div className="hidden w-full overflow-x-hidden md:block">
                <div className="container mx-auto py-10">
                  <DataTable columns={columns} data={dummyData} />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

const tablist = [
  { name: "Chase Bank", value: "chase-bank" },
  { name: "Bank of America", value: "bank-of-america" },
  { name: "First Platypus Bank", value: "first-platypus-bank" },
];

const dummyData: TransactionsProps[] = [
  {
    transaction: "TXN123456",
    amount: 100.0,
    status: "success",
    createdAt: new Date("2023-01-01"),
    category: "Food",
  },
  {
    transaction: "TXN123457",
    amount: 250.5,
    status: "pending",
    createdAt: new Date("2023-02-15"),
    category: "subscription",
  },
  {
    transaction: "TXN123458",
    amount: 75.0,
    status: "declined",
    createdAt: new Date("2023-03-10"),
    category: "income",
  },
  {
    transaction: "TXN123459",
    amount: 300.0,
    status: "processing",
    createdAt: new Date("2023-04-05"),
    category: "Travel",
  },
  {
    transaction: "TXN123460",
    amount: 150.0,
    status: "success",
    createdAt: new Date("2023-05-20"),
    category: "deposit",
  },
];
