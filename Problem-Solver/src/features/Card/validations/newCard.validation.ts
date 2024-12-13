import { z } from "zod";

const cardSchema = z.object({
  cardNumber: z
    .string()
    .min(16, "Card Number must be 16 character")
    .max(16, "Card Number must be 16 character"),
  fullName: z.string().min(3, "Full Name must be at least 3 characters"),
  expireDate: z.string().min(2, "Invalid Expire Date"),
});

export type NewCardFormType = z.infer<typeof cardSchema>
export default cardSchema;