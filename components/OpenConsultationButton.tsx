"use client";

import { useConsultation } from "./ConsultationContext";

type Props = {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
};

export function OpenConsultationButton({
  children,
  className,
  type = "button",
}: Props) {
  const { openConsultation } = useConsultation();
  return (
    <button className={className} type={type} onClick={openConsultation}>
      {children}
    </button>
  );
}
