import React, { FC } from "react";
import { useMediaQuery } from "react-responsive";
import { DeviceSize } from "./device-size";

interface ViewProps {
  children: React.ReactElement | null;
}

// laptop | desktop
export const BrowserView: FC<ViewProps> = ({ children }) => {
  const isBrowser = useMediaQuery({ minWidth: DeviceSize.laptop });
  return isBrowser ? children : null;
};

// tablet
export const TabletView: FC<ViewProps> = ({ children }) => {
  const isTablet = useMediaQuery({
    minWidth: DeviceSize.tablet,
    maxWidth: DeviceSize.laptop - 1,
  });
  return isTablet ? children : null;
};

// mobile
export const MobileView: FC<ViewProps> = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.tablet - 1 });
  return isMobile ? children : null;
};

// tablet | laptop | desktop
export const DefaultView: FC<ViewProps> = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: DeviceSize.tablet });
  return isNotMobile ? children : null;
};
