import { Container, Text, Title } from "@mantine/core"
import { Colours } from "../colours"
import { HomeFooter, HomeNavBar } from "../home/home"
import { FAQ } from "./components/faq"
import { Form } from "./components/form"

export const ContactUs = () => {
  return (
    <>
      <HomeNavBar />
      <Container
        id="home-anchor"
        sx={{
          marginTop: "30px"
        }}>
        <Container
          sx={{
            margin: 0,
            padding: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "100px"
          }}>
          <Text
            sx={{
              color: Colours.darkBlue,
              fontFamily: "Roboto, san-sarif",
              fontSize: "30px",
              fontWeight: "500"
            }}
          >
            Contact Us
          </Text>
          <Text
            sx={{
              color: Colours.darkGrey,
              fontSize: "14px",
              textAlign: "center",
              fontWeight: "500"
            }}
          >
            If you have any questions for us to answer, feel free to send us a message and we will get back to you as soon as possible. Even if it’s just a message to say hello.
          </Text>
        </Container>
        <Text
          sx={{
            fontWeight: "500",
            fontSize: "20px",
            textAlign: "center",
            color: "white"
          }}
        >
          Say Hello
        </Text>
        <Form />
        <Container
          sx={{
            padding: 0,
            margin: 0,
            marginTop: "150px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Title
            order={1}
            sx={{
              color: Colours.darkBlue,
              placeSelf: "center",
              fontFamily: "Roboto, san-sarif"
            }}
          >
            FAQ's
          </Title>
          <Text
            sx={{
              fontSize: "14px",
              fontWeight: "500"
            }}
          >
            Need answers? Find them here
          </Text>
        </Container>
        <FAQ />
      </Container>
      <HomeFooter />
    </>
  )
}
