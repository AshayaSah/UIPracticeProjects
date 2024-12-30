import React from "react";
import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import Form from "./components/Form";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "./components/ui/sidebar";
import AppSidebar from "./components/AppSidebar";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider defaultOpen={false}>
        <AppSidebar />

        <main className="w-full">
          <Navbar></Navbar>
          <Form></Form>
        </main>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default App;
