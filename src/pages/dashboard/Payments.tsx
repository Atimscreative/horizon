import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CreditCard } from "lucide-react";

export default function Payments() {
  return (
    <section className="bg-[#FCFCFD] px-4 py-6 pt-24 lg:px-8 lg:pt-6">
      <div>
        <h1 className="text-3xl font-semibold">Payment Transfer</h1>
        <p className="text-body mt-2">
          Please provide any specific details or notes related to the payment
          transfer
        </p>
      </div>

      <div>
        <div className="mt-14">
          <h2 className="text-heading mb-1 text-lg font-semibold">
            Transfer details
          </h2>
          <p className="text-body">Enter the details of the recipient</p>
        </div>
        <hr className="my-5" />

        {/* BANK ACCOUNTS */}
        <div className="grid items-center gap-2 md:gap-8 md:grid-cols-[1fr_1.5fr] lg:max-w-[70%]">
          <div>
            <h3 className="text-body mb-1 font-medium">Select Source Bank</h3>
            <p className="text-body-light text-sm">
              Select the bank account you want to transfer funds from
            </p>
          </div>
          <div>
            <Select>
              <SelectTrigger className="h-11 w-full">
                <SelectValue
                  placeholder={
                    <>
                      <CreditCard />
                      <span>Select Account</span>
                    </>
                  }
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <hr className="my-5" />

        {/* NOTE */}
        <div className="grid items-start gap-2 md:gap-8 md:grid-cols-[1fr_1.5fr] lg:max-w-[70%]">
          <div>
            <h3 className="text-body mb-1 font-medium">
              Transfer Note (Optional)
            </h3>
            <p className="text-body-light text-sm">
              Please provide any additional information or instructions related
              to the transfer
            </p>
          </div>
          <div>
            <textarea
              name="transferNote"
              id="transferNote"
              className="text-label h-[140px] w-full resize-none rounded-[8px] border p-4 text-sm"
            />
          </div>
        </div>

        <hr className="my-5" />
      </div>

      <div>
        <div className="">
          <h2 className="text-heading mb-1 text-lg font-semibold">
            Bank account details
          </h2>
          <p className="text-body">
            Enter the bank account details of the recipient
          </p>
        </div>

        <hr className="my-5" />

        <div className="grid items-start gap-2 md:gap-8 md:grid-cols-[1fr_1.5fr] lg:max-w-[70%]">
          <label htmlFor="" className="text-body mb-1 font-medium">
            Recipient's Email Address
          </label>

          <input
            type="email"
            name="email"
            id="email"
            className="block h-10 w-full rounded-[8px] border px-4"
          />
        </div>

        <hr className="my-5" />

        <div className="grid items-start gap-2 md:gap-8 md:grid-cols-[1fr_1.5fr] lg:max-w-[70%]">
          <label htmlFor="accountNumber" className="text-body mb-1 font-medium">
            Recipient's Account Number
          </label>

          <input
            type="text"
            name="accountNumber"
            id="accountNumber"
            className="block h-10 w-full rounded-[8px] border px-4"
          />
        </div>

        <hr className="my-5" />

        <div className="grid items-start gap-2 md:gap-8 md:grid-cols-[1fr_1.5fr] lg:max-w-[70%]">
          <label htmlFor="amount" className="text-body mb-1 block font-medium">
            Recipient's Amount
          </label>

          <input
            type="text"
            name="amount"
            id="amount"
            className="col-span-2 block h-10 w-full rounded-[8px] border px-4 md:col-span-1"
          />

          <Button className="bg-main hover:bg-main2 col-span-2 h-auto w-full py-3 text-white">
            Transfer Funds
          </Button>
        </div>
      </div>
    </section>
  );
}
