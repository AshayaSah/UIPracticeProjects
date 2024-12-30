import React from "react";
import {
  Flex,
  Text,
  Button,
  Box,
  Progress,
  CheckboxGroup,
  Grid,
  Select,
  AlertDialog,
} from "@radix-ui/themes";

const Form = () => {
  return (
    <>
      <Text>The quick brown fox jumps over the lazy dog.</Text>
      <Grid columns={{ initial: "1", xs: "2" }} gap="3" width="90%" m="auto">
        <Box height="64px">
          <Select.Root>
            <Select.Trigger
              placeholder="Pick a fruit"
              style={{ width: "100%" }}
            />
            <Select.Content position="popper">
              <Select.Group>
                <Select.Label>Fruits</Select.Label>
                <Select.Item value="orange">Orange</Select.Item>
                <Select.Item value="apple">Apple</Select.Item>
                <Select.Item value="grape" disabled>
                  Grape
                </Select.Item>
              </Select.Group>
              <Select.Separator />
              <Select.Group>
                <Select.Label>Vegetables</Select.Label>
                <Select.Item value="carrot">Carrot</Select.Item>
                <Select.Item value="potato">Potato</Select.Item>
              </Select.Group>
            </Select.Content>
          </Select.Root>
        </Box>
        <Box height="64px">
          <Select.Root defaultValue="apple">
            <Select.Trigger width="100%" />
            <Select.Content>
              <Select.Group>
                <Select.Label>Fruits</Select.Label>
                <Select.Item value="orange">Orange</Select.Item>
                <Select.Item value="apple">Apple</Select.Item>
                <Select.Item value="grape" disabled>
                  Grape
                </Select.Item>
              </Select.Group>
              <Select.Separator />
              <Select.Group>
                <Select.Label>Vegetables</Select.Label>
                <Select.Item value="carrot">Carrot</Select.Item>
                <Select.Item value="potato">Potato</Select.Item>
              </Select.Group>
            </Select.Content>
          </Select.Root>
        </Box>
        <AlertDialog.Root>
          <AlertDialog.Trigger>
            <Button color="red">Revoke access</Button>
          </AlertDialog.Trigger>
          <AlertDialog.Content maxWidth="450px">
            <AlertDialog.Title>Revoke access</AlertDialog.Title>
            <AlertDialog.Description size="2">
              Are you sure? This application will no longer be accessible and
              any existing sessions will be expired.
            </AlertDialog.Description>

            <Flex gap="3" mt="4" justify="end">
              <AlertDialog.Cancel>
                <Button variant="soft" color="gray">
                  Cancel
                </Button>
              </AlertDialog.Cancel>
              <AlertDialog.Action>
                <Button variant="solid" color="red">
                  Revoke access
                </Button>
              </AlertDialog.Action>
            </Flex>
          </AlertDialog.Content>
        </AlertDialog.Root>
      </Grid>
    </>
  );
};

export default Form;
