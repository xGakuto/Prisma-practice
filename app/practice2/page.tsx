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

const MyPage = () => {
    return(
    <div>
        <Greeting suuji={5} />
    </div>
    )
}

export default MyPage;
