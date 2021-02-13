import React from "react"
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0"
import { TabIndex } from "./TabIndex"

export default {
  title: "Accessibility/TabIndex",
  component: TabIndex,
} as Meta

const TabIndexTemplate: Story = (args) => <TabIndex {...args} />
export const tabIndex = TabIndexTemplate.bind({})
