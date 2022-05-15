import { CSSObject, MantineTheme, MantineThemeOverride } from "@mantine/core";

// Source code of MantineProvider
// https://github.com/mantinedev/mantine/blob/master/src/mantine-styles/src/theme/MantineProvider.tsx

// Theme
export const customTheme: MantineThemeOverride = {
  primaryColor: "dark",
  fontFamily: "Inter, sans-serif",
  headings: { fontFamily: "Inter, sans-serif" },
};

// Default Props
type MantineDefaultProps = Record<string, Record<string, any>>;

export const customDefaultProps: MantineDefaultProps = {};

// Styles API
type ProviderStyles = Record<
  string,
  | Record<string, CSSObject>
  | ((theme: MantineTheme, params: any) => Record<string, CSSObject>)
>;

export const customStyles: ProviderStyles = {};
