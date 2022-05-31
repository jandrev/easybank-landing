import { CSSObject, MantineTheme, MantineThemeOverride } from "@mantine/core";

type primaryColors = "darkBlue" | "limeGreen" | "lightCyan";
type secondaryColors = "grayishBlue" | "lightGrayishBlue" | "veryLightGray";
type weightsOptions = "sm" | "md" | "lg";

declare module "@mantine/core" {
  export interface MantineThemeOther {
    primaryPalette: Record<primaryColors, string>;
    secondaryPalette: Record<secondaryColors, string>;
    weights: Record<weightsOptions, number>;
  }
}

export const customTheme: MantineThemeOverride = {
  primaryColor: "dark",
  fontFamily: "Public Sans, sans-serif",
  headings: { fontFamily: "Public Sans, sans-serif", fontWeight: 700 },
  other: {
    primaryPalette: {
      darkBlue: "#2d314d",
      limeGreen: "#31d35c",
      lightCyan: "#2bb7da",
    },
    secondaryPalette: {
      grayishBlue: "#9698a6",
      lightGrayishBlue: "#f3f4f6",
      veryLightGray: "#fafafa",
    },
    weights: {
      sm: 300,
      md: 400,
      lg: 700,
    },
  },
};

type MantineDefaultProps = Record<string, Record<string, any>>;

export const customDefaultProps: MantineDefaultProps = {};

// Styles API
type ProviderStyles = Record<
  string,
  | Record<string, CSSObject>
  | ((theme: MantineTheme, params: any) => Record<string, CSSObject>)
>;

export const customStyles: ProviderStyles = {};
