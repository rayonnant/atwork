import { z } from "zod";

const phonePattern = /^[0-9]*$/;

const formSchema = z.object({
    name: z
        .string()
        .min(2, { message: "Имя должно быть от 2 до 64 символов" })
        .max(64, { message: "Имя должно быть от 2 до 64 символов" }),

    nickname: z
        .string()
        .min(2, { message: "Никнейм должен быть от 2 до 64 символов" })
        .max(64, { message: "Никнейм должен быть от 2 до 64 символов" }),

    email: z.string().email({ message: "Некорректный email" }),

    city: z
        .string()
        .min(2, { message: "Город должен быть от 2 до 64 символов" })
        .max(64, { message: "Город должен быть от 2 до 64 символов" }),

    phone: z.string().regex(phonePattern, { message: "Телефон должен содержать только цифры" }),

    companyName: z
        .string()
        .min(2, { message: "Название компании должно быть от 2 до 64 символов" })
        .max(64, { message: "Название компании должно быть от 2 до 64 символов" }),
});

export type FormSchema = z.infer<typeof formSchema>;
export { formSchema };
