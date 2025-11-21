import { ValidationRule } from "@/app/components/validation/ValidationRule";
import Button from "@components/button/Button";
import EncryptedInput from "@components/input/EncryptedInput";
import Input from "@components/input/Input";
import InputGroup from "@components/input/InputGroup";

export default function SignupPage() {
  return (
    <form className="flex flex-col gap-4">
      <InputGroup
        className="w-full"
        label="Email"
        helperText="Enter your company email eg: johndoe@org.com"
      >
        <Input />
      </InputGroup>
      <InputGroup
        className="w-full"
        label="Password"
        helperText="Enter a strong password"
      >
        <EncryptedInput />
      </InputGroup>
      <InputGroup
        className="w-full"
        label="Confirm Password"
        helperText="Enter password again"
      >
        <EncryptedInput />
      </InputGroup>
      <Button className="mt-6 mb-2" fullWidth variant="primary" color="primary">
        Create Account
      </Button>
      <div className="flex flex-col gap-2">
        <ValidationRule label={"At least 8 characters"} isValid={false} />
        <ValidationRule
          label={"At least one uppercase letter"}
          isValid={false}
        />
        <ValidationRule
          label={"At least one lowercase letter"}
          isValid={false}
        />
        <ValidationRule label={"At least one digit"} isValid={false} />
        <ValidationRule
          label={"At least one special character"}
          isValid={false}
        />
      </div>
    </form>
  );
}
