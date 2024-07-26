import { useState } from "react";
import "./App.css";

const data = [
  {
    id: 1,
    profile: "Mario",
    title: "nintendo product no.1",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    like: 0,
    comments: [],
  },
  {
    id: 2,
    profile: "Zelda",
    title: "nintendo product no.2",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    like: 0,
    comments: [],
  },
  {
    id: 3,
    profile: "Pokemon",
    title: "nintendo product no.3",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    like: 0,
    comments: [],
  },
];

function App() {
  return (
    <div className="App flex">
      <header className="App-header flex-none w-[280px]">
        <div className="fixed w-[280px] p-3 h-full border-r border-gray-300 border-solid flex flex-col justify-between ">
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/logo.svg`}
              className="App-logo w-[103px] m-3 mb-6"
              alt="logo"
            />
            <ul>
              <li className="p-3 hover:bg-slate-100 rounded-xl">
                <a className="flex items-center" href="/">
                  <img src={`${process.env.PUBLIC_URL}/icon01.svg`} alt="" />
                  <h4 className="pl-4">홈</h4>
                </a>
              </li>
              <li className="p-3 hover:bg-slate-100 rounded-xl">
                <a className="flex items-center" href="/">
                  <img src={`${process.env.PUBLIC_URL}/icon02.svg`} alt="" />
                  <h4 className="pl-4">로고크기 103px</h4>
                </a>
              </li>
              <li className="p-3 hover:bg-slate-100 rounded-xl">
                <a className="flex items-center" href="/">
                  <img src={`${process.env.PUBLIC_URL}/icon03.svg`} alt="" />
                  <h4 className="pl-4">너비값 280px</h4>
                </a>
              </li>
              <li className="p-3 hover:bg-slate-100 rounded-xl">
                <a className="flex items-center" href="/">
                  <img src={`${process.env.PUBLIC_URL}/icon04.svg`} alt="" />
                  <h4 className="pl-4">모든패딩 12px</h4>
                </a>
              </li>
              <li className="p-3 hover:bg-slate-100 rounded-xl">
                <a className="flex items-center" href="/">
                  <img src={`${process.env.PUBLIC_URL}/icon05.svg`} alt="" />
                  <h4 className="pl-4">호버시 241 245 249</h4>
                </a>
              </li>
              <li className="p-3 hover:bg-slate-100 rounded-xl">
                <a className="flex items-center" href="/">
                  <img src={`${process.env.PUBLIC_URL}/icon06.svg`} alt="" />
                  <h4 className="pl-4">알림</h4>
                </a>
              </li>
              <li className="p-3 hover:bg-slate-100 rounded-xl">
                <a className="flex items-center" href="/">
                  <img src={`${process.env.PUBLIC_URL}/icon07.svg`} alt="" />
                  <h4 className="pl-4">만들기</h4>
                </a>
              </li>
            </ul>
          </div>

          <div className="p-3 hover:bg-slate-100 rounded-xl">
            <a className="flex items-center" href="/">
              <img src={`${process.env.PUBLIC_URL}/icon09.svg`} alt="" />
              <h4 className="pl-4">더 보기</h4>
            </a>
          </div>
        </div>
      </header>
      <Card />
    </div>
  );
}

function Card() {
  return (
    <>
      <section className="w-full">
        {data.map((v, i) => {
          return (
            <>
              <div className="w-[460px] mt-8 mb-14 mx-auto">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <img
                      src={`${process.env.PUBLIC_URL}/profile${eval(
                        i + 1
                      )}.jpg`}
                      className="w-[32px] rounded-full"
                      alt=""
                    />
                    <p className="pl-3">{data[i].profile}</p>
                  </div>
                  <img src="icon10.svg" alt="" />
                </div>
                <div className="mb-3">
                  <img
                    src={`${process.env.PUBLIC_URL}/thumb${eval(i + 1)}.jpg`}
                    className="w-full"
                    alt=""
                  />
                </div>
                <div>
                  <div className="mb-3">
                    <button>
                      <img
                        onClick={() => {}}
                        src={`${process.env.PUBLIC_URL}/icon11.svg`}
                        alt=""
                      />
                    </button>
                  </div>
                  <div>
                    <p className="mb-3">
                      좋아요 <span>0</span>개
                    </p>
                    <h4 className="mb-3">{data[i].title}</h4>
                    <p className="mb-3 text-base">{data[i].content}</p>
                  </div>
                  <div>
                    <input
                      className="w-full border-b border-solid border-gray-300 py-3"
                      placeholder="댓글달기"
                    ></input>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
}

export default App;
