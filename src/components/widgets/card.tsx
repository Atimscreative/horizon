import { cn } from "@/lib/utils";
import { Copy, Nfc } from "lucide-react";

type Props = {
  canCopyDetails?: boolean;
  colorType?: "A" | "B" | "C";
  cardType?: "mastercard" | "visa" | "verve";
  className?: string;
};

const cardColor = (type: "A" | "B" | "C") => {
  switch (type) {
    case "A":
      return "bg-[url(/src/assets/Lines.svg),linear-gradient(#0179fe,#4893ff)]";
    case "B":
      return "bg-[url(/src/assets/Lines.svg),linear-gradient(#5E37FF,#4e2cd3)]";
    case "C":
      return "bg-[url(/src/assets/Lines.svg),url(/src/assets/gradientbg.jpg)] bg-cover after:absolute after:top-0 after:left-0 after:z-0 after:block after:h-full after:w-[70%] after:bg-[#344054]";
  }
};

const getCardType = (cardType: "mastercard" | "visa" | "verve") => {
  switch (cardType) {
    case "mastercard":
      return <img src="/src/assets/mastercard.png" alt={cardType} />;
    case "visa":
      return <img src="/src/assets/visa-logo.png" alt={cardType} />;
    case "verve":
      return <img src="/src/assets/visa-logo.png" alt={cardType} />;

    default:
      break;
  }
};

export default function Card({
  canCopyDetails = false,
  colorType = "C",
  cardType = "mastercard",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "relative flex h-[180px] w-[300px] flex-col justify-between overflow-hidden rounded-2xl px-3.5 py-4",
        cardColor(colorType),
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <div className="relative z-[1] font-semibold text-white uppercase">
          Horizon Banking
        </div>
        <div>
          {canCopyDetails ? (
            <span className="inline-flex h-6 w-6 cursor-pointer items-center justify-center rounded-[4px] bg-[#FFFFFF4D]">
              <Copy size={14} color="#fff" />
            </span>
          ) : (
            <Nfc size={32} color="#fff" />
          )}
        </div>
      </div>

      <div className="relative z-[1] flex items-center justify-between">
        <div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-white uppercase">Adrian Hajdin</span>
            <span className="text-xs text-white">06/24</span>
          </div>
          <div className="mt-2 text-white">1234 1234 1234 1234</div>
        </div>
        <div>
          <div className="inline-flex h-8 w-11 items-center justify-center rounded-[4px] bg-white/20">
            {getCardType(cardType)}
          </div>
        </div>
      </div>
    </div>
  );
}
