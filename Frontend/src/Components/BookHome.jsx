import { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from "@mantine/core";
import { Outlet } from "react-router-dom";
import { ImBook } from "react-icons/im";

export default function BookHome() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar
          p="md"
          bg={"#C1C2C5"}
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 250 }}
        >
            <Navbar.Section><ImBook/>Book. Mart</Navbar.Section>
            <Navbar.Section>All Books</Navbar.Section>
           
        </Navbar>
      }
      
      header={
        <Header height={{ base: 50, md: 70 }} p="md" bg={"#1864AB"}
        >
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.blue[3]}
                mr="xl"
              />
            </MediaQuery>
            
              <ImBook size="3em" color="white"/>
              
             
             <Text color="white" size="2.5rem">BOOK. MART</Text>
            
          </div>
        </Header>
      }
    >
      <Outlet />
    </AppShell>
  );
}
