import { z } from "zod";

const cardSchema = z.object({
  card: z
    .string()
    .min(16, "Card Number must be 16 character")
    .max(16, "Card Number must be 16 character"),
  cvv2: z.string().min(3, "cvv2 Number must be at least 3 characters"),
  expireDate: z.string().min(2, "Expire Date is important"),
});

export type NewCardFormType = z.infer<typeof cardSchema>
export default cardSchema;