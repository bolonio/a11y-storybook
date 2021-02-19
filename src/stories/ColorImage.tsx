import React from "react"
import Image from "./ColorImage.jpeg"

export const ColorImage: React.FC<{ alt?: string }> = ({ alt }) => (
  <img src={Image} role="myCustomRole" alt={alt} width="600px" />
)
