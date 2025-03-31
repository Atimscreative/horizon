import { cn } from "@/lib/utils";
import SelectField from "./SelectField";

export type SeletedOption = { label: string; value: string };

export type Props = {
  data: any;
  errors: any;
  register?: any;
  control?: any;
  options?: any[];
  className?: string;
};

export default function CustomInput({
  data,
  errors,
  register,
  control,
  options,
  className,
}: Props) {
  switch (data?.type) {
    case "text":
      return <TextField {...{ errors, data, register, className }} />;
    case "email":
      return <TextField {...{ errors, data, register, className }} />;
    case "select":
      return <SelectField {...{ errors, data, control, options, className }} />;
    default:
      return null;
  }
}

function TextField({ data, errors, register, className }: Props) {
  return (
    <div className={cn(className)}>
      <label
        htmlFor={data?.name}
        className="text-label mb-1.5 block text-sm font-medium"
      >
        {data?.label}
      </label>
      <input
        {...register(data?.name)}
        type={data?.type}
        id={data?.name}
        placeholder={data?.placeholder}
        className={cn(
          "placeholder:text-body-light focus:ring-main focus:border-main mt-1 block h-11 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none",
          errors[data?.name]?.error_message as string,
        )}
      />

      {errors[data?.name] && (
        <p className="mt-2 text-sm text-red-600">{data?.error_message}</p>
      )}
    </div>
  );
}
