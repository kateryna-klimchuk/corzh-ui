import { StoryWrapper } from "../../Utilities/StoryWrapper/StoryWrapper";
import { Meta, StoryFn } from "@storybook/react";
import { Toast, useToast, ToastProvider } from "./Toast";
import { Button } from "../Button/Button";

const meta: Meta = {
  title: "Components/Toast",
} as Meta;

export default meta;

type Story = StoryFn;

const ToastDemo = () => {
  const { addToast } = useToast();

  return (
    <div className="flex flex-wrap gap-4">
      <Button
        label="Info Toast"
        color="blue"
        onClick={() =>
          addToast({
            variant: "info",
            title: "Information",
            message: "This is an informational toast message.",
          })
        }
      />
      <Button
        label="Success Toast"
        color="green"
        onClick={() =>
          addToast({
            variant: "success",
            title: "Success!",
            message: "Your action was completed successfully.",
          })
        }
      />
      <Button
        label="Warning Toast"
        color="white"
        onClick={() =>
          addToast({
            variant: "warning",
            title: "Warning",
            message: "Please review this before continuing.",
          })
        }
      />
      <Button
        label="Error Toast"
        color="red"
        onClick={() =>
          addToast({
            variant: "error",
            title: "Error",
            message: "Something went wrong. Please try again.",
          })
        }
      />
    </div>
  );
};

const ToastWithoutTitle = () => {
  const { addToast } = useToast();

  return (
    <div className="flex flex-wrap gap-4">
      <Button
        label="Simple Info"
        color="blue"
        onClick={() =>
          addToast({
            variant: "info",
            message: "A simple notification without a title.",
          })
        }
      />
      <Button
        label="Simple Success"
        color="green"
        onClick={() =>
          addToast({
            variant: "success",
            message: "Operation completed!",
          })
        }
      />
    </div>
  );
};

const ToastWithDuration = () => {
  const { addToast } = useToast();

  return (
    <div className="flex flex-wrap gap-4">
      <Button
        label="Quick (2s)"
        color="blue"
        onClick={() =>
          addToast({
            variant: "info",
            message: "This toast will disappear in 2 seconds.",
            duration: 2000,
          })
        }
      />
      <Button
        label="Long (10s)"
        color="green"
        onClick={() =>
          addToast({
            variant: "success",
            message: "This toast stays for 10 seconds.",
            duration: 10000,
          })
        }
      />
    </div>
  );
};

export const Basic: Story = () => {
  return (
    <>
      <StoryWrapper title="Toast Variants (Top Right)">
        <ToastProvider position="top-right">
          <ToastDemo />
        </ToastProvider>
      </StoryWrapper>

      <StoryWrapper title="Toast Without Title">
        <ToastProvider position="top-left">
          <ToastWithoutTitle />
        </ToastProvider>
      </StoryWrapper>

      <StoryWrapper title="Toast with Custom Duration">
        <ToastProvider position="bottom-right">
          <ToastWithDuration />
        </ToastProvider>
      </StoryWrapper>

      <StoryWrapper title="Static Toast Items">
        <div className="flex flex-col gap-2 max-w-md">
          <Toast.Item
            variant="info"
            title="Information"
            message="This is a static toast preview."
          />
          <Toast.Item
            variant="success"
            title="Success!"
            message="Your changes have been saved."
          />
          <Toast.Item
            variant="warning"
            title="Warning"
            message="Please review your input."
          />
          <Toast.Item
            variant="error"
            title="Error"
            message="Failed to save changes."
          />
        </div>
      </StoryWrapper>
    </>
  );
};
