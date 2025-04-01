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

export default function CustomStateInput({
  data,
  errors,
  control,
  options,
  setValue,
}: Props) {
  const { state, dispatch } = useGetCountryState();
  console.log(
    state,
    options,

    "state",
  );
  const selectedState = options?.find(
    (item) => item?.id === parseInt(state.currentState, 10),
  );

  console.log(errors);

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
            onValueChange={(val) => {
              onChange(dispatch({ type: "state", payload: val }));
              setValue("state", selectedState?.name);
            }}
            value={value}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={data?.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options?.map((_state) => (
                <SelectItem key={_state?.id} value={String(_state?.id)}>
                  {_state?.name}
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
