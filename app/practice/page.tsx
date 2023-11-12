// 必要なモジュールをインポート
import React from 'react';

// プロパティの型を定義
type GreetingProps = {
  suuji: number;
};

// コンポーネントを定義
const Greeting = ({ suuji }: GreetingProps) => {
  // ここにコンポーネントのロジックを書きます
  const suuji1 = suuji + 1;

  // コンポーネントが表示する要素を返します
  return <h1>Hello, { suuji1 }!</h1>;
};

type PanelProps = {
  title: string;
  children: React.ReactNode;
};

const Panel: React.FC<PanelProps> = ({ title, children }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h4>{children}</h4>
    </div>
  );
};


const MyPage = () => {
    return(
    <div>
        <Greeting suuji={5} />
        <Panel title = {"d"} children = {"a"} />
    </div>
    )
}

export default MyPage;