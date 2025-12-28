import { StoryWrapper } from "../../Utilities/StoryWrapper/StoryWrapper";
import { Meta, StoryFn } from "@storybook/react";
import { Alert } from "./Alert";
import { useState } from "react";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
} as Meta;

export default meta;

type Story = StoryFn<typeof Alert>;

export const Basic: Story = () => {
  const [showDismissible, setShowDismissible] = useState(true);

  return (
    <>
      <StoryWrapper title="Alert Variants">
        <div className="flex flex-col gap-4 w-full max-w-lg">
          <Alert variant="info">
            This is an informational message for the user.
          </Alert>
          <Alert variant="success">
            Your changes have been saved successfully!
          </Alert>
          <Alert variant="warning">
            Please review your information before proceeding.
          </Alert>
          <Alert variant="error">
            An error occurred while processing your request.
          </Alert>
        </div>
      </StoryWrapper>

      <StoryWrapper title="Alert with Title">
        <div className="flex flex-col gap-4 w-full max-w-lg">
          <Alert variant="info" title="Did you know?">
            You can customize your dashboard by clicking on the settings icon.
          </Alert>
          <Alert variant="success" title="Payment successful">
            Your order #12345 has been confirmed and is being processed.
          </Alert>
          <Alert variant="warning" title="Attention needed">
            Your subscription will expire in 7 days. Please renew to continue.
          </Alert>
          <Alert variant="error" title="Connection failed">
            Unable to connect to the server. Please check your internet connection.
          </Alert>
        </div>
      </StoryWrapper>

      <StoryWrapper title="Dismissible Alert">
        <div className="w-full max-w-lg">
          {showDismissible ? (
            <Alert
              variant="info"
              title="Dismissible Alert"
              dismissible
              onDismiss={() => setShowDismissible(false)}
            >
              Click the X button to dismiss this alert. Refresh the page to see it again.
            </Alert>
          ) : (
            <div className="text-center py-8 text-gray-500">
              Alert dismissed. Refresh to see again.
            </div>
          )}
        </div>
      </StoryWrapper>

      <StoryWrapper title="Title Only">
        <div className="flex flex-col gap-4 w-full max-w-lg">
          <Alert variant="success" title="Profile updated successfully!" />
          <Alert variant="error" title="Failed to save changes" />
        </div>
      </StoryWrapper>
    </>
  );
};
