import { Controller } from "react-hook-form";
import { Props } from "./CustomInput";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetCountryState } from "@/hooks/useGetCountry";

export default function CustomCountryInput({
  data,
  errors,
  control,
  options,
}: Props) {
  const { dispatch } = useGetCountryState();
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
          <Select
            onValueChange={(val) =>
              onChange(dispatch({ type: "country", payload: val }))
            }
            value={value}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={data?.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options?.map((_country) => (
                <SelectItem key={_country?.id} value={_country?.id}>
                  {_country?.name}
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
