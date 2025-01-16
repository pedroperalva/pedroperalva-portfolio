"use client";

import { Button, Input, Textarea } from "@chakra-ui/react";
import { FormEvent } from "react";

export function ContactForm() {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      name: (event.currentTarget[0] as HTMLInputElement).value,
      email: (event.currentTarget[1] as HTMLInputElement).value,
      subject: (event.currentTarget[2] as HTMLInputElement).value,
      message: (event.currentTarget[3] as HTMLInputElement).value,
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
      onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}
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
