'use client';
import { useSearchParams } from "next/navigation";
import { sendTelegramMessage } from "./telegram";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const searchParams = useSearchParams();
  const [accepted, setAccepted] = useState(false);

  const person = searchParams.get('person');

  return (
    <main className="flex flex-col items-center">
      <div className="h-screen relative px-10 py-52 w-full text-center flex flex-col justify-between">
        <Image src="/background.jpg" alt="background" fill className="-z-10"/>
        <h1 className="text-2xl">
          Приглашаем Вас на свадьбу!
        </h1>
        <h2 className="text-5xl font-badscript font-bold">
          Данила
          <br />
          и
          <br />
          Дарья!
        </h2>
        <p className="text-2xl">
          7 октября | 12:00
        </p>
      </div>
      <div className="h-screen relative px-12 py-20 w-full flex flex-col items-center justify-center">
        <Image src="/background.jpg" alt="background" fill className="-z-10"/>
        <div className="bg-orange-200 p-8 prose text-center">
          <h3 className="text-2xl font-badscript">
            Дорогой гость!
          </h3>
          <p>
            Мы рады сообщить Вам, что состоится самое главное мероприятие
            в нашей жизни - день нашей свадьбы!
          </p>
          <p>
            Приглашаем Вас разделить с нами радость этого незабываемого дня.
          </p>
          <h3 className="text-2xl font-badscript text-center">
            Ждём Вас!
          </h3>
          <div className="flex justify-center">
            <button className="p-4 bg-black text-white rounded-md" onClick={
              () => sendTelegramMessage(`Hello, world from ${person}`).then(() => setAccepted(true))
            } disabled={accepted}>
              {accepted ? 'Подтверждено' : 'Подтвердить'}
            </button>
          </div>
        </div>
      </div>
      <div className="h-screen relative px-8 py-20 w-full flex flex-col justify-between items-center">
        <Image src="/background.jpg" alt="background" fill className="-z-10"/>
        <h1 className="text-5xl font-badscript text-center">
          Свадебное расписание
        </h1>
        <table className="text-sm">
          <tr>
            <td>
              12:20
              07.10.2023
            </td>
            <td className="p-4">
              <b>ЗАГС Петрозаводского района</b>
              <br />
              Санкт-Петербург, Торговая площадь, 5, Петергоф
            </td>
          </tr>
          <tr>
            <td>
              15:00
              07.10.2023
            </td>
            <td className="p-4">
              <b>Банкетный зал &quot;Александрия-Петергоф&quot;</b>
              <br />
              Санкт-Петербургское шоссе, 1345
            </td>
          </tr>
        </table>
        <Image src="/map.jpg" alt="map" width="300" height="200" className="md:opacity-0" />
      </div>
    </main>
  )
}
