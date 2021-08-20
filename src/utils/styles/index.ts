import { HSLA } from "styled-components";

export const hslColor = (color: HSLA): string => {
  if (color.alpha === undefined) {
    return `hsla(${color.hue},${color.saturation}%,${color.lightness}%)`;
  }

  if (color.alpha < 0 || color.alpha > 1) {
    throw new Error("Property alpha shold be between 0, 1");
  }
  return `hsla(${color.hue},${color.saturation}%,${color.lightness}%,${color.alpha})`;
};
