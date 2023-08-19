export default function Schedule() {
  return (
    <main className="flex min-h-screen flex-col gap-32 items-center py-20 px-12 relative">
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
    </main>
  )
}
