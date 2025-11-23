import TextButton from "@/app/components/button/TextButton";
import Checkbox from "@/app/components/input/Checkbox";
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
        helperText="Enter your password"
      >
        <EncryptedInput />
      </InputGroup>
      <div className="flex items-center justify-between">
        <Checkbox label="Remember me" />
        <TextButton
          as="a"
          href="/auth/forgot-password"
          className="text-primary-100"
        >
          Forgot Password?
        </TextButton>
      </div>
      <Button className="mt-6" fullWidth variant="primary" color="primary">
        Log In
      </Button>
    </form>
  );
}
