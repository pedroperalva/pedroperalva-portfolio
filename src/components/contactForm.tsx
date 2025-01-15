"use client";

import { Button, Input, Textarea } from "@chakra-ui/react";

export function ContactForm() {
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const data = {
      name: event.target[0].value,
      email: event.target[1].value,
      subject: event.target[2].value,
      message: event.target[3].value,
    };

    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Email sent successfully");
    } else {
      console.log("Error sending email");
    }
  };

  return (
    <form
      className="flex flex-col gap-4 w-[500px]"
      onSubmit={(e) => handleSubmit(e)}
    >
      <Input
        type="text"
        placeholder="Nome"
        className="input"
        bgColor={"#fff"}
        _focusVisible={{
          outline: "none",
        }}
      />
      <Input
        type="email"
        placeholder="Email"
        className="input"
        bgColor={"#fff"}
        _focusVisible={{
          outline: "none",
        }}
      />
      <Input
        type="text"
        placeholder="Assunto"
        className="input"
        bgColor={"#fff"}
        _focusVisible={{
          outline: "none",
        }}
      />
      <Textarea
        placeholder="Mensagem"
        className="input"
        bgColor={"#fff"}
        _focusVisible={{
          outline: "none",
        }}
      />
      <Button
        type="submit"
        bgColor={"primary"}
        color={"#000"}
        className="box-shadow-hover"
      >
        Enviar
      </Button>
    </form>
  );
}
