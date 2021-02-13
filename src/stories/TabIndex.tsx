import React from "react"

export const TabIndex: React.FC = () => (
  <div tabIndex={1}>
    I have a tabIndex greater than 0, that's wrong because elements should not
    have tabindex greater than zero
  </div>
)
