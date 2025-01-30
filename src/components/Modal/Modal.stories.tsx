import { StoryWrapper } from "../../Utilities/StoryWrapper/StoryWrapper";
import { Meta, StoryFn } from "@storybook/react";
import { Modal } from "./Modal";
import { useState } from "react";
import { Button } from "../Button/Button";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
} as Meta;

export default meta;

type Story = StoryFn<typeof Modal>;

export const Basic: Story = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDangerModalOpen, setIsDangerModalOpen] = useState(false);

  return (
    <>
      <StoryWrapper title="Basic Modal">
        <Button
          label="Open modal"
          onClick={() => setIsModalOpen(true)}
          color="blue"
        />
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConfirm={() => setIsModalOpen(false)}
          modalBody={"Are you sure you want to proceed with this action?"}
          actionType="confirm"
          title={"Confirm your action"}
          description={"Please, confirm your action."}
        />
      </StoryWrapper>

      <StoryWrapper title="Danger Modal">
        <Button
          label="Open modal"
          onClick={() => setIsDangerModalOpen(true)}
          color="red"
        />
        <Modal
          isOpen={isDangerModalOpen}
          onClose={() => setIsDangerModalOpen(false)}
          onConfirm={() => setIsDangerModalOpen(false)}
          modalBody={"Are you sure you want to delete this?"}
          actionType="delete"
          title={"Confirm your action."}
        />
      </StoryWrapper>
    </>
  );
};
