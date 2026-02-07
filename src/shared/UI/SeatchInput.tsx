import { CloseButton, Input } from "@mantine/core";

type SearchInputProps = {
  value: string; // ← то самое value
  onChange: (val: string) => void; // ← функция, получающая v
  placeholder?: string;
  error?: string | false | undefined;
};

const SearchInput = ({
  value,
  onChange,
  placeholder,
  error,
}: SearchInputProps) => {
  return (
    <Input
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rightSectionPointerEvents="all"
      mt="md"
      error={error}
      rightSection={
        <CloseButton
          aria-label="Clear input"
          onClick={() => onChange("")}
          style={{ display: value ? undefined : "none" }}
        />
      }
    />
  );
};
export default SearchInput;
