import React from "react"
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0"
import { NoAltImage } from "./NoAltImage"

export default {
  title: "Accessibility/NoAltImage",
  component: NoAltImage,
} as Meta

const NoAltImageTemplate: Story = (args) => <NoAltImage {...args} />
export const noAltImage = NoAltImageTemplate.bind({})
