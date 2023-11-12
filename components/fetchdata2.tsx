import { PrismaClient } from "@prisma/client"
import { GetServerSideProps } from 'next'

// PrismaClientのインスタンス化
const prisma = new PrismaClient()

// Informationインターフェースの定義
// これはデータベースの`userinformations`テーブルの各レコードを表現します
interface Informations {
  id: number
  name: string
  email: string
  message: string
  createdAt: Date
}

// InformationsPropsインターフェースの定義
// これはページのプロパティを表現します
export interface InformationsProps {
  informations: Informations[]
  error?: string
}
export const test = () => {
  let message = "TEST"
  return message
}
export async function fetchInformations() {
  let errorMessage = "実行前"; // errorMessageを関数のスコープ内で初期化
  try {
    const informations = await prisma.userinformations.findMany()
    errorMessage = "データとれてます";
    return { informations, errorMessage }; // errorMessageを戻り値に含める
  } catch (e) {
    errorMessage = "データの取得に失敗しました";
    return { informations: [], errorMessage }; // errorMessageを戻り値に含める
  }
}

export const getServerSideProps: GetServerSideProps<InformationsProps> = async () => {
  const { informations } = await fetchInformations();
  return { props: { informations: informations } }; // errorMessageをpropsに含める
};