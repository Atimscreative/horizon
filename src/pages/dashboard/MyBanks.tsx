import { Progress } from "@/components/ui/progress";
import Card from "@/components/widgets/card";

export default function MyBanks() {
  return (
    <section className="px-4 py-6 pt-24 lg:px-8 lg:pt-6">
      <div className="">
        <h1 className="text-3xl font-semibold">My Bank Accounts</h1>
        <p className="text-body mt-2">
          Effortlessly Manage Your Banking Activities
        </p>
      </div>

      <div className="mt-14">
        <h2 className="text-heading mb-4 text-lg font-semibold">Your cards</h2>

        <div className="space-y-5">
          <div className="w-min">
            <Card
              colorType="A"
              className=""
              cardType="mastercard"
              canCopyDetails
            />
            <div className="mt-4 w-full">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-body text-sm font-medium">
                  Spending this month
                </span>
                <span className="text-body-light text-sm">$2,840.40</span>
              </div>
              <Progress className="*:bg-main" value={33} />
            </div>
          </div>
          <div className="w-min">
            <Card
              colorType="B"
              className=""
              cardType="mastercard"
              canCopyDetails
            />
            <div className="mt-4 w-full">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-body text-sm font-medium">
                  Spending this month
                </span>
                <span className="text-body-light text-sm">$2,840.40</span>
              </div>
              <Progress className="*:bg-main" value={33} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
