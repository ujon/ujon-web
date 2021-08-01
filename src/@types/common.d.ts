interface Dimension {
  size?: string;
  width?: string;
  height?: string;
}

interface Children {
  children?: React.ReactNode;
}

type Axis = "horizontal" | "vertical" | "none";
