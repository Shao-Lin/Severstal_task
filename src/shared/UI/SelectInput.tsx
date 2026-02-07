import { NativeSelect } from "@mantine/core";

type SelectProps = {
  value?: string;
  data: string[];
  placeholder: string;
  onChange: (val: string | undefined) => void;
  error?: string | false | undefined;
};

const SelectInput = ({
  value,
  data,
  placeholder,
  onChange,
  error,
}: SelectProps) => {
  const extendedData = [
    { value: "", label: placeholder, hidden: true },
    ...data.map((item) => ({ value: item, label: item })),
  ];

  return (
    <NativeSelect
      data={extendedData}
      value={value ?? ""}
      onChange={(e) => {
        const v = e.currentTarget.value;
        onChange(v === "" ? undefined : v);
      }}
      mt="md"
      error={error}
    />
  );
};

export default SelectInput;
