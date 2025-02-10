'use client'; // Required for Mantine to work

import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

export function Providers({ children }) {
  return <MantineProvider>{children}</MantineProvider>;
}
