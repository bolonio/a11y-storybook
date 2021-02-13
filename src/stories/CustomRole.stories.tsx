import React from "react"
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0"
import { CustomRole } from "./CustomRole"

export default {
  title: "Accessibility/CustomRole",
  component: CustomRole,
} as Meta

const CustomRoleTemplate: Story = (args) => <CustomRole {...args} />
export const customRole = CustomRoleTemplate.bind({})
