import React from "react"
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0"
import { HeadingOrder } from "./HeadingOrder"

export default {
  title: "Accessibility/HeadingOrder",
  component: HeadingOrder,
} as Meta

const HeadingOrderTemplate: Story = (args) => <HeadingOrder {...args} />
export const headingOrder = HeadingOrderTemplate.bind({})
