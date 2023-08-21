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
      <div className="h-screen relative px-10 w-full text-center flex items-center flex-col justify-center">
        <Image src="/background.jpg" alt="background" fill className="-z-10"/>
        <p className="text-2l">
          Приглашаем на
          <br />
          свадьбу!
        </p>
        <h2 className="space-y-2 py-10 text-6xl font-badscript font-bold">
          Данила
          <br />
          &
          <br />
          Дарья
        </h2>
        <p className="py-10 text-2l">
          7 октября | 12:00
        </p>
      </div>
      <div className="h-screen relative px-12 py-20 w-full flex flex-col items-center justify-center">
        <Image src="/background.jpg" alt="background" fill className="-z-10"/>
        <div className="bg-orange-200 p-8 prose text-center">
          <h3 className="text-3xl font-badscript font-bold">
            Дорогой гость!
          </h3>
          <p>
            Мы рады сообщить Вам, что состоится самое главное мероприятие
            в нашей жизни - день нашей свадьбы!
          </p>
          <p>
            Приглашаем Вас разделить с нами радость этого незабываемого дня.
          </p>
          <h3 className="text-3xl font-badscript text-center font-bold">
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
        <h1 className="text-5xl font-badscript font-bold text-center">
          Свадебное расписание
        </h1>
        <table className="text-sm">
          <tr>
            <td>
              11:50
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
