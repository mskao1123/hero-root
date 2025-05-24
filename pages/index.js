export default function Home() {
  return (
    <main className="min-h-screen bg-[#f1f8f4] text-gray-800">
      <section className="text-center py-12 px-4">
        <h1 className="text-4xl font-serif mb-4">塊根英雄</h1>
        <p className="text-lg max-w-xl mx-auto text-green-900">
          每一顆種子，都是一段故事的開始，也是希望的延續。<br />
          與您一起，在忙碌的都市中，尋找屬於自己的綠色天地，種出生命節奏。<br />
          讓自然不只是裝飾，而是一種安靜而持久的陪伴。從播種到發芽，從嫩芽到塊根，這是生活的過程，也是一段和土地、氣候、時間對話的旅程。<br />
          在這裡，我們一起重新學習放慢腳步，用一片綠意，裝進自己的日常。
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 pb-12">
        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="text-xl font-bold mb-2">塊根植物種子</h2>
          <img src="/images/seeds.jpg" alt="塊根植物種子" className="w-full h-40 object-cover rounded-xl mb-2" />
          <ul className="text-sm space-y-1">
            <li>織冠漆樹</li>
            <li>赤羽漆樹</li>
            <li>KHZ羊角沙漠玫瑰</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="text-xl font-bold mb-2">塊根植物小苗</h2>
          <img src="/images/seedlings.jpg" alt="塊根植物小苗" className="w-full h-40 object-cover rounded-xl mb-2" />
          <ul className="text-sm space-y-1">
            <li>泡泡葉橄欖</li>
            <li>飛羽沒藥</li>
            <li>單波葉乳香</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="text-xl font-bold mb-2">特色品種</h2>
          <img src="/images/rare.jpg" alt="特色品種" className="w-full h-40 object-cover rounded-xl mb-2" />
          <ul className="text-sm space-y-1">
            <li>念珠橄欖</li>
            <li>織冠漆樹</li>
            <li>皮爾蘭斯蘆薈</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="text-xl font-bold mb-2">新手推薦組合</h2>
          <img src="/images/starter.jpg" alt="新手推薦組合" className="w-full h-40 object-cover rounded-xl mb-2" />
          <ul className="text-sm space-y-1">
            <li>羊角沙漠玫瑰種子</li>
            <li>妖炎龍舌蘭種子</li>
            <li>象牙宮種子</li>
          </ul>
        </div>
      </section>

      <section className="bg-white p-6 mx-4 mb-12 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold mb-4">品牌故事</h2>
        <p className="text-base text-gray-700 leading-relaxed">
          「塊根英雄」的故事，始於對自然的好奇，也來自日常的觀察。
          從螞蟻到塊根，從一粒種子的萌芽，到與土地對話的體驗，這是一段慢慢走來的旅程。<br /><br />
          我們相信：每一顆種子，不只是生命的開端，更是生活節奏的提示。
          在都市裡的你我，也能透過雙手，與植物建立一段深刻的連結。<br /><br />
          無論你是園藝老手或剛入坑的新手，我們希望透過這裡的每一份分享與產品，
          陪伴你一起重新感受「種下、等待、看見改變」的過程。這裡，是塊根的世界，也是屬於你的綠色故事。
        </p>
      </section>

      <section className="text-center pb-8">
        <h3 className="text-lg font-semibold">📬 聯絡我們</h3>
        <p className="text-sm mt-2">
          Instagram：<a href="https://www.instagram.com/antherotw" className="text-green-600 underline" target="_blank">@antherotw</a><br />
          Facebook 個人頁：<a href="https://www.facebook.com/vanorsou" className="text-green-600 underline" target="_blank">英雄哥</a><br />
          Facebook 社團：<a href="https://www.facebook.com/groups/501767132017199" className="text-green-600 underline" target="_blank">塊根英雄｜塊根植物討論交流＆種子小苗販售</a><br />
          購買平台：<a href="https://shopee.tw/antherolin" className="text-green-600 underline" target="_blank">前往蝦皮賣場</a>
        </p>
        <p className="text-xs text-gray-500 mt-4">網站設計：塊根英雄｜Logo 設計：AI 原創螞蟻頭</p>
      </section>
    </main>
  );
}
