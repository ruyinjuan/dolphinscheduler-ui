function getCssVar(name) {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return "";
  }
  return getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
}

export function createNaiveThemeOverrides() {
  const primary = getCssVar("--theme-blue-primary");
  const primaryLight = getCssVar("--theme-blue-primary-light");
  const primaryDark = getCssVar("--theme-blue-primary-dark");
  const cyan = getCssVar("--theme-cyan-accent");

  const textPrimary = getCssVar("--theme-primary-text");
  const textSecondary = getCssVar("--theme-text-secondary");
  const textMuted = getCssVar("--theme-text-muted");

  const bgDeep = getCssVar("--theme-bg-deep");
  const bgMedium = getCssVar("--theme-bg-medium");
  const bgLight = getCssVar("--theme-bg-light");

  const border = getCssVar("--theme-border");
  const borderLight = getCssVar("--theme-border-light");
  const borderGlow = getCssVar("--theme-border-glow");

  const gradientPanel = getCssVar("--theme-gradient-panel");
  const glowBlue = getCssVar("--theme-glow-blue");
  const glowCyan = getCssVar("--theme-glow-cyan");

  const borderRadius = getCssVar("--theme-border-radius");
  const tinyBorderRadius = getCssVar("--theme-border-radius-tiny");
  const borderRadiusSmall = getCssVar("--theme-border-radius-small");
  const fontFamily = getCssVar("--theme-font-family");
  const fontFamilyMono = getCssVar("--theme-font-family-mono");

  return {
    common: {
      primaryColor: primary,
      primaryColorHover: primaryLight,
      primaryColorPressed: primaryDark,
      primaryColorSuppl: cyan,

      infoColor: primary,
      infoColorHover: primaryLight,
      infoColorPressed: primaryDark,
      infoColorSuppl: cyan,

      successColor: "#10b981",
      successColorHover: "#34d399",
      successColorPressed: "#059669",
      successColorSuppl: "#6ee7b7",

      warningColor: "#f59e0b",
      warningColorHover: "#fbbf24",
      warningColorPressed: "#d97706",
      warningColorSuppl: "#fcd34d",

      errorColor: "#ef4444",
      errorColorHover: "#f87171",
      errorColorPressed: "#dc2626",
      errorColorSuppl: "#fca5a5",

      textColorBase: textPrimary,
      textColor1: textPrimary,
      textColor2: textSecondary,
      textColor3: textMuted,

      bodyColor: bgDeep,
      cardColor: bgMedium,
      modalColor: bgMedium,
      popoverColor: bgDeep,
      tableColor: "transparent",

      borderColor: border,
      dividerColor: border,

      inputColor: bgLight,
      actionColor: bgLight,
      hoverColor: "rgba(56, 189, 248, 0.12)",
      pressedColor: "rgba(14, 165, 233, 0.18)",

      placeholderColor: "rgba(125, 163, 192, 0.72)",
      placeholderColorDisabled: "rgba(125, 163, 192, 0.4)",
      textColorDisabled: "rgba(125, 163, 192, 0.5)",

      iconColor: textSecondary,
      iconColorHover: cyan,
      iconColorPressed: primary,
      iconColorDisabled: "rgba(125, 163, 192, 0.4)",

      borderRadius,
      borderRadiusSmall,
      fontFamily,
      fontFamilyMono,

      boxShadow1: "0 2px 8px rgba(8, 24, 38, 0.35)",
      boxShadow2: "0 4px 16px rgba(8, 24, 38, 0.42)",
      boxShadow3:
        "0 8px 28px rgba(8, 24, 38, 0.5), 0 0 20px rgba(14, 165, 233, 0.12)",
    },

    Card: {
      color: gradientPanel,
      colorModal: gradientPanel,
      borderColor: border,
      textColor: textPrimary,
      titleTextColor: textPrimary,
      boxShadow: glowBlue,
    },

    Button: {
      colorPrimary: primary,
      colorHoverPrimary: primaryLight,
      colorPressedPrimary: primaryDark,
      colorFocusPrimary: primaryLight,

      borderPrimary: `1px solid ${borderLight}`,
      borderHoverPrimary: `1px solid ${borderGlow}`,
      borderPressedPrimary: `1px solid ${cyan}`,
      borderFocusPrimary: `1px solid ${cyan}`,

      color: "rgba(56, 189, 248, 0.06)",
      colorHover: "rgba(56, 189, 248, 0.1)",
      colorPressed: "rgba(14, 165, 233, 0.14)",

      border: `1px solid ${border}`,
      borderHover: `1px solid ${borderLight}`,
      borderPressed: `1px solid ${borderGlow}`,

      textColor: textPrimary,
      textColorHover: cyan,
      textColorPressed: textPrimary,
      textColorFocus: textPrimary,
    },
    Select: {
      peers: {
        InternalSelection: {
          border: `1px solid ${border}`,
          borderHover: `1px solid ${borderLight}`,
          borderPressed: `1px solid ${borderGlow}`,
        },
        InternalSelectMenu: {
          border: `1px solid ${border}`,
        },
      },
    },

    Input: {
      color: "rgba(8, 24, 38, 0.72)",
      colorFocus: "rgba(8, 24, 38, 0.88)",
      textColor: textPrimary,
      placeholderColor: textMuted,
      border: `1px solid ${border}`,
      borderHover: `1px solid ${borderLight}`,
      borderFocus: `1px solid ${cyan}`,
      boxShadowFocus: "0 0 0 2px rgba(34, 211, 238, 0.18)",
      caretColor: cyan,
    },

    Modal: {
      color: gradientPanel,
      textColor: textPrimary,
      titleTextColor: textPrimary,
      borderColor: border,
      boxShadow: glowCyan,
    },

    Popover: {
      color: gradientPanel,
      textColor: textPrimary,
      borderColor: border,
      boxShadow: glowBlue,
    },

    Tabs: {
      tabTextColorActiveBar: cyan,
      tabTextColorHoverBar: textSecondary,
      tabTextColorBar: textMuted,
      barColor: cyan,
      paneTextColor: textPrimary,
    },

    DataTable: {
      thColor: "rgba(14, 43, 67, 0.92)",
      tdColor: "rgba(8, 24, 38, 0.58)",
      borderColor: border,
      thTextColor: textSecondary,
      tdTextColor: textPrimary,
    },
    Checkbox: {
      borderRadius: tinyBorderRadius,
    },
  };
}
