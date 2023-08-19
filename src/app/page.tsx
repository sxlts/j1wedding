'use client';
import { useRouter, useSearchParams } from "next/navigation";
import { sendTelegramMessage } from "./telegram";

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const person = searchParams.get('person');

  return (
    <main className="flex min-h-screen flex-col gap-12 items-center px-4 py-6">
      <section className="text-center flex gap-8 flex-col">
        <h1 className="text-xl">
          Приглашаем Вас на свадьбу!
        </h1>
        <h2 className="text-4xl font-badscript font-bold">
          Данила
          <br />
          и
          <br />
          Дарья!
        </h2>
      </section>
      <p className="text-xl">
        7 октября | 12:00
      </p>
      <div className="bg-orange-200 p-8 prose">
        <h3 className="text-2xl font-badscript text-center">
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
            () => sendTelegramMessage(`Hello, world from ${person}`).then(() => router.push('/schedule'))
          }>
            Подтвердить
          </button>
        </div>
      </div>
    </main>
  )
}
