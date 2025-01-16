import * as React from "react";
import { ReactNode } from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate = ({
  name,
  email,
  message,
}: EmailTemplateProps): ReactNode => (
  <div>
    <p>
      <strong>Name:</strong> {name}
    </p>
    <br />
    <p>
      <strong>Email:</strong> {email}
    </p>
    <br />
    <p>
      <strong>Message:</strong> {message}
    </p>
  </div>
);
