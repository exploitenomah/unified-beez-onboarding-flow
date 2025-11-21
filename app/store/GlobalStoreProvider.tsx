"use client";

import { Provider } from "react-redux";
import { store } from ".";

export default function GlobalStoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
