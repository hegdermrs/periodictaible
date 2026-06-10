import type { ComponentType, SVGProps } from "react";
import SimpleIconsAnthropic from "@/components/icons/simple-icons/anthropic";
import SimpleIconsCursor from "@/components/icons/simple-icons/cursor";
import SimpleIconsGoogle from "@/components/icons/simple-icons/google";
import SimpleIconsIntegromat from "@/components/icons/simple-icons/integromat";
import SimpleIconsMistralai from "@/components/icons/simple-icons/mistralai";
import SimpleIconsN8n from "@/components/icons/simple-icons/n8n";
import SimpleIconsOpenai from "@/components/icons/simple-icons/openai";
import SimpleIconsX from "@/components/icons/simple-icons/x";
import SimpleIconsZapier from "@/components/icons/simple-icons/zapier";
import type { LinkIconKey } from "@/core/types";

export const ELEMENT_LINK_ICONS: Record<
  LinkIconKey,
  ComponentType<SVGProps<SVGSVGElement>>
> = {
  "simple-icons/openai": SimpleIconsOpenai,
  "simple-icons/anthropic": SimpleIconsAnthropic,
  "simple-icons/google": SimpleIconsGoogle,
  "simple-icons/mistralai": SimpleIconsMistralai,
  "simple-icons/x": SimpleIconsX,
  "simple-icons/zapier": SimpleIconsZapier,
  "simple-icons/integromat": SimpleIconsIntegromat,
  "simple-icons/n8n": SimpleIconsN8n,
  "simple-icons/cursor": SimpleIconsCursor,
};
