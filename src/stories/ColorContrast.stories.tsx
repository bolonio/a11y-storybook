import React from "react"
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0"
import { ColorContrast } from "./ColorContrast"

export default {
  title: "Accessibility/ColorContrast",
  component: ColorContrast,
} as Meta

const ColorContrastTemplate: Story = (args) => <ColorContrast {...args} />
export const colorContrast = ColorContrastTemplate.bind({})
