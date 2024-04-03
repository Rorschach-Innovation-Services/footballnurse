import { Accordion, AccordionState, Container, Image, Text } from "@mantine/core"
import { useState } from "react";
import { Colours } from "../../colours";
import { FAQList } from "./faq-list";
import { TableItem5 } from "./item-5-table";
import OpenIcon from "../../assets/icons/Plus icon.svg";
import CloseIcon from "../../assets/icons/Minus icon.svg";

export const FAQ = () => {
  const [currentState, setCurrentState] = useState<AccordionState>({});
  return (
    <Accordion
      onChange={(state) => {
        console.log(Object.keys(state))
        console.log(state)
        setCurrentState(state)
      }}
      iconPosition="right"
      styles={{
        item: {
          border: `1px solid ${Colours.darkGrey}`,
          backgroundColor: "white",
          "&:hover": {
            border: `1px solid ${Colours.darkGrey}`,
            backgroundColor: "white",
            borderRadius: "10px",
          },
          margin: "15px 0",
          borderRadius: "10px",

        },
        label: {
          fontSize: "12px"
        },
        itemOpened: {
          backgroundColor: "#F0F1FF",
          margin: "15px 0",
        }
      }}
      sx={{
        marginBottom: "70px"
      }}
    >
      {
        FAQList.map((faq, index) => (
          <Accordion.Item
            icon={currentState[index] ?
              <Container
                sx={{
                  padding: 0,
                  margin: 0,
                  marginRight: "-10px"
                }}>
                <Image
                  src={CloseIcon}
                />
              </Container> :
              <Image
                sx={{ marginRight: "10px" }}
                src={OpenIcon}
              />
            }
            key={faq.label}
            label={faq.label}
            styles={{
              control: {
                paddingRight: "15px"
              },
              item: {
                border: `1px solid ${Colours.darkGrey}`,
                backgroundColor: "white",
                "&:hover": {
                  border: `1px solid ${Colours.darkGrey}`,
                  backgroundColor: "white",
                  borderRadius: "10px",
                },
                margin: "15px 0",
                borderRadius: "10px",

              },
              label: {
                fontSize: "12px"
              },
              itemOpened: {
                backgroundColor: "#F0F1FF",
                "&:hover": {
                  backgroundColor: "#F0F1FF",
                },
                margin: "15px 0",
              }
            }}
          >
            <Text
              sx={{
                fontSize: "12px"
              }}
            >
              {faq.content}
            </Text>
            {
              faq.label === "5. Who has access to the data?" &&
              <TableItem5 />
            }
          </Accordion.Item>
        ))
      }
    </Accordion>
  )
}
