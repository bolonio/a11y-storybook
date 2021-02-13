import React from "react"
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0"
import { ColorImage } from "./ColorImage"

export default {
  title: "Accessibility/ColorImage",
  component: ColorImage,
} as Meta

const ColorImageTemplate: Story = (args) => <ColorImage {...args} />
export const colorImage = ColorImageTemplate.bind({})
