import { Button } from "@heroui/react";
import { createLink } from "@tanstack/react-router";

import type { LinkComponent } from "@tanstack/react-router";

const TanstackButtonComponent = createLink(Button);

const ButtonLink: LinkComponent<typeof TanstackButtonComponent> = (props) => {
  return <TanstackButtonComponent preload={"intent"} {...props} />;
};

export default ButtonLink;
