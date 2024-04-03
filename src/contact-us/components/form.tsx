import { Button, Container, Group, Image, Select, Text, Textarea, TextInput } from "@mantine/core";
import { ChangeEvent, FormEvent, useState } from "react";
import { Colours } from "../../colours";
import BlueBack from "../../assets/images/blue.svg";

export interface InputComponentProps {
  valueList: { label: string, eventHandler: (value: string) => void, value: string }[]
}

export const InputComponent = ({
  valueList,
}: InputComponentProps) => {
  return (
    <Group
      noWrap
      sx={{
        width: "100%"
      }}
    >
      {
        valueList.map(value => (
          <TextInput
            key={value.label}
            label={value.label}
            onChange={(event: ChangeEvent<HTMLInputElement>) => value.eventHandler(event.target.value)}
            styles={{
              input: {
                minHeight: 0,
                height: "30px",
                fontSize: "12px"
              },
              label: {
                fontSize: "12px",
                marginLeft: "10px"
              }
            }}
            sx={{
              width: "100%"
            }}
            value={value.value}
          />
        ))
      }
    </Group>
  )
}

export const Form = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");


  const submitForm = (event: FormEvent) => {
    event.preventDefault()
    if (
      firstName !== "" &&
      lastName !== "" &&
      subject !== "" &&
      email != "" &&
      message !== ""
    ) {
      const recipient = 'info@medicoach.co.za';
      const subject = 'Inquiry';
      const body = `Hello,\n\n${message}\n\n ${firstName + " " + lastName},\nEmail Address: ${email}\n`;
      const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;

    }
  }
  return (
    <Container
      sx={{
        boxShadow: "2px 2px 6px rgba(0,0,0,0.2)",
        width: "460px",
        padding: "30px",
        display: "flex",
        flexDirection: "column",
        borderRadius: "20px",
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "white"
      }}
    >
      <Image
        src={BlueBack}
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          zIndex: "-1",
          display: "flex",
          justifyContent: "center"
        }}
      />
      <Group
        direction="column"
        sx={{
          marginBottom: "20px"
        }}
        spacing={5}
      >
        <Text
          // order={4}
          sx={{
            color: Colours.darkBlue,
            fontFamily: "Roboto, san-sarif",
            fontSize: "18px",
            fontWeight: "500"
          }}
        >
          Personal Information
        </Text>
        <Text
          sx={{
            color: Colours.darkGrey,
            fontSize: "12px"
          }}
        >
          Please provide us with the appropriate information.
        </Text>
      </Group>
      <form
        onSubmit={(event: FormEvent) => submitForm(event)}
      >
        <Group
          direction="column"
        >
          <Select
            placeholder="Select"
            data={[]}
          />
          <InputComponent
            valueList={[
              {
                label: "First Name",
                value: firstName,
                eventHandler: setFirstName,
              },
              {
                label: "Last Name",
                value: lastName,
                eventHandler: setLastName,
              }
            ]}
          />
          <InputComponent
            valueList={[
              {
                label: "Subject",
                value: subject,
                eventHandler: setSubject,
              },
              {
                label: "Email",
                value: email,
                eventHandler: setEmail,
              }
            ]}
          />
          <Textarea
            label="Message"
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setMessage(event.target.value)}
            minRows={5}
            value={message}
            sx={{
              width: "100%"
            }}
            styles={{
              label: {
                fontSize: "12px",
                marginLeft: "10px"
              },
              input: {
                fontSize: "12px"
              }
            }}
          />
          <Button
            type="submit"
            sx={{
              backgroundColor: Colours.orange,
              "&:hover": {
                backgroundColor: Colours.orange
              },
              alignSelf: "center",
              width: "135px",
              fontSize: "12px",
              borderRadius: "15px"
            }}
          >
            Submit Form
          </Button>
        </Group>
      </form>
    </Container>
  )
}
