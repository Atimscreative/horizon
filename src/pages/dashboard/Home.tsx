import { Button } from "@/components/ui/button";
import { EllipsisVertical, Monitor, Plus } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { initials } from "@/lib/utils";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { DataTable } from "@/components/dashboard-comps/transaction-comps/data-table";
import {
  columns,
  TransactionsProps,
} from "@/components/dashboard-comps/transaction-comps/columns";
import UserImg from "@/assets/jsmastery.png";
import Card from "@/components/widgets/card";
import { Progress } from "@/components/ui/progress";

export default function Home() {
  const [activeTab, setActiveTab] = useState("chase-bank");
  return (
    <section className="overflow-x-clip lg:grid lg:grid-cols-[65%_35%]">
      <div className="px-4 py-6 pt-24 lg:px-8 lg:pt-6">
        <div className="mb-6">
          <h1 className="text-3xl font-semibold">
            Welcome, <span className="text-main">Adrian</span>
          </h1>
          <p className="text-body mt-2">
            Access & manage your account and transactions efficiently.
          </p>
        </div>

        {/* BANK INFO/BALANCE */}
        <div className="rounded-2xl border border-[#EAECF0] p-6">
          <div></div>
          <div>
            <div className="flex items-center justify-between">
              <span className="text-heading font-semibold">
                2 Bank Accounts
              </span>
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
      </div>

      <div className="hidden border-l border-[#EAECF0] lg:block">
        <div className="h-[100px] w-full bg-[url(/src/assets/gradientbg.jpg)] bg-cover bg-center"></div>

        <div className="px-6">
          {/* USER PROFILE */}
          <div className="space-y-6">
            <img
              src={UserImg}
              alt="user avatar"
              className="-mt-10 h-24 w-24 rounded-full border-4 border-white shadow-lg"
            />
            <div className="">
              <p className="text-label text-2xl font-semibold">Adrian Hajdin</p>
              <p className="text-body-light text-sm">adrian@jsmastery.pro</p>
            </div>
          </div>

          {/* USER BANKS */}
          <div className="mt-8 flex items-center justify-between">
            <span className="text-heading text-lg font-semibold">My Banks</span>
            <span className="text-body inline-flex cursor-pointer items-center gap-3">
              <Plus size={16} />
              Add bank
            </span>
          </div>

          {/* CARDS */}
          <div className="relative mt-6 h-[240px]">
            <Card cardType={"mastercard"} className="z-10 w-[290px]" />
            <Card
              cardType={"mastercard"}
              className="absolute top-8 left-6 w-[290px]"
              colorType="A"
            />
          </div>
        </div>

        <div className="border-t p-6">
          <div className="flex items-center justify-between">
            <span className="text-heading text-lg font-semibold">
              My Budgets
            </span>
            <span className="text-body inline-flex cursor-pointer items-center gap-3">
              <EllipsisVertical size={16} />
            </span>
          </div>

          {/* BUDGET LIST */}
          <div className="mt-6 space-y-3">
            <div className="flex items-center justify-between gap-4 rounded-[8px] bg-[#F5FAFF] p-4">
              <div className="bg-main/20 flex h-10 w-10 items-center justify-center rounded-full">
                <Monitor size={16} className="text-main" />
              </div>
              <div className="grow">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-medium text-blue-900">
                    Subscriptions
                  </span>
                  <span className="text-blue-700">$25 left</span>
                </div>
                <Progress className="*:bg-main bg-blue-100" value={33} />
              </div>
            </div>
            <div className="flex items-center justify-between gap-4 rounded-[8px] bg-pink-100/25 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100">
                <Monitor size={16} className="text-pink-700" />
              </div>
              <div className="grow">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-medium text-pink-900">
                    Food and booze
                  </span>
                  <span className="text-pink-700">$120 left</span>
                </div>
                <Progress className="bg-pink-100 *:bg-pink-700" value={33} />
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-[8px] bg-green-100/25 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                <Monitor size={16} className="text-green-700" />
              </div>
              <div className="grow">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-medium text-green-900">Savings</span>
                  <span className="text-green-700">$50 left</span>
                </div>
                <Progress className="bg-green-100 *:bg-green-700" value={33} />
              </div>
            </div>
          </div>
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
