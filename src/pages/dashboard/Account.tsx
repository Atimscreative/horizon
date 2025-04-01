import { Button } from "@/components/ui/button";
import CustomCountryInput from "@/components/widgets/form/CustomCountryInput";
import CustomInput from "@/components/widgets/form/CustomInput";
import CustomStateInput from "@/components/widgets/form/CustomStateInput";
import UserProfile from "@/components/widgets/form/UserProfile";
import { useGetCountryState } from "@/hooks/useGetCountry";
import useGetCountryList from "@/hooks/useGetCountryStateList";
import { useUser } from "@/hooks/useUser";
import { databases } from "@/lib/appwrite";
import { appwriteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { ID } from "appwrite";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required("Enter your first name"),
  lastName: yup.string().required("Enter your last name"),
  address: yup.string().required("Enter your address"),
  state: yup.string().required("Enter your state"),
  postalCode: yup.string().required("Enter your postal code"),
  dateOfBirth: yup
    .string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, "Enter a valid date (YYYY-MM-DD)")
    .required("Enter your date of birth"),
  ssn: yup
    .string()
    .matches(/^\d{4}$/, "Enter last 4 digits of SSN")
    .required("Enter your SSN"),
  email: yup.string().email("Enter a valid email").required("Enter your email"),
});

export default function Account() {
  const { user } = useUser();
  const {
    state: { currentCountry },
  } = useGetCountryState();

  const { countries, states } = useGetCountryList(currentCountry);

  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
    getValues,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(getValues(), "getValues()");

  const handleUpdate = async (data: any) => {
    console.log(data, "Account", user, user?.$id, getValues());

    // try {
    //   await databases.createDocument(
    //     appwriteConfig.DATABASE_ID,
    //     appwriteConfig.USER_COLLECTION_ID,
    //     ID.unique(),
    //     { ...data, userId: user?.$id },
    //   );
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <section>
      <div className="h-[100px] w-full bg-[url(/src/assets/gradientbg.jpg)] bg-cover bg-center"></div>
      <div className="px-4 py-6 pt-0 lg:px-8">
        <div className="space-y-6">
          <UserProfile />

          <form id="userProfile" onSubmit={handleSubmit(handleUpdate)}>
            <div className="grid w-[50%] grid-cols-2 gap-4">
              {formData.map((data, index) => {
                if (data?.type === "select" && data?.name === "country") {
                  return (
                    <CustomCountryInput
                      key={index}
                      data={data}
                      errors={errors}
                      control={control}
                      options={countries}
                      setValue={setValue}
                    />
                  );
                } else if (data?.type === "select" && data?.name === "state") {
                  return (
                    <CustomStateInput
                      key={index}
                      data={data}
                      errors={errors}
                      control={control}
                      options={states}
                      setValue={setValue}
                    />
                  );
                }
                return (
                  <CustomInput
                    key={index}
                    errors={errors}
                    data={data}
                    register={register}
                    control={control}
                    className={cn(
                      "",
                      data?.name === "address" || data?.name === "email"
                        ? "col-span-2"
                        : "",
                    )}
                  />
                );
              })}
            </div>
            <Button className="bg-main hover:bg-main2 mt-4 h-10 px-8">
              Update
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

const formData = [
  {
    type: "text",
    name: "firstName",
    label: "First Name",
    placeholder: "Your first name",
    error_message: "Enter your first name",
    required: true,
  },
  {
    type: "text",
    name: "lastName",
    label: "Last Name",
    placeholder: "Your last name",
    error_message: "Enter your last name",
    required: true,
  },
  {
    type: "email",
    name: "email",
    label: "Email",
    placeholder: "Your email",
    error_message: "Enter your email",
    required: true,
  },

  {
    type: "select",
    name: "country",
    label: "Country",
    placeholder: "Your country",
    error_message: "Enter your country",
    required: true,
  },
  {
    type: "select",
    name: "state",
    label: "State",
    placeholder: "Your state",
    error_message: "Enter your state",
    required: true,
  },
  // {
  //   type: "text",
  //   name: "city",
  //   label: "City",
  //   placeholder: "Your city",
  //   error_message: "Enter your city",
  //   required: true,
  // },
  {
    type: "text",
    name: "postalCode",
    label: "Postal Code",
    placeholder: "Your postal code",
    error_message: "Enter your postal code",
    required: true,
  },
  {
    type: "text",
    name: "ssn",
    label: "SSN",
    placeholder: "Your ssn",
    error_message: "Enter your ssn",
    required: true,
  },
  {
    type: "text",
    name: "address",
    label: "Address",
    placeholder: "Your address",
    error_message: "Enter your address",
    required: true,
  },
];
