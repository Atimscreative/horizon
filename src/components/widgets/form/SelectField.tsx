import { Controller } from "react-hook-form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Props } from "./CustomInput";

export default function SelectField({ data, errors, control, options }: Props) {
  return (
    <div className={""}>
      <label
        htmlFor={data?.name}
        className="text-label mb-1.5 block text-sm font-medium"
      >
        {data?.label}
      </label>
      <Controller
        name={data?.name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Select onValueChange={onChange} value={value}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={data?.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options?.map((opt: any, index: number) => (
                <SelectItem key={index} value={opt?.value}>
                  {opt?.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />

      {errors[data?.name] && (
        <p className="mt-2 text-sm text-red-600">{data?.error_message}</p>
      )}
    </div>
  );
}
