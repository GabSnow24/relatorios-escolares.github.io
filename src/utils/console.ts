export const error = (value: string) =>
  console.log(
    `%cERROR: ${value} `,
    "background: #ffff; color: #f05; font-weight: bold"
  );

export const success = (value: string) =>
  console.log(
    `%c ${value} `,
    "background: #00a35a; color: #ffff; font-weight: bold"
  );
