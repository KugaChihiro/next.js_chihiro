import { z } from 'zod';

export const signinSchema = z.object({
  email: z
    .string()
    .nonempty('メールアドレスは必須です')              // 空文字を拒否
    .email('有効なメールアドレスを入力してください'),    // 形式チェック
  password: z
    .string()
    .nonempty('パスワードは必須です')                   // 空文字を拒否
    .min(4, 'パスワードは4文字以上で入力してください'),    // 最低文字数チェック
});

// スキーマから型を自動生成
export type SigninFormData = z.infer<typeof signinSchema>;