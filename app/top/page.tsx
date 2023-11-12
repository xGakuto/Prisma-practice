// MyPage.tsx
import React from "react";
import { GetServerSideProps } from 'next';
import { fetchInformations, InformationsProps } from "@/components/fetchdata";

// サーバーサイドでのデータ取得
export const getServerSideProps: GetServerSideProps<InformationsProps> = async () => {
  const { informations, error } = await fetchInformations();
  return { props: { informations, error } };
};

// クライアントサイドのコンポーネント
const MyPage: React.FC<InformationsProps> = ({ informations, error }) => {
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>情報一覧</h1>
      {informations.length > 0 ? (
        <ul>
          {informations.map(info => (
            <li key={info.id}>
              <h2>{info.name}</h2>
              <p>Email: {info.email}</p>
              <p>Message: {info.message}</p>
              <p>Created At: {info.createdAt.toString()}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>情報が見つかりませんでした。</p>
      )}
    </div>
  );
};

export default MyPage;
