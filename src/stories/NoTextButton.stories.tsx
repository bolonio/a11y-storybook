import React from "react"
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0"
import { NoTextButton } from "./NoTextButton"

export default {
  title: "Accessibility/NoTextButton",
  component: NoTextButton,
} as Meta

const NoTextButtonTemplate: Story = (args) => <NoTextButton {...args} />
export const noTextButton = NoTextButtonTemplate.bind({})
